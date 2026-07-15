'use client';

import { useEffect, useState } from "react";

type Props = {
  xp: number;
  onContinue: () => void;
};

export default function LessonCompleteScreen({ xp, onContinue }: Props) {
  const [displayXp, setDisplayXp] = useState(0);

  // XP animation ticker
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= xp) {
        current = xp;
        clearInterval(interval);
      }
      setDisplayXp(current);
    }, 30);
    return () => clearInterval(interval);
  }, [xp]);

  return (
   
  <div className="lesson-complete-page">
    <div className="lesson-complete-container">
      <h1 className="lesson-complete-title">
  Lesson Complete!
</h1>
      <p className="lesson-complete-text">
  Amazing work! You earned experience and unlocked the next challenge.
</p>
      <h2 className="lesson-complete-xp">+{displayXp} XP</h2>
      <button className="lesson-complete-button" onClick={onContinue}>
        Continue
      </button>
    </div>
  </div>
);

}
