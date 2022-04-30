import React, { useState } from 'react';
import './App.scss';
import ResultComponent from './components/result/Result';
import QuestionComponent from './components/question/QuestionComponent';
import questions from './questions.json';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleQuestion = (correct) => {
    setCurrentIndex(currentIndex + 1);
    if (correct) setCorrectAnswers(correctAnswers + 1);
  };

  const handleTryAgain = () => {
    setCurrentIndex(0);
    setCorrectAnswers(0);
  };

  return (
    <div className="container">
      <h2>Country Quiz</h2>
      {currentIndex < questions.length ? (
        <QuestionComponent
          question={questions[currentIndex].question}
          answers={questions[currentIndex].answers}
          handleQuestion={handleQuestion}
        />
      ) : (
        <ResultComponent correctAnswers={correctAnswers} handleTryAgain={handleTryAgain} />
      )}
    </div>
  );
}
