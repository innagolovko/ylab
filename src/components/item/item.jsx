import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './item.css';
import { plural } from '../../utils';

function Item({ item, onSelect, onDelete }) {
  console.log('Item', item.code);

  const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      onSelect(item.code);
      if (!item.selected) {
        setCount(count + 1);
      }
    },
    onDelete: (event) => {
      event.stopPropagation();
      onDelete(item.code);
    }
  }

  return (
    <div
      className={'app__list-item' + (item.selected ? ' app__list-item_selected' : '')}
      // onClick={() => onSelect(item.code)}
      onClick={callbacks.onClick}
    >
      <div className="app__list-code">{item.code}</div>
      <div className="app__list-title">
        {item.title}

        {/* Добавляем счётчик */}
        <div className={'app__list-count' + (item.selected ? ' app__list-count_selected' : '')}>
          {item.count &&
            `| Выделяли ${item.count} ${plural(item.count, {
              one: 'раз',
              few: 'раза',
              many: 'раз',
            })}`}
        </div>
      </div>
      <div className="app__list-actions">
        <button
          className="app__button app__button-delete"
          // onClick={() => onDelete(item.code)}
          onClick={callbacks.onDelete}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProp = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
