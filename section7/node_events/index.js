const { EventEmitter } = require("events");
const { SAVE } = require("./event_names");

const emitter = new EventEmitter();

emitter.on(SAVE, () => {
  console.log("On save activated");
});

emitter.on(SAVE, () => {
  console.log("On save activated 2");
});

emitter.emit(SAVE);
