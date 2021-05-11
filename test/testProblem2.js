const data = require("../data");
const fn = require("../problem2");
let d = data.inventory ;
let l = d.length - 1 ;

let lastCar = d[d.length - 1]
console.log(fn.p2(lastCar))
