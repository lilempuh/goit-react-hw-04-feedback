import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonStyle>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            id={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </ButtonStyle>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;
