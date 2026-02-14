// What is DOM 
// Javascript used in the front end

/*

    - Js way of controlling the HTML
    
    ------> How the Dom is created 

    1. HTML ----> (static Page) ----> Browser Reads it ----> Creates DOM ----> js can control it 
     

*/


// 4 Pillars of DOM 

/*

    - Selection of an Element ---- (1)
    - Changing HTML ---- (2)  
    - Changing CSS ---- (3)
    - Event Listener ---- (4)

*/


// Selection of an Element 

// const heading = document.querySelector("h1");
// console.log(heading);

// heading.innerHTML = "Changed HTML"
// heading.style.color = "red"

// // Event Listeners 

// heading.addEventListener('click', function(){
//     alert("I am clicked!!!!")
// })

// bulb button

const but = document.getElementById("btn");
const bulb = document.getElementById("bulb");

but.addEventListener("click", () => {
    
    if(but.innerHTML === "off"){
        but.innerHTML = "On"
    }else{
        but.innerHTML = "Off"
        bulb.classList.toggle("off");
    }

});



