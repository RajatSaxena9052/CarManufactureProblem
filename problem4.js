function problem(d){

    if(d == undefined || typeof d != "object"){
        return [];
    }
    else{
        let carYears = [];

        if(d.length != 0){
            for(let i of d){
                carYears.push(i["car_year"]);
                }
            return carYears
        }
        else{
                return [];
            }
    }
}

module.exports = problem
