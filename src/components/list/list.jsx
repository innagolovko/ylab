import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import Item from '../item/item.jsx';

function List({ list, onDeleteItem, onSelectItem }) {
  console.log('List');

  return (
    <div className="app__list">
      {list.map(item => (
        <div key={item.code} className="app__list-box">
          <Item
            item={item}
            onDelete={onDeleteItem}
            onSelect={onSelectItem}
          />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  List: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

// Функция заглушка
List.defaultProps = {
  onDeleteItem: () => {},
  onSelect: () => {},
};

export default React.memo(List);
