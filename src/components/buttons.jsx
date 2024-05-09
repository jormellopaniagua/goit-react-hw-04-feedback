import React, { useState } from 'react';

// Creamos un componente de notificación
const Notification = ({ message }) => <p>{message}</p>;

const Buttons = () => {
  // Estado inicial del componente para almacenar los recuentos de buenos, neutrales y malos, y el estado de recogida de revisión
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  // Método para manejar el clic en los botones de retroalimentación
  const handleFeedback = type => {
    // Actualiza el estado según el tipo de retroalimentación recibida y marca que se han recogido revisiones
    // eslint-disable-next-line default-case
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
    setHasFeedback(true);
  };

  // Método para contar el número total de comentarios recopilados
  const countTotalFeedback = () => {
    return hasFeedback ? good + neutral + bad : 0;
  };

  // Método para calcular el porcentaje de comentarios positivos
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>

      {hasFeedback ? (
        <div>
          <h2>Feedback Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>
            Positive feedback percentage:{' '}
            {Math.round(countPositiveFeedbackPercentage())}%
          </p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Buttons;
