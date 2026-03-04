// For Each Loop

// For Each use a callback function in it 


const movements = [200, 250, 4000, 450, -600, -900];

movements.forEach(function(movement, index, array){
    if(movements > 0){
        console.log(movement);
    }else{
        console.log(Math.abs(movement));
    }
})

for(const [i , move] of movements.entries()){
    console.log(i , move);
}


// we can;t break the for each