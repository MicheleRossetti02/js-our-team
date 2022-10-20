/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede */

 
const profile = [
    {

    "image": './img/wayne-barnett-founder-ceo.jpg',
    "name" : 'Wayne Barnett',
    "role" : 'Founder & CEO'
},
{
    "image": '',
    "name" : 'Angela',
    "role" : 'Chief Editor'
},
{
    "image": '',
    "name" : 'Waleter gordon',
    "role" : 'Chief Editor'
},
{
    "image": '',
    "name" : 'Waleter gordon',
    "role" : 'Social Media Manager'
},
{
    "image": '',
    "name" : 'Scott Estrada',
    "role" : 'Developer'
},
{
    "image": '',
    "name" : 'Barbara Ramos',
    "role" : 'Grafic designer'
}



]


container = document.querySelector('.container')


for(let key in profile){
    console.log(profile[key]);
    
}




function name(params) {
    name_profile=`<div class="casella_profile"> ${profile.image}  </div>`;
    role_profile=`<div class="casella_profile"> ${profile.image}  </div>`;
    container.innerHTML += name_profile;
    container.innerHTML += role_profile;

img_profile= `<div class="casella_profile"> ${profile.name}  </div>`;

container.innerHTML += img_profile;


      
}

//console.log(profile);