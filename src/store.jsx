// Хранилище состояния приложения
class Store {
  constructor(initState = {}) {
    this.state = {
      list: [],
      nextCode: 1,
      usedCodes: new Set(), // Хранение использованных кодов
      ...initState,
      // noAvailableCodes: false,
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
     const { list } = this.state;
     // Создаём набор используемых кодов на основе текущего списка
     const usedCodesSet = new Set(list.map(item => item.code));
     const availableCodes = [];
     for (let code = 1; code <= 10; code++) {
       if (!usedCodesSet.has(code)) {
         availableCodes.push(code);
       }
     }
     // Если доступных кодов нет, выходим из функции
     if (availableCodes.length === 0) {
     // this.setState({ noAvailableCodes: true })
       console.log('Нет доступных кодов для добавления.');
       return;
     }
     const newCode = availableCodes[Math.floor(Math.random() * availableCodes.length)];
     // Добавляем новый код к набору используемых кодов
     usedCodesSet.add(newCode);
     this.setState({
       ...this.state,
       list: [...this.state.list, { code: newCode, title: 'Новая запись' }],
      // noAvailableCodes: false, // сбрасываем состояние при успешном добавлении
     });
   }

  // Метод удаления записи
  // @param code Код удаляемой записи
  deleteItem(code) {
    const { list, usedCodes } = this.state;
    const newList = list.filter(item => item.code !== code);
    usedCodes.delete(code); // Удаляем код из использованных
    this.setState({
      ...this.state,
      list: newList,
      usedCodes: usedCodes,
    });
  }

  // Метод выделения записи
  // @param code - код выделённой записи
  selectItem(code) {
    const { list } = this.state;
    this.setState({
      ...this.state,
      list: list.map(item => {
        // У найденной по code записи меняем свойство selected
        if (item.code === code) {
          return { ...item, selected: !item.selected }; // Создаём новый объект
        }
        return item;
      }),
    });
  }
}

export default Store;
