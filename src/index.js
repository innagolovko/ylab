import App from './app.js';
import Store from './store.js';
import React from 'react';
import {createRoot} from 'react-dom/client';

const store = new Store({
    list: [
    {code: 1, title: 'Название элемента'},
    {code: 2, title: 'Некий объект'},
    {code: 3, title: 'Заголовок'},
    {code: 4, title: 'Длинное название элемента из семи слов'},
    {code: 5, title: 'Запись'},
    {code: 6, title: 'Шестая запись'},
    {code: 7, title: 'Седьмая запись'},
],
});

const root = createRoot(document.getElementById('root'));

// После создания экземпляра store подписываемся на его изменения методом subscribe 
store.subscribe(() => {
    // Удаляем содержимое body
    // while (document.body.lastElementChild) document.body.removeChild(document.body.lastElementChild);
    // Добавляем в body новый рендер приложения
    root.render(<App store={store} />);
   // document.body.append(
   //     App({store})
   // );
});

// Первичный рендер приложения
    // const app = App({store});
    root.render(<App store={store} />);

    // document.body.append(app);
