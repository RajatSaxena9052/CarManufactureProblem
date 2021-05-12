function problem(d){
    let lastIndex = d.length - 1 ;
    
    if(d.length != 0 ){     
    return d[lastIndex]
    }
    else{
        return "Inventory is Empty : No Data Found !!"   
    }
}

module.exports = problem