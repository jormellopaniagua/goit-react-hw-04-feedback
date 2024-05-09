import React from 'react'; // Importación de React
import PropTypes from 'prop-types'; // Importación de PropTypes

/**
 * Componente de sección que muestra un título y contenido.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título de la sección.
 * @param {*} props.children - Contenido de la sección.
 */
const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2> {/* Título de la sección */}
      {children} {/* Contenido de la sección */}
    </>
  );
};

// Definición de propTypes para validar las propiedades del componente
Section.propTypes = {
  title: PropTypes.string.isRequired, // Título de la sección como string requerido
  children: PropTypes.node.isRequired, // Contenido de la sección como nodo requerido
};

export default Section; // Exportación del componente
