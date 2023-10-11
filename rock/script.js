// console.log('l')
// let title=document.getElementById('class')
//  let message='Good bye'
// title.innerText=message;

// // title.innerHTML='<p>Hello Himanshu</p>'
// title.innerHTML=`<p>${message}</p>`

let redDiv=document.getElementById('red')
let yellowDiv=document.getElementById('yellow')
let blueDiv=document.getElementById('blue')

// redDiv.onclick=()=>{
//     console.log('User choose: Rock')
// }
// yellowDiv.onclick=()=>console.log('yello')
// blueDiv.onclick=()=>console.log('blue')

const colbtns=document.querySelectorAll('.col-btn')
//console.log(colbtns)
// console.log(colbtns[0].value)
const timesclick={'red':0,'yellow':0,'blue':0}
colbtns.forEach(col => {
    col.onclick=()=>{
        timesclick[col.value]+=1;
        col.innerText=timesclick[col.value]
    // console.log(col.value)
    console.log(timesclick)
    }
})
function clearScores() {
    timesclick.red=0
    timesclick.yellow=0
    timesclick.blue=0
    colbtns.forEach(col => col.innerText='0')
}
const clearDiv=document.getElementById('clearbtn')
clearDiv.onclick=() =>clearScores()

