const timeOut = 1000;
const checking = () => console.log("checking!");

interval = setInterval(checking, timeOut);

setTimeout(() => clearInterval(interval), 5000);
