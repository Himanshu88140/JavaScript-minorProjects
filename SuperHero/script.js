//https://www.superheroapi.com/api.php/10223569763528853/245 


const getImg=document.getElementById('heroImg')
const imgBtn=document.getElementById('heroBtn')
const  getName=document.getElementById('name')
const searchHeroBtn=document.getElementById('search')
const searchInput=document.getElementById('searchInput')

const superhero_token='10223569763528853'
const Base_url=`https://www.superheroapi.com/api.php/${superhero_token}`

// const getHeroImg=(id,name)=>{
//     fetch(`${Base_url}/${id}`)
//     .then(response => response.json())
//     .then(json =>{ console.log(json)
//         document.querySelector('body').innerHTML +=`<img src="${json.image.url}" width=400px height=400px/>`   
//     })
// }

const getHeroImg=(id,name)=>{
    fetch(`${Base_url}/${id}`)
    .then(response => response.json())
    .then(json =>{ 
        // console.log(json)
        getPowerStats(json)
        getImg.innerHTML=`<img src='${json.image.url}'
        width=400px height=400px/>`
        getName.innerText=`${json.name}`
    })
}

const searchHeroImg=(name)=>{
    console.log(searchInput.value)
    fetch(`${Base_url}/search/${name}`)
    .then(response => response.json())
    .then(json =>{ 
        const hero=json.results[0]
        // console.log(hero)
        getImg.innerHTML=`<img src='${hero.image.url}'
        width=400px height=400px/>`
        getName.innerText=`${hero.name}`
    })
}

const randomHero=()=>{
    const numberhero=731
   return Math.floor(Math.random()*numberhero)+1
}
imgBtn.onclick=()=>getHeroImg(randomHero())
searchHeroBtn.onclick=()=>searchHeroImg(searchInput.value)

const getPowerStats=(character)=>{
  const stats=Object.keys(character.powerstats).map(stat=>{
    return `<p> ${stat.toUpperCase()}:${character.powerstats[stat]}`
  })
  console.log(stats.join(''))
}

// const img='https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

//print image in html body using body universal tag 
// document.querySelector('body').innerHTML +=`<img src="${img}" width=400px height=400px/>`