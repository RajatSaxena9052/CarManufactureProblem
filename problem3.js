function problem(d){
    let carModels = []
    if(d.length != 0 ){   
    for(let i of d){
        carModels.push(i["car_model"]);
    }
    return carModels.sort()
    }else{
        return "Inventory is Empty : No Data Found !!"
    }

}

module.exports = problem
