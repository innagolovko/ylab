import React from 'react';
import App from './app.jsx';
import Store from './store.jsx';
import { createRoot } from 'react-dom/client';
import { generateCode } from './utils.js';

const store = new Store({
    list: [
    {code: generateCode(), title: 'Название элемента'},
    {code: generateCode(), title: 'Некий объект'},
    {code: generateCode(), title: 'Заголовок'},
    {code: generateCode(), title: 'Длинное название элемента'},
    {code: generateCode(), title: 'Запись'},
    {code: generateCode(), title: 'Шестая запись'},
    {code: generateCode(), title: 'Седьмая запись'},
],
});

const root = createRoot(document.getElementById('root'));

// После создания экземпляра store подписываемся на его изменения методом subscribe
store.subscribe(() => {
  console.log('-Перерендер-');
    // Добавляем в body новый рендер приложения
    root.render(<App store={store} />); // createElement('App', { store });
});

// Первичный рендер приложения
    console.log('-Первый рендер-');
    root.render(<App store={store} />);
