function problem(d,year){
    let olderCars=[];
if(d.length !=0 ){
    for(let i of d){
        if(i["car_year"] < year ){
        olderCars.push([i["car_make"]+" "+i["car_model"]]);
        }
    }
    if(olderCars.length == 0){
        return `There are no cars older than the year ${year}.`
        }
    else{ 
        return [olderCars,olderCars.length] 
        }
    }
else{
        return "Inventory is Empty : No Data Found !!"
    }
}

module.exports = problem;