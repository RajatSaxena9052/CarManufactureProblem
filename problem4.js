function problem(d){
    let carYears = [];

    if(d.length != 0){
    for(let i of d){
        carYears.push(i["car_year"]);
        }
    return carYears
}
    else{
        return "Inventory is Empty : No Data Found !!"
    }
}

module.exports = problem
