const data = require("../data");
const fn = require("../problem6");
let d = data.inventory

const result = fn(d)

if(typeof result == 'object'){
    console.log(fn(d));
    }
else{
    console.log(result);
}