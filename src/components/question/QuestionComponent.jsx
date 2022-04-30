import propTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './styles.scss';

export default function QuestionComponent({ question, answers, handleQuestion }) {
  const characters = ['A', 'B', 'C', 'D'];
  const [answered, setAnswered] = useState(-1);
  const [clicked, setClicked] = useState([false, false, false, false]);

  useEffect(() => {
    setAnswered(-1);
    setClicked(new Array(4).fill(false));
  }, [question]);

  const handleClicked = (index) => {
    const newClicked = new Array(4).fill(false);
    newClicked[index] = true;

    setClicked(newClicked);
    setAnswered(index);
  };

  const handleSubmit = () => handleQuestion(answers[answered].correct);

  return (
    <div className="qcontainer">
      <div className="logo">
        <img src="undraw_adventure.svg" alt="adventure" />
      </div>

      <div className="title">
        <h3>{question}</h3>
      </div>

      <div className="questions">
        {answers.map((answer, index) => {
          const isCorrect = answer.correct;

          const isAnswered = (answered !== -1 && isCorrect) || answered === index;
          const answeredColorClass = isCorrect ? 'button_game correct_question' : 'button_game bad_question';

          return (
            <button
              className={isAnswered ? answeredColorClass : 'button_game'}
              type="button"
              key={answer.answer}
              onClick={() => handleClicked(index)}
              disabled={answered !== -1}
            >
              <span>{characters[index]}</span>
              <span>{answer.answer}</span>
              {isAnswered ? (
                <img src={isCorrect ? 'icons/valid.svg' : 'icons/error.svg'} alt={isCorrect ? 'yes' : 'no'} />
              ) : null}
            </button>
          );
        })}
      </div>

      {clicked.some((click) => !!click) ? (
        <div className="next">
          <button
            className="button_game"
            type="button"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

QuestionComponent.propTypes = {
  handleQuestion: propTypes.func.isRequired,
  question: propTypes.string.isRequired,
  answers: propTypes.arrayOf(propTypes.shape({
    question: propTypes.string,
    correct: propTypes.bool,
  })).isRequired,
};
