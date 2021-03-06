

function ValideOrNot(board) {
    //Insert your code here
    let resp = "Finish!";
    let [columnList, regionList] = obtainColumnsAndRegions(board);
    for (let i = 0; i < board.length ; i++) {
        if (!validate(board[i])) {
            console.log(board[i])
            console.log("Sale por validación de fila");
            console.log("Se encuentra un numero repetido en fila " + (i+1));
            resp = "Try again!";  
        }
        if(!validate(columnList[i])){
            console.log(columnList[i]);
            console.log("Sale por validación de columna");
            console.log("Se encuentra un numero repetido en columna " + (i+1));
            resp = "Try again!"; 
        } 
        if(!validate(regionList[i])){
            console.log(regionList[i]);
            console.log("Sale por validación de region");
            console.log("Se encuentra un numero repetido en region " + (i+1));
            resp = "Try again!";
        }
    }
    return resp;
}

function obtainColumnsAndRegions(board){
    let columnList = [];
    let regionList = [];
    let area = 0;
    let cont = 0;
    for (let i = 0; i < board.length; i++) {
        columnList[i] = [];
        for (let j = 0; j < board[i].length; j++) {
            columnList[i][j] = board[j][i];
            if (j % 3 === 0) {
                if (regionList[area] === undefined) regionList[area] = [];
                regionList[area].push(...board[i].slice(j, j + 3));
                area += 1;
                if(area % 3 === 0){
                    cont += 1;
                    if(cont >= 1 && cont < 3){
                        area = 0;
                    } else if (cont >= 3 && cont < 6){
                        area = 3;
                    } else {
                        area = 6;
                    }
                }
            }
        }
    }
    return [columnList, regionList];
}

function validate(row) {
    return row.every(validateRepeat);
}

function validateRepeat(valor, indice, lista) {
    return (lista.indexOf(valor) === indice);
}

module.exports = ValideOrNot;
