import React from 'react';
import PropTypes from 'prop-types';
import { Statselement, StatsElementSpan } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <Statselement>Good:{good}</Statselement>
      <Statselement>Neutral:{neutral}</Statselement>
      <Statselement>Bad:{bad}</Statselement>
      <Statselement>Total:{onCountTotalFeedback}</Statselement>
      <Statselement>
        {' '}
        <StatsElementSpan>Positive feedback:</StatsElementSpan>
        {onCountPositiveFeedbackPercentage
          ? `${onCountPositiveFeedbackPercentage}%`
          : `There are currently no positive reviews`}
      </Statselement>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
