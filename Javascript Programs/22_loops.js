// iterations of the loop

const jonas = [

    'Jones',
    'Scherodinger',
     1991,
    'teacher',
    ['michel' , 'peter' , 'steven'],

]


const types = [];

for(let i = 0; i < jonas.length; i++){

    console.log(i + ':' + jonas[i]);

    // filling of array
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);


// Continue and break 
console.log('---ONLY STRINGS---')
for(let i = 0; i < jonas.length; i++){

    if(typeof jonas[i] !== 'string') continue;

    console.log(i + ':' + jonas[i]);
}


console.log('---BREAK ONLY STRINGS---')
for(let i = 0; i < jonas.length; i++){

    if(typeof jonas[i] === 'Number') break;

    console.log(i + ':' + jonas[i]);
}
