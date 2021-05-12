function problem(d,n){
    if(d.length != 0 ){     
        for(let i=0;i<d.length;i++){
            if(d[i]['id'] === n){return d[i]}
        }
        return ` ${n} ID DOESN'T EXIST `
    }
    else{
         return "Inventory is Empty : No Data Found !!"    
    }
    //return `Car ${d[n]['id']} is a  ${d[n]['car_year']}  ${d[n]['car_make']}  ${d[n]['car_model']}`
}
module.exports = problem;