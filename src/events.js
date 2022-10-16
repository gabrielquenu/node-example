import { inherits } from "util";
import { EventEmitter } from "events";

const event = new EventEmitter();

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

event.once("saySomething", (message) => {
    console.log(message);
});

event.emit("saySomething", "Hello event");

const chapolin = new Character("Chapolin");
chapolin.on("help", () => {
    console.log(`Eu! O ${chapolin.name} colorado!`);
});

console.log("Oh, quem poderá me defender?");
chapolin.emit("help");
