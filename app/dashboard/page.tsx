"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function DashBoard() {
  const router = useRouter();
  const handleLesson = (language: string) => {
    router.push(`/course/${language}`);
  };
  const [progress, setProgress] = useState<Record<string, any>>({});
  const [streak, setStreak] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem("username");

    if (savedName) {
      setUsername(savedName);
    }

    const saved = localStorage.getItem("progress");

    if (saved) {
      setProgress(JSON.parse(saved));
    } else {
      const defaultProgress = {
        french: {
          level: 0,
          xp: 0,
          completed: 0,
          completedLessons: [],
        },

        japanese: {
          level: 0,
          xp: 0,
          completed: 0,
          completedLessons: [],
        },

        spanish: {
          level: 0,
          xp: 0,
          completed: 0,
          completedLessons: [],
        },

        chinese: {
          level: 0,
          xp: 0,
          completed: 0,
          completedLessons: [],
        },
      };

      localStorage.setItem("progress", JSON.stringify(defaultProgress));
      setProgress(defaultProgress);
    }
    const savedStreak = JSON.parse(localStorage.getItem("streak") || "{}");

    setStreak(savedStreak.count || 0);
  }, []);

  const getLevel = (lang: string) => {
    return progress[lang]?.level || 0;
  };
  const getCompletedLessons = (lang: string) => {
    return progress[lang]?.completedLessons?.length || 0;
  };
  const getLanguageXP = (lang: string) => {
    return progress[lang]?.xp || 0;
  };
  const getTotalXP = () => {
    return (
      (progress.french?.xp || 0) +
      (progress.japanese?.xp || 0) +
      (progress.spanish?.xp || 0) +
      (progress.chinese?.xp || 0)
    );
  };
  const getProgressWidth = (lang: string) => {
    const completed = progress[lang]?.completedLessons?.length || 0;

    const totalLessons = 10; // change later if languages have different amounts

    return `${(completed / totalLessons) * 100}%`;
  };
  const generateLesson = async () => {
    const response = await fetch("/api/generate-lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "french",
        topic: "food",
      }),
    });

    const data = await response.json();

    const cleaned = data.lesson
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const lessonObject = JSON.parse(cleaned);

    const existing = JSON.parse(localStorage.getItem("ai_lessons") || "[]");

    localStorage.setItem(
      "ai_lessons",
      JSON.stringify([
        ...existing,
        {
          ...lessonObject,
          language: "french",
        },
      ]),
    );
  };
  return (
    <div className="dashboard">
      <div className="wel-section">
        <div className="welcome-text">
          <h1>Hello {username || "Learner"}</h1>

          <p>Ready for your next language adventure?</p>
        </div>

        <img className="img1" src="/bara7.jpg" alt="Capybara" />
      </div>

      {/* 

         <div className="wel-section">
            <h1>
 Hello {username || "Learner"} 🐹
</h1>

             <img className="img1"
          src="/capybara (1).png"
          alt="Capybara Sticker" 
           />
        </div>  */}
      {/* <div className="stats">
        <img className="img1"
          src="/bara1.jpg"
          alt="Capybara Sticker"/>

      <p id="streak">🔥 Streak: {streak} days</p>
<img className="img1"
          src="/bara4.jpg"
          
          alt="Capybara Sticker" />


       <img className="img1"
          src="/bara2.jpg"
          
          alt="Capybara Sticker" />
       <p id="xp">⭐ XP: {getTotalXP()}</p>     
        <img className="img1"
          src="/bara3.jpg"
          
          alt="Capybara Sticker" 
           />
      </div> */}

      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <h2>{streak}</h2>
          <p>Day Streak</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <h2>{getTotalXP()}</h2>
          <p>Total XP</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <h2>{Math.floor(getTotalXP() / 100) + 1}</h2>
          <p>Global Level</p>
        </div>
      </div>

      <div className="Languages">
        <div className="card">
          <div className="card-header">
            <h3>🇫🇷 French</h3>

            <img src="/capy1.jpg" alt="French Capy" className="lang-img" />
          </div>
          <p className="language-level">Level {getLevel("french")}</p>
          <p className="lessons-count">
            Lessons {progress.french?.completedLessons?.length || 0}/10
          </p>
          <p className="language-xp">⭐ XP {getLanguageXP("french")}</p>
          <div className="bar">
            <div
              className="bar-fill"
              style={{ width: getProgressWidth("french") }}
            />
          </div>
          <button onClick={() => handleLesson("french")}>Continue</button>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>🇯🇵 Japanese</h3>

            <img src="/bara8.jpg" alt="Japanese Capy" className="lang-img" />
          </div>
          <p className="language-level">Level {getLevel("japanese")}</p>
          <p className="lessons-count">
            Lessons {progress.japanese?.completedLessons?.length || 0}/10
          </p>
          <p className="language-xp">⭐ XP {getLanguageXP("japanese")}</p>
          <div className="bar">
            <div
              className="bar-fill"
              style={{ width: getProgressWidth("japanese") }}
            />
          </div>
          <button onClick={() => handleLesson("japanese")}>Continue</button>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>🇪🇸 Spanish</h3>

            <img src="/bara9.webp" alt=" German Capy" className="lang-img" />
          </div>
          <p className="language-level">Level {getLevel("spanish")}</p>
          <p className="lessons-count">
            Lessons {progress.spanish?.completedLessons?.length || 0}/10
          </p>
          <p className="language-xp">⭐ XP {getLanguageXP("spanish")}</p>
          <div className="bar">
            <div
              className="bar-fill"
              style={{ width: getProgressWidth("spanish") }}
            />
          </div>
          <button onClick={() => handleLesson("spanish")}>Continue</button>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>🇨🇳 Chinese</h3>

            <img src="/bara10.jpg" alt="Chinese Capy" className="lang-img" />
          </div>
          <p className="language-level">Level {getLevel("chinese")}</p>
          <p className="lessons-count">
            Lessons {progress.chinese?.completedLessons?.length || 0}/10
          </p>
          <p className="language-xp">⭐ XP {getLanguageXP("chinese")}</p>
          <div className="bar">
            <div
              className="bar-fill"
              style={{ width: getProgressWidth("chinese") }}
            />
          </div>
          <button onClick={() => handleLesson("chinese")}>Continue</button>
        </div>
      </div>
    </div>
  );
}
