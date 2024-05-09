import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './section';
import PropTypes from 'prop-types';
import Page from './styledComponents/Page';
export class App extends Component {
  constructor(props) {
    // Constructor de la clase App que recibe props
    super(props); // Llama al constructor de la clase padre con props
    this.state = {
      feedback: {
        good: 0,
        neutral: 0,
        bad: 0,
      },
    };
  }

  handleFeedback = type => {
    // Método para manejar el feedback
    this.setState(prevState => ({
      // Actualiza el estado
      feedback: {
        // Actualiza el objeto feedback
        ...prevState.feedback, // Mantiene el estado anterior del feedback
        [type]: prevState.feedback[type] + 1, // Incrementa el tipo de feedback dado
      },
    }));
  };

  render() {
    const { feedback } = this.state; // Extrae el objeto feedback del estado

    return (
      <Page>
        <h1>Expresso Café Feedback</h1>
        <Section title="">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="">
          <Statistics feedback={feedback} />
        </Section>
      </Page> // Cierra el div principal
    );
  }
}

App.propTypes = {
  // Define las propTypes del componente App
  onLeaveFeedback: PropTypes.func.isRequired, // onLeaveFeedback debe ser una función requerida
};

// Exporta el componente App como valor por defecto
