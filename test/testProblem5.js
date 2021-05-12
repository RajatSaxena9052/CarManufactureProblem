const data = require("../data");
const fn = require("../problem5");
const d = data.inventory
const year = 1995

const result = fn(d,year)

if(typeof result == 'object'){
    if(result.length == 0){
        console.log(result);
    }
    else{
        console.log(result);
    }
}
