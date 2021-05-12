function problem(d){
    let bwCars= [];

    if(d.length != 0){
    for(let i of d){
        if(i["car_make"]== "Audi" || i["car_make"]== "BMW"){
        bwCars.push(i);
        }    
    }
        if(bwCars.length == 0){
            return `There are no cars by BMW and Audi`
            }
            else{
                return JSON.stringify(bwCars);
            }
    }
    else{
        return "Inventory is Empty : No Data Found !!"
    }

    return JSON.stringify(bwCars);

}

module.exports = problem