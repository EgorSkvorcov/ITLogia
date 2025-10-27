var year = 2025;

var mercedes = {
  name: "Mercedes",
  model: "GL450",
  engine: "4.0",
  year: 2015,
  color: "black",
  hp: 300,
  forSale: true,
};

var bmw = {
  name: "BMW",
  model: "X6",
  engine: "3.0",
  year: 2023,
  color: "white",
  hp: 313,
  forSale: false,
};

var audi = {
  name: "Audi",
  model: "Q7",
  engine: "3.0",
  year: 2025,
  color: "blue",
  hp: 249,
  forSale: true,
};

mercedes.carAge = year - mercedes.year;

bmw.carAge = year - bmw.year;

audi.carAge = year - audi.year;

var names =
  mercedes.name +
  " " +
  mercedes.model +
  "," +
  " " +
  bmw.name +
  " " +
  bmw.model +
  "," +
  " " +
  audi.name +
  " " +
  audi.model +
  ",";

var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;

var atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;

var allYoungerThanFive =
  mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;

var atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;

alert("Марка и модель всех авто" + " " + "-" + " " + names);
alert("Средний возраст всех авто" + " " + "-" + " " + averageAge);
alert("Хотя бы один автомобиль продается" + " " + "-" + " " + atLeastOneForSale);
alert("Все ли авто младше пяти лет" + " " + "-" + " " + allYoungerThanFive);
alert("Хотя бы один автомобиль имеет менее 250 лошадиных сил" + " " + "-" + " " + atLeastOneHasLittleHp);

var car = audi;

if (car.name === "Mercedes" && car.model === "GL450") {
  alert("Мой любимый мерседес!");
} else {
  alert(car.name + " " + car.model);
};

if (car.carAge === 0) {
  alert ('Новый автомобиль')
} else if (car.carAge <= 3 && car.carAge !== 0) {
  alert('Свежий автомобиль')
} else {
  alert ('Лет этому авто:' + " " + car.carAge)
};

var consumption =
  car.engine > "3.0"
    ? alert("Прожорливый автомобиль")
    : alert("Экономичный  автомобиль");

var russianColor;

switch (car.color) {
  case "black":
    russianColor = "Черный";
    break;
  case "silver":
    russianColor = "Серебристый";
    break;
  case "red":
    russianColor = "Красный";
    break;
  case "white":
    russianColor = "Белый";
    break;
  case "gray":
    russianColor = "Серый";
    break;
  case "blue":
    russianColor = "Синий";
    break;
  default:
    alert("Невозможно определить цвет автомобиля");
    break;
}

alert(russianColor);
