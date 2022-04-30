import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

export default function Result({ correctAnswers, handleTryAgain }) {
  return (
    <div className="rcontainer">
      <img src="undraw_winners.svg" alt="winner" />
      <div className="results">
        <h1>Results</h1>
        You got
        {' '}
        <span>{correctAnswers}</span>
        {' '}
        correct answers
      </div>
      <button type="button" onClick={handleTryAgain}>Try Again</button>
    </div>
  );
}

Result.propTypes = {
  correctAnswers: propTypes.number.isRequired,
  handleTryAgain: propTypes.func.isRequired,
};
