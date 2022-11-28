// Birinchi Masala

function count (param1, param2){
    let n = ''
    for(let i = 0; i < param1.length; i ++){
        if(param1[i] == param2){
            n = i
        }
    }
    return n
}

console.log(count (['Ozodbek', 'Mirjalil', 'Sodiqjon'], 'Sodiqjon'));



// Ikkinchi Masala

function getLastItem (param1,){

    return param1[param1.length-1]
}

console.log(getLastItem(['Aziz', 'Laziz', 'Ozodbek']));