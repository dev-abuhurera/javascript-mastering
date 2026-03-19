// Event Deligation

// document.querySelectorAll('.nav__link').forEach(
//   function(el){
//     el.addEventListener('click', function(e){
//       e.preventDefault();
//       const id = this.getAttribute('href');
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
//   }
// )


/*
Here we are using the a single callback attachment ot all the links for once and like what we see is that the function will be unnecesarily be attached to all of these 
*/

// This will gonna be controlled by the Event Deligation

// We can use the Event Deligation in which we will attach the event handler with the common parent and then the event will bubble up


// document.querySelector('.nav__links').addEventListener('click', (e) => {
//     //Now, we attached the event to the parent and we will see where the event happens
//     e.preventDefault()
//     //Matching Strategy
//     if(e.target.classList.contains('nav__link')){
//       const id = e.target.getAttribute('href');
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     }
//   }
// )


