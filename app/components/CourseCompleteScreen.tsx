"use client";

import { useState } from "react";

type Props = {
  language: string;
  xp: number;
  onGenerate: (topic: string) => void;
  onDashboard: () => void;
};

export default function CourseCompleteScreen({
  language,
  xp,
  onGenerate,
  onDashboard,
}: Props) {
  const [topic, setTopic] = useState("");

  return (
    <div className="course-complete-page">
      <img src="/bara4.jpg" className="lesson-capy" alt="Happy Capy" />

      <h1>🎉 Congratulations!</h1>

      <h2>You completed the {language} course!</h2>

      <h3>⭐ Total XP Earned: {xp}</h3>

      <div className="capy-message">
        <h3>🐹 Capy says:</h3>

        <p>You've mastered the official course!</p>

        <p>Now it's time for personalized learning.</p>

        <p>
          Tell me anything you'd like to learn, and I'll create a brand-new
          lesson just for you.
        </p>
      </div>

      <h3>What would you like to learn?</h3>

      <input
        type="text"
        placeholder="Examples: Programming, Football, Movies..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={() => onGenerate(topic)} disabled={!topic.trim()}>
        ✨ Generate Lesson
      </button>

      <button onClick={onDashboard}>🏠 Back to Dashboard</button>
    </div>
  );
}
