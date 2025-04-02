# Quiz App

A simple and interactive quiz application built with React, featuring a timer, progress tracking, and highscore functionality.

## Features

- Fetches questions from an API
- Displays multiple-choice questions
- Tracks user score and highscore
- Timer for each question
- Restart quiz option

## Technologies Used

- React.js
- Tailwind CSS (for styling)
- Fetch API (for retrieving questions)
- useReducer and useEffect hooks

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/quiz-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run quiz
   ```

## API

The app fetches questions from a local server running at `http://localhost:9000/questions`. Each question object has the following structure:

```json
{
  "question": "What is the capital of France?",
  "options": ["Berlin", "Madrid", "Paris", "Rome"],
  "correctOption": 2,
  "points": 10
}
```

## How to Use

1. Start the application.
2. Answer the multiple-choice questions.
3. View your progress and score.
4. Try to beat the highscore!
