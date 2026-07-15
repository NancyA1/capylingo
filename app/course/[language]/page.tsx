"use client";

import { frenchLessons } from "@/app/data/french";
import { japaneseLessons } from "@/app/data/japanese";
import { spanishLessons } from "@/app/data/spanish";
import { chineseLessons } from "@/app/data/chinese";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const [progress, setProgress] = useState<any>({});
  const language = params.language as string;

  const lessonsMap = {
    french: frenchLessons,
    japanese: japaneseLessons,
    spanish: spanishLessons,
    chinese: chineseLessons,
  };

  const baseLessons = lessonsMap[language as keyof typeof lessonsMap];
  const completedLessons = progress[language]?.completedLessons || [];
  const [aiLessons, setAiLessons] = useState<any[]>([]);

  useEffect(() => {
    const storedAI = localStorage.getItem("ai_lessons");

    if (storedAI) {
      const allAI = JSON.parse(storedAI);

      const languageAI = allAI.filter(
        (lesson: any) => lesson.language === language,
      );

      setAiLessons(languageAI);
    }
  }, [language]);

  useEffect(() => {
    const saved = localStorage.getItem("progress");

    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const builtInCount = Object.values(baseLessons).length;

  const aiWithIds = aiLessons.map((lesson, index) => ({
    ...lesson,
    isAI: true,
    id: builtInCount + index,
  }));
  const allLessons = [
    ...Object.values(baseLessons).map((l, i) => ({
      ...l,
      id: i,
      isAI: false,
    })),
    ...aiWithIds,
  ];
  return (
    <div className="course-page">
     <div className="lesson-topbar">
            <button
              className="back-btn"
              onClick={() => router.push(`/dashboard`)}
            >
              ← Back
            </button>
          </div>
      <h1>{language.toUpperCase()} Course</h1>

      {allLessons.map((lesson, lessonId) => (
        <div key={lessonId} className="lesson-item">
          <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>

          {completedLessons.includes(Number(lessonId)) ? (
            <button
              onClick={() => router.push(`/lesson/${language}/${lessonId}`)}
            >
              ✅ Review
            </button>
          ) : Number(lessonId) === completedLessons.length ? (
            <button
              onClick={() => router.push(`/lesson/${language}/${lessonId}`)}
            >
              ▶ Start
            </button>
          ) : (
            <button disabled>🔒 Locked</button>
          )}
        </div>
      ))}
    </div>
  );
}
