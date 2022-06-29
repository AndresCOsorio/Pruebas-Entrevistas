 
 let modules = {}
 modules.number_cardinality = ( my_number ) => {
    my_number = Number(my_number);
    if(my_number.toString().endsWith("0")){
        return "zero";
    } else if(my_number.toString().endsWith("5")){
        return "five";
    } else if(my_number%2 === 0 && !my_number.toString().endsWith("0")){
    return "even";
    } else if(my_number%2 != 0 && !my_number.toString().endsWith("5")){
    return "odd";
    }
}

module.exports = modules;