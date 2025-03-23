import React from 'react';
import { useState } from 'react';
import { createElement } from './utils.js';
import './styles.css';

function App({ store }) {
  const [selectCode, setSelectCode] = useState(null);
  const [selectCount, setSelectCount] = useState ({});

  const handleItemClick = code => {
    if (selectCode === code) {
      setSelectCode(null);
    } else {
      setSelectCode(code);
      setSelectCount(prevCounts => ({
        ...prevCounts,
        [code]: (prevCounts[code] || 0) + 1
      }));
      console.log(`Элемент ${code} был выбран ${selectCount[code] + 1} раз`);
      console.log(selectCount);
    }
  };

 // Достаём list из store методом getState
  const list = store.getState().list;

  return (
    <div className="app">
      <div className="app__head">
        <h1 className="app__title">Приложение на чистом JS</h1>
      </div>
      <div className="app__controls">
        <button className="app__button app__button-add" onClick={() => store.addItem()}>
          Добавить
        </button>
      </div>
      <div className="app__center">
        <div className="app__list">
          {list.map(item => (
            <div key={item.code} className="app__list-box">
              <div
                className={
                  'app__list-item' + (item.code === selectCode ? ' app__list-item_selected' : '')
                }
                onClick={() => handleItemClick(item.code)}
              >
                <div className="app__list-code">{item.code}</div>
                <div className="app__list-title">{item.title}
                <div className="app__list-count">| выбран:{selectCount[item.code] || 0}</div>
                </div>
                <div className="app__list-actions">
                  <button
                    className="app__button app__button-delete"
                    onClick={() => store.deleteItem(item.code)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
