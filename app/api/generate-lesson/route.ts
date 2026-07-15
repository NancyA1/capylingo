import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  const { topic, language } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an AI language teacher.

Create a lesson in ${language} about: ${topic}

Return ONLY valid JSON in this format:

{
  "title": "...",
  "description": "...",
  "questions": [
    {
      "question": "English word",
      "answer": "translation in ${language}",
      "pronunciation": "how to read it",
      "hint": "memory trick",
      "image": "https://..."
    }
  ]
}

Rules:
- Make exactly 10 questions.
- Every question MUST include an image URL.
- Use royalty-free educational images.
- Prefer images from Unsplash, Pixabay, Pexels or Wikimedia Commons.
- The image must directly represent the word.
- Return ONLY valid JSON.
    `,
  });

  const text = response.text;

  return NextResponse.json({
    lesson: text,
  });
}