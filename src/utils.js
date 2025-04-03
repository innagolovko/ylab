// const propNames = new Set(['id', 'className', 'textContent', 'onclick']); // Свойства, которые можно установить напрямую

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
/* export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }
  return element;
}*/

export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем форму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке три формы: 'one', 'few', 'many'
  // 1 товар = one,
  // 2 товара = few,
  // 5 товаров = many
  // 9,98 товаров = other
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/*export function generateCode = (function (start = 0) {
  return () => {
    return ++start;
  }
}());

export function generateCode1 = (function (start = 0) {
 function* realGenerator(start) {
   while (true) {
     yield ++start;
   }
 }
 const gen = realGenerator(start);
 return () => gen.next().value;
}());*/


/*export function generateCode() {
  generateCode.value ? ++generateCode.value : generateCode.value = 1;
}

generateCode();*/

function makeGenerateCode(start = 0) {
  return () => {
    return ++start;
  };
}

export const generateCode = makeGenerateCode();
