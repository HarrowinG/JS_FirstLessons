//"use strict"

//this - reference to object which called code at the moment, always some object or null in strict mode global this is undefined.
//this always defined at run time
//chaining - when u can call functions of object in chain (they should return this)
//call and apply add context to global functions
//call takes context as first param and then params of arguments
//apply takes context as first param and then array of arguments
//bind bindes context and parameters and return new binded function
//after bind context can't be switched by call or apply it is mounted forever

function getThis() {
  console.log(this); //undefined in strict mode but Window
};

function getName() {
  console.log(this.name);
  return this;
}

function getPrice(currency = "$") {
  console.log(currency + this.price);
  return this;
}


getThis();
window.getThis();
console.log(window.getThis);

const prod1 = {
  name: "Intel",
  price: 100,
  getThis,
  getName() {
    console.log(this.name);
  }
}

prod1.getThis();
prod1.getName();

const prod3 = {
  name: "Intel",
  price: 100,
  getName,
  getPrice
}

prod3.getName().getPrice();

const prod2 = {
  name: "AMD",
  price: 200
}

getPrice.call(prod2, "#");
getPrice.apply(prod2, ["#"]);

setTimeout(prod3.getPrice, 1000); //lost of context set timeout called in window

const getPriceBind = prod3.getPrice.bind(prod3, "*");
setTimeout(getPriceBind, 1000);

console.log("exercises ================");
/*
Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
*/
const rectangle = {
  width: 2,
  height: 3,
  getSquare: function () {
    return this.width * this.height;
  }
}

/*
Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
price: 10,
discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
*/
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price;
  },
  getPriceWithDiscount: function () {
    return this.price - (this.price * (Number.parseInt(this.discount) / 100));
  }
};

console.log(price.getPriceWithDiscount());

/*
Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
*/
const object = {
  height: 10,
  incrementHeight: function () {
    return ++this.height;
  }
}

console.log(object.incrementHeight());

/*
Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
*/

const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value++;
    return this;
  },
  minusOne: function () {
    this.value--;
    return this;
  },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

/*
Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
*/
const priceHolder = {
  price: 10,
  count: 20,
  getTotalCount: function () {
    return this.price * this.count;
  }
}

/*
Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
Для этого “позаимствуйте” метод из предыдущего объекта.
*/
const partsHolder = {
  price: 5,
  count: 10
}

console.log(priceHolder.getTotalCount.apply(partsHolder));
/*
Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
*/

let sizes = { width: 5, height: 10 },
  getSquare = function () { return this.width * this.height };

console.log(getSquare.apply(sizes));

/*
let element = {
height: 25,
getHeight: function () {return this.height;}

};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
*/

let element = {
  height: 25,
  getHeight: function () { return this.height; }

};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();
console.log(getElementHeight()); 