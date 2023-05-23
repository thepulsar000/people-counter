// VARIABLES
let incre = document.querySelector("#incre");
// console.log(incre);

let decre = document.querySelector("#decre");
// console.log(decre);

let t_count = document.querySelector("#t_count");
// console.log(t_count);

let countValue = 0;

// FUNCTION & EVENTLISTENER TO ADD PEOPLE
function addPeople(){
    countValue += 1;
    t_count.innerText = countValue;
}

incre.addEventListener("click", addPeople); 

// FUNCTION & EVENTLISTENER TO REMOVE PEOPLE
function removePeople(){
    countValue -= 1;
    t_count.innerText = countValue;
}
decre.addEventListener("click", removePeople);


// SAVING COUNT
let saveButt = document.querySelector(".dark");
let saveEl = document.querySelector("#save-el");
// console.log(saveEl);

function save(){
    saveEl.innerText = saveEl.innerText + " " + countValue + " - ";
    console.log(countValue);
    countValue = 0;
    t_count.innerText = countValue;
}
saveButt.addEventListener("click", save);








// API
// https://www.boredapi.com/api/activity

// fetch(url).then(success)

// trycatch nd custom error

// your promise remains pending at first until it finds it...resolve....and then(successful)..and showing
// if not, reject, and then catching the error, and error.

// let Apiurl = "https://catfact.ninja/fact"

// async function endP(Apiurl){
//     try{
//         const req = await fetch(Apiurl)
//         let res = await req.json();
//         console.log(res);
//         return res
//     }catch (error){
//         console.log("Try again " + error);
//     }
// }

// endP(Apiurl);

