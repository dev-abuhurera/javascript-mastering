// Dom LifeCycle

/*
    ----> First Event is DomContentLoaded

*/

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('HTml parsed and Dom tree built', e);
})


// Dom LifeCycleCheck
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('HTml parsed and Dom tree built', e);
})

// html parsed + external resources + comlete page load
document.addEventListener('Load', (e) => {
    console.log('page Full loaded', e);
})

// event fired before it is to be leaving the page
// document.addEventListener('beforeunLoad', (e) => {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ''
// })
