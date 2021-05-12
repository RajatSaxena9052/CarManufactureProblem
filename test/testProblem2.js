const data = require("../data");
const fn = require("../problem2");
let d = data.inventory ;

const result = fn(d)

if(typeof result == `object`){
    console.log(`Last car is a ${result["car_make"]} ${result["car_model"]}.`);
}
else{
    console.log(result);
}
