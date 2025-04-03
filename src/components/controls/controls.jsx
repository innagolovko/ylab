import React from 'react';
import PropTypes from 'prop-types'; // Устанавливаем пакет prop-types для проверки типов
import './controls.css';

function Controls ({ onAdd }) {
  console.log('Controls');
  return (
    <div className='app__controls'>
      <button
        className='app__button app__button-add'
        onClick={() => onAdd()}>
          Добавить
      </button>
    </div>
  )
};

Controls.propTypes = {
  onAdd: PropTypes.func.isRequired
};

// Функция заглушка, если свойство не будет передано
Controls.defaultProps = {
  onAdd: () => {}
};

export default React.memo(Controls);
