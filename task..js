import EventEmitter from "events";

const requestTypes = [
  { type: "send", payload: "to send a document" },
  { type: "receive", payload: "to receive a document" },
  { type: "sign", payload: "to sign a document" },
];

class Customer {
  constructor(params) {
    this.type = params.type;
    this.payload = params.payload;
  }
}

const generateIntInRage = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Генерация пользователей с эмитацией задержки

const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};
// Выполнение задержки

const generateUsers = () => {
  const interval = generateIntInRage(1, 5) * 1000;
  const params = requestTypes[generateIntInRage(0, 2)];
  return delay(interval).then(() => new Customer(params));
};

class Handler {
  static send(payload) {
    console.log("Send request");
    console.log(`Customer need ${payload}`);
  }
  static receive(payload) {
    console.log("Receive request");
    console.log(`Customer need ${payload}`);
  }
  static sign(payload) {
    console.log("Sign request");
    console.log(`Customer need ${payload}`);
  }
}
// Создание обработчика

const myEmmiter = new (class extends EventEmitter {})();

myEmmiter.on("send", Handler.send);
myEmmiter.on("receive", Handler.receive);
myEmmiter.on("sign", Handler.sign);

const run = async () => {
  const customer = await generateUsers();
  myEmmiter.emit(customer.type, customer.payload);
  run();
};

run();
