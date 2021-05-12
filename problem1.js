function problem(d,n){
    n=n-1
    return `Car ${d[n]['id']} is a  ${d[n]['car_year']}  ${d[n]['car_make']}  ${d[n]['car_model']}`
}
module.exports = problem;