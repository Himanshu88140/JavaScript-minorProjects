//https://dog.ceo/api/breeds/image/random
// .then - promises
// asychronos programming

const dogImage=document.getElementById('dogImage')
const dogBtn=document.getElementById('dogBtn')

const getNewDog=()=>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => { console.log(json)
dogImage.innerHTML=`<img src='${json.message}'
width=440px height=400px/>`
})
}
dogBtn.onclick=()=>getNewDog()