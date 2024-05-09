import React from 'react'; // Importación de React

/**
 * Componente de notificación.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.message - Mensaje de la notificación.
 */
const Notification = ({ message }) => {
  return <p>{message}</p>; // Renderización del mensaje de notificación
};

export default Notification; // Exportación del componente
