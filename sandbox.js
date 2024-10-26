//adding click event to button
// const button = document.querySelector('button');
// button.addEventListener('click',(e)=>{
//     console.log('Iam clicked');
// });


//Removing Element By Clicking On them By Target Attribute
/*
const contents  = document.querySelectorAll('li');
console.log(contents);
contents.forEach(content =>{
    content.addEventListener('click',(e)=>{
        e.target.remove();
    });
});
*/
//Giving or Adding New Tasks By Button

const Ul = document.querySelector('ul');

const form = document.querySelector('.TaskAdder');
const data = document.querySelector('#data');

//const button = document.querySelector('button');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const  valueAdder = document.createElement('li');
    valueAdder.textContent = form.data.value.trim();  
    if(form.data.value.length){
    Ul.append(valueAdder);
    }
    

    console.log(valueAdder);
    form.reset();
    /*We can use either append or prepend based on our requirement of positioning
    new tasks on top or not*/
});

//Adding functionality to the newly Added tasks by putting directly the parent tag

Ul.addEventListener('click',e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
        /*e.target.style.textDecoration = 'line-through'; //makes task text strike-through*/
    }
});