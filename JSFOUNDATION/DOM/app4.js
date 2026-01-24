// DOM Manipulation


// document.querySelector('#football').addEventListener("click",
//     function(e){
//         console.log('football is clicked');

//         const target = e.target;

//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey'
//         }
//     }
// )
// document.querySelector('#basketball').addEventListener("click",
//     function(e){
//         console.log('basketball is clicked');

//         const target = e.target;

//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey'
//         }
//      }
// )
// document.querySelector('#boxing').addEventListener("click",
//     function(e){
//         console.log('boxing is clicked');

//         const target = e.target;

//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey'
//         }
//     }
// )
// document.querySelector('#tennis').addEventListener("click",
//     function(e){
//         console.log('tennis is clicked');

//         const target = e.target;

//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey'
//         }
//     }
// )
// document.querySelector('#golf').addEventListener("click",
//     function(e){
//         console.log('golf is clicked');

//         const target = e.target;

//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey'
//         }
//     }
// )

// Event Delegation

document.querySelector('#sports').addEventListener("click", function(e){
       const target = e.target;
        if (!target.matches('li')) return; //Prevents printing 'sports is clicked'
        console.log(e.target.getAttribute('id') +' '+ 'is clicked');
        
        if(target.matches('li')){
            target.style.backgroundColor = 'lightgrey'
        }
    }
) 

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Cricket';
newSport.setAttribute('id', 'Cricket');
sports.appendChild(newSport); 