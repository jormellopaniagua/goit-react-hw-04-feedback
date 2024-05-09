import React from 'react'; // Importación de React
import PropTypes from 'prop-types'; // Importación de PropTypes

/**
 * Componente que muestra estadísticas de feedback.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.feedback - Objeto con las estadísticas de feedback.
 * @param {number} props.feedback.good - Número de feedbacks buenos.
 * @param {number} props.feedback.neutral - Número de feedbacks neutrales.
 * @param {number} props.feedback.bad - Número de feedbacks malos.
 */
const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback; // Desestructuración de las estadísticas de feedback

  // Si no hay ningún feedback, se muestra un mensaje de notificación
  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="No feedback given" />;
  }

  const total = good + neutral + bad; // Total de feedbacks
  const positivePercentage = Math.round((good / total) * 100); // Porcentaje de feedbacks positivos

  // Renderización de las estadísticas
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p> {/* Número de feedbacks buenos */}
      <p>Neutral: {neutral}</p> {/* Número de feedbacks neutrales */}
      <p>Bad: {bad}</p> {/* Número de feedbacks malos */}
      <p>Total: {total}</p> {/* Total de feedbacks */}
      <p>Positive feedback: {positivePercentage}%</p>{' '}
      {/* Porcentaje de feedbacks positivos */}
    </div>
  );
};

// Definición de propTypes para validar las propiedades del componente
Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired, // Número de feedbacks buenos como número requerido
    neutral: PropTypes.number.isRequired, // Número de feedbacks neutrales como número requerido
    bad: PropTypes.number.isRequired, // Número de feedbacks malos como número requerido
  }).isRequired,
};

/**
 * Componente de notificación.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.message - Mensaje de la notificación.
 */
const Notification = ({ message }) => {
  return <p>{message}</p>; // Renderización del mensaje de notificación
};

// Definición de propTypes para validar las propiedades del componente Notification
Notification.propTypes = {
  message: PropTypes.string.isRequired, // Mensaje de la notificación como string requerido
};

export default Statistics; // Exportación del componente
