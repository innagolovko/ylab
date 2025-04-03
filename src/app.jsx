import React, { useCallback } from 'react';
import { createElement } from './utils.js';
import List from './components/list/list.jsx';
import Controls from './components/controls/controls.jsx';
import Head from './components/head/head.jsx';
import PageLayout from './components/page-layout/page-layout.jsx';

 // Приложение
 // @param store - экземпляр класса Store
 // @returns {React.ReactElement} Элемент приложения

function App({ store }) {
  console.log('App');
  // Достаём list из store методом getState
  const list = store.getState().list;

  // Функция callback
  /*const onDeleteItem = useCallback((code) => {
      store.deleteItem(code);
    }, [store]),*/

  // Объединяем функции в один callbacks
  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title="Приложение на Java Script" />
      <Controls onAdd={callbacks.onAddItem} />
      <List list={list} onDeleteItem={callbacks.onDeleteItem} onSelectItem={callbacks.onSelectItem}/>
    </PageLayout>
  );
}

export default App;
