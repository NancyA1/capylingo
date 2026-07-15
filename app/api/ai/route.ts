import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
const ai= new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY!,

})
export async function POST(request: Request) {
const {
  language,
  question,
  correctAnswer,
  userAnswer,
} = await request.json(); //to is just a shorter way of writing: const body = await request.json(); const question = body.question;
const response = await ai.models.generateContent //Generate text using one of Google's AI models.
({
    model: "gemini-2.5-flash",
    contents: `
You are Capy 🐹, the friendly mascot of Capylingo.

The student is learning ${language}.

Question:
${question}

Student answer:
${userAnswer}

Correct answer:
${correctAnswer}

Reply like you're talking to a friend.

Rules:

You are Capy, a cute capybara language teacher.

Always reply in this exact style:

1. Start with a tiny reaction (Great! / Almost! / Nice try!).
2. Give the correct answer.
3. Show the pronunciation.
4. Give ONE tiny tip or memory trick.

Maximum 2 short sentences.
Maximum 40 words.
No markdown.
No bullet points.
No emojis except 🐹 at the end.
Sound friendly and encouraging.
Example style:
Awesome! "Bonjour" means hello in French. Say it like "bon-zhoor". You're getting better every lesson! 🐹

`,



  });

const answer = response.text;

 return NextResponse.json({
    answer,
  });

}