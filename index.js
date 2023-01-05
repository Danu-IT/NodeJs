import EventEmitter from "events";

const [hour, day, month, year] = process.argv[2].split("-");
const dateCustom = new Date(Date.UTC(year, month - 1, day, hour));
const emiter = new EventEmitter();

const timeShow = (date) => {
  const dateNow = new Date();
  if (dateNow >= date) {
    emiter.emit("timerEnd");
  } else {
    console.clear();
    console.log(getPrettyTime((dateCustom - dateNow) / 1000) + " left");
  }
};

const getPrettyTime = (seconds) => {
  const arr = [
    Math.floor(seconds % 60),
    Math.floor((seconds / 60) % 60),
    Math.floor((seconds / (60 * 60)) % 24),
    Math.floor(seconds / (60 * 60 * 24)),
  ];
  return `${arr.pop()} days ${arr.pop()} hours ${arr.pop()} minutes ${arr.pop()} seconds`;
};

const showTimerDone = (timerID) => {
  clearInterval(timerID);
  console.log("Time is up");
};

const timerId = setInterval(() => {
  emiter.emit("timerTick", dateCustom);
});

emiter.on("timerEnd", () => {
  showTimerDone(timerId);
});
emiter.on("timerTick", timeShow);
