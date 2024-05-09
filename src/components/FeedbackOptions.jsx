import React from 'react';
import PropTypes from 'prop-types';
import FeedbackStyled from './styledComponents/FeedbackStyled';
import Button from './styledComponents/Button';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const options = ['good', 'neutral', 'bad'];

  return (
    <FeedbackStyled>
      <h2>Leave Feedback</h2>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </FeedbackStyled>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
