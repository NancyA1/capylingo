# CapyLingo

CapyLingo is an AI-powered language learning application built with Next.js that helps users learn new languages through interactive lessons, quizzes, pronunciation practice, and AI assistance.

The idea behind CapyLingo is to make language learning more enjoyable by combining structured vocabulary lessons with an interactive learning experience.

## Live Demo

https://capylingo.vercel.app

## Features

- Learn vocabulary through interactive lessons
- Support for multiple languages:
  - French
  - Spanish
  - Japanese
  - Chinese
- Image-based vocabulary learning
- Pronunciation support using the browser speech synthesis API
- Quiz system to test learned words
- XP system to track learning progress
- Lesson completion screens and course progression
- Learning streak tracking
- AI-powered assistance using Google Gemini
- AI-generated lessons based on user-selected topics

## How It Works

Each lesson contains vocabulary words with:

- English meaning
- Target language translation
- Pronunciation guide
- Helpful hints
- Visual images

Users first learn the vocabulary through the lesson mode, then complete a quiz to test their understanding.

Correct answers reward XP and allow users to progress through the course. If users answer incorrectly, they can ask the AI assistant for explanations and guidance.

## Technologies Used

- Next.js
- React
- TypeScript
- CSS
- Google Gemini API
- Web Speech API
- Local Storage

## Project Structure

```text
app/
├── api/
│   ├── ai/
│   └── generate-lesson/
│
├── components/
│   ├── LessonCompleteScreen.tsx
│   └── CourseCompleteScreen.tsx
│
├── course/
├── lesson/
├── dashboard/
│
└── data/
    ├── french.ts
    ├── spanish.ts
    ├── japanese.ts
    └── chinese.ts

public/
└── images and application assets
```

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/NancyA1/capylingo.git
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```

## Deployment

The project is deployed using Vercel.

Live Demo:

https://capylingo.vercel.app
## Future Improvements

Some improvements planned for CapyLingo:

- User accounts and cloud progress saving
- More languages and lessons
- AI conversation practice
- Improved pronunciation feedback
- Mobile application version
