export type AILesson = {
  title: string;
  description: string;
  questions: {
    question: string;
    answer: string;
    pronunciation: string;
    hint: string;
  }[];
};


const STORAGE_KEY = "ai_lessons";

// Get all AI lessons
export function getAILessons(): AILesson[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Save a new AI lesson
export function saveAILesson(lesson: AILesson) {
  const existing = getAILessons();

  const updated = [...existing, lesson];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}