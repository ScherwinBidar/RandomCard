import './style.css'
import Chance from "chance"; 






const chance = new Chance();
const randomAvatar = chance.avatar();
const randomName = chance.name();
const randomEmail = chance.email();
const randomPhone = chance.phone();
const randomJob = chance.profession();
const randomBirthday = chance.year();
const randomCity = chance.city();
const randomAnimal = chance.animal();
const randomNumber = chance.integer( {min: 1, max: 1000})



document.querySelector('#app').innerHTML = `
  <img src = '//www.gravatar.com/avatar/41f84bab4a852971eb1d26a287acb763'/>
  <h1>${randomName}</h1>
  <br>
  <strong>
  ${randomEmail} <br>
  <strong> 
  ${randomPhone}
  <p> 
    Hey my Name is ${randomName} and im a ${randomJob}. <br> I was born in the year of ${randomBirthday} <br>
    in the city of ${randomCity}. <br> My favourite animal is the ${randomAnimal}.
    But i also love numbers! <br> My favorite one is ${randomNumber}
  </p>
  


`
