// Хранилище состояния приложения
class Store {
  constructor(initState = {}) {
    this.state = {
      list: [],
      nextCode: 1,
      usedCodes: new Set(), // Хранение использованных кодов
      ...initState,
    };
    this.listeners = []; // Слушатели изменений состояния (по умолчанию пустой массив)
  }

  // Метод организации подписки на изменение состояния
  // @param listener {Function} Функция, которая будет вызвана при изменении состояния
  // @returns {Function} Функция для удаления слушателя (отписка)
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для добавления удаляемого слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  // Выбор состояния приложения
  // @returns {Object} Возвращает текущее состояние
  getState() {
    return this.state;
  }

  // Метод для установки новых данных
  // @param newState {Object} Новое состояние
  setState(newState) {
    this.state = newState;
    // @todo После изменения состояния нужно перерендерить приложение
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  // Метод добавления новой записи
  addItem() {
    this.setState({
      ...this.state,
      list: [
        ...this.state.list,
        { code: Math.floor(Math.random() * 10) + 1, title: 'Новая запись' },
      ],
    });
  }

  // Метод удаления записи
  // @param code Код удаляемой записи
  deleteItem(code) {
    const { list } = this.state;
    const newList = list.filter(item => item.code !== code);
    // usedCodes.delete(code); // Удаляем код из использованных
    this.setState({
      ...this.state,
      list: newList,
      // usedCodes: usedCodes,
    });
  }

  // Метод выделения записи
  // @param code Код выделённой записи
  selectItem(code) {
    const { list } = this.state;
    this.setState({
      ...this.state,
      list: list.map(item => {
        // У найденной по code записи меняем свойство selected
        if (item.code === code) {
          item.selected = !item.selected;
        }
        return item;
      }),
    });
  }
}

export default Store;
