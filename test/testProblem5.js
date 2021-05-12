const data = require("../data");
const fn = require("../problem5");
const d = data.inventory
const year = 2000

const result = fn(d,year)

if(typeof result == 'object'){
    console.log(fn(d,year));
    }
else{
    console.log(result);
}
