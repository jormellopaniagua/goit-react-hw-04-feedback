import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Statistics from './statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './section';
import Page from './styledComponents/Page';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <Page>
      <h1>Expresso Café Feedback</h1>
      <Section title="">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="">
        <Statistics feedback={feedback} />
      </Section>
    </Page>
  );
};

App.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
