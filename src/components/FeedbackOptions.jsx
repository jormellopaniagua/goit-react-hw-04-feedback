import React from 'react';
import PropTypes from 'prop-types';
import FeedbackStyled from './styledComponents/FeedbackStyled';
import Button from './styledComponents/Button';

/**
 * Componente que muestra opciones de retroalimentación y permite al usuario dejar su feedback.
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onLeaveFeedback - Función que se llama cuando el usuario selecciona una opción de feedback.
 */
const FeedbackOptions = ({ onLeaveFeedback }) => {
  // Opciones de feedback disponibles
  const options = ['good', 'neutral', 'bad'];

  return (
    <FeedbackStyled>
      <h2>Leave Feedback</h2>
      {/* Mapeo de las opciones para renderizar botones */}
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </FeedbackStyled>
  );
};

// Definición de las propTypes para las propiedades del componente
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired, // Función requerida para manejar el feedback
};

export default FeedbackOptions;
