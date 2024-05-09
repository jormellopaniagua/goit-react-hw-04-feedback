import React, { Component } from 'react';

// Creamos un componente de notificación
const Notification = ({ message }) => <p>{message}</p>;

export default class Buttons extends Component {
  // Estado inicial del componente para almacenar los recuentos de buenos, neutrales y malos, y el estado de recogida de revisión
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false, // Inicialmente no se han recogido revisiones
  };

  // Método para manejar el clic en los botones de retroalimentación
  handleFeedback = type => {
    // Actualiza el estado según el tipo de retroalimentación recibida y marca que se han recogido revisiones
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      hasFeedback: true,
    }));
  };

  // Método para contar el número total de comentarios recopilados
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const hasFeedback = this.state.hasFeedback; // Obtener el estado de hasFeedback
    return hasFeedback ? good + neutral + bad : 0; // Si no hay retroalimentación, devuelve 0
  };

  // Método para calcular el porcentaje de comentarios positivos
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad, hasFeedback } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleFeedback('good')}>Good</button>
        <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => this.handleFeedback('bad')}>Bad</button>

        {hasFeedback ? ( // Renderizamos el bloque de estadísticas solo si se han recogido revisiones
          <div>
            <h2>Feedback Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback percentage:{' '}
              {this.countPositiveFeedbackPercentage.math.round()}%
            </p>
          </div>
        ) : (
          // Si no se han recogido revisiones, mostramos el mensaje de notificación
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
