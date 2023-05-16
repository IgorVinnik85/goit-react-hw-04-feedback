import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ addFeedback, btn }) => {
  
  return (
    <div className={css.feedback}>
      <ul className={css.list}>
        {btn.map(el => {
          return (
            <li key={el}>
              <button className={css.btn} type="button" onClick={addFeedback}>
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
  btn: PropTypes.arrayOf(PropTypes.string.isRequired),
};
