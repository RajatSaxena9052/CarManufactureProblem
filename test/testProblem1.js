const data = require("../data");
const fn = require("../problem1");
let d = data.inventory;
let n = 33;

const result = fn(d,n);


if(typeof result == `object`){
    if(result.length == 0){
        console.log(result)
    }else{
    console.log(`Car ${result['id']} is a  ${result['car_year']}  ${result['car_make']}  ${result['car_model']}`);
    }
}

