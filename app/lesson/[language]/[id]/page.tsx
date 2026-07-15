"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { frenchLessons } from "@/app/data/french";
import { japaneseLessons } from "@/app/data/japanese";
import { spanishLessons } from "@/app/data/spanish";
import { chineseLessons } from "@/app/data/chinese";
import LessonCompleteScreen from "@/app/components/LessonCompleteScreen";
import CourseCompleteScreen from "@/app/components/CourseCompleteScreen";
export default function LessonPage() {
  const params = useParams();
  const language = params.language as string;
  const id = params.id as string;
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [mood, setMood] = useState<"idle" | "happy" | "sad">("idle");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [xp, setXp] = useState(0);
  const [finished, setFinished] = useState(false);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [aiAnswer, setAiAnswer] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [learnIndex, setLearnIndex] = useState(0);
  const lessonId = Number(id);
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();

    switch (language) {
      case "french":
        utterance.lang = "fr-FR";
        break;
      case "spanish":
        utterance.lang = "es-ES";
        break;
      case "japanese":
        utterance.lang = "ja-JP";
        break;
      case "chinese":
        utterance.lang = "zh-CN";
        break;
      default:
        utterance.lang = "en-US";
    }

    const matchingVoice = voices.find((voice) =>
      voice.lang.startsWith(utterance.lang.slice(0, 2)),
    );

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };
  const lessonsMap = {
    french: frenchLessons,
    japanese: japaneseLessons,
    spanish: spanishLessons,
    chinese: chineseLessons,
  };

  const baseLessons = lessonsMap[language as keyof typeof lessonsMap] || [];

  const aiLessons =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("ai_lessons") || "[]").filter(
          (lesson: any) => lesson.language === language,
        )
      : [];

  const allLessons = [...Object.values(baseLessons), ...aiLessons];

  const lesson = allLessons[lessonId];

  if (!lesson) {
    return <h1>Lesson not found.</h1>;
  }

  const questions = lesson.questions;
  const progress = (currentQuestion / questions.length) * 100;

  const checkAnswer = () => {
    setAiAnswer("");
    if (answer.toLowerCase() === questions[currentQuestion].answer) {
      setResult("✅ Correct! +10 XP 🐹");
      setMood("happy");
      setXp((prev) => prev + 10);

      const next = currentQuestion + 1;

      if (next < questions.length) {
        setCurrentQuestion(next);
        setAnswer("");
        setAiAnswer("");
      } else {
        const nextLesson = lessonId + 1;

        localStorage.setItem("unlockedLesson", nextLesson.toString());
        const saved = JSON.parse(localStorage.getItem("progress") || "{}");

        if (!saved[language]) {
          saved[language] = {
            level: 0,
            xp: 0,
            completed: 0,
            completedLessons: [],
          };
        }

        if (!saved[language].completedLessons) {
          saved[language].completedLessons = [];
        }

        if (!saved[language].completedLessons.includes(lessonId)) {
          saved[language].completedLessons.push(lessonId);

          saved[language].completed = saved[language].completedLessons.length;

          saved[language].level = saved[language].completedLessons.length;

          saved[language].xp += xp;
        }

        localStorage.setItem("progress", JSON.stringify(saved));

        const today = new Date().toDateString();

        const streakData = JSON.parse(localStorage.getItem("streak") || "{}");

        if (!streakData.lastStudy) {
          streakData.lastStudy = today;
          streakData.count = 1;
        } else {
          const lastDate = new Date(streakData.lastStudy);
          const currentDate = new Date(today);

          const difference =
            (currentDate.getTime() - lastDate.getTime()) /
            (1000 * 60 * 60 * 24);

          if (difference === 1) {
            streakData.count += 1;
          } else if (difference > 1) {
            streakData.count = 1;
          }

          streakData.lastStudy = today;
        }

        localStorage.setItem("streak", JSON.stringify(streakData));

        if (nextLesson >= Object.keys(allLessons).length) {
          setCourseCompleted(true);
        }

        setFinished(true);
      }
    } else {
      setResult("❌ Try again");
      setMood("sad");
    }
  };

  const askAI = async () => {
    setLoadingAI(true);
    setAiAnswer("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          question: questions[currentQuestion].question,
          correctAnswer: questions[currentQuestion].answer,
          userAnswer: answer,
        }),
      });

      const data = await response.json();

      setAiAnswer(data.answer);
    } catch (error) {
      setAiAnswer("Sorry, something went wrong.");
    }

    setLoadingAI(false);
  };

  const generateAILesson = async (topic: string) => {
    try {
      const response = await fetch("/api/generate-lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          topic,
        }),
      });

      const data = await response.json();

      const cleaned = data.lesson
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const lessonObject = JSON.parse(cleaned);

      // Save AI lesson to localStorage
      const existing = JSON.parse(localStorage.getItem("ai_lessons") || "[]");

      localStorage.setItem(
        "ai_lessons",
        JSON.stringify([...existing, lessonObject]),
      );

      // Go back to course page so user sees new lesson
      router.push(`/course/${language}`);
    } catch (error) {
      console.error("AI lesson error:", error);
    }
  };
  if (finished) {
    if (courseCompleted) {
      return (
        <CourseCompleteScreen
          language={language}
          xp={xp}
          onGenerate={(topic) => generateAILesson(topic)}
          onDashboard={() => router.push("/dashboard")}
        />
      );
    }

    return (
      <LessonCompleteScreen
        xp={xp}
        onContinue={() => router.push(`/course/${language}`)}
      />
    );
  }

  if (mode === "learn") {
    const item = questions[learnIndex];

    return (
      <div className="lesson-page">
        <div className="learn-card">
          <div className="lesson-topbar">
            <button
              className="back-btn"
              onClick={() => router.push(`/course/${language}`)}
            >
              ← Back
            </button>
          </div>
          <div className="learn-header">
            <h1>{lesson.title}</h1>

            <span className="learn-label">✨ New Word</span>
          </div>

          <img src={item.image} className="lesson-image" alt={item.question} />

          <div className="word-row">
            <div className="word-column">
              <small>English</small>
              <h2>{item.question}</h2>
            </div>

            <div className="word-column">
              <small>{language}</small>
              <h2>{item.answer}</h2>
            </div>
          </div>

          <button className="speaker-btn" onClick={() => speak(item.answer)}>
            🔊 Hear pronunciation
          </button>

          <div className="hint-box">💡 {item.hint}</div>

          <button
            className="learn-next"
            onClick={() => {
              if (learnIndex < questions.length - 1) {
                setLearnIndex(learnIndex + 1);
              } else {
                setMode("quiz");
              }
            }}
          >
            {learnIndex === questions.length - 1
              ? "Start Quiz 🚀"
              : "Continue →"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <div className="lesson-card">
        {mood === "idle" && <img src="/capy1.jpg" className="lesson-capy" />}
        {mood === "happy" && <img src="/bara4.jpg" className="lesson-capy" />}
        {mood === "sad" && <img src="/sadcapy.jpg" className="lesson-capy" />}

        <h1>{lesson.title}</h1>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <span className="quiz-label">🌍 Translate this word</span>

        <h2>{questions[currentQuestion].question}</h2>
        <input
  className="answer-input"
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && answer.trim()) {
      checkAnswer();
    }
  }}
  placeholder="Type your answer..."
  autoComplete="off"
/>

        <button className="submit-btn" onClick={checkAnswer}>
           Submit
        </button>
        {/* <button onClick={askAI}>🐹 Ask Capy</button> */}
        {result.includes("❌") && <button onClick={askAI}>🐹 Ask Capy</button>}
        {loadingAI && <p>🐹 Capy is thinking...</p>}
        {aiAnswer && (
          <div className="ai-box">
            <h3>🐹 Capy says:</h3>
            <p>{aiAnswer}</p>
          </div>
        )}
        {!aiAnswer && <p>{result}</p>}
      </div>
    </div>
  );
}
