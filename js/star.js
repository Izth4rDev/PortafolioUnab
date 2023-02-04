// Rating Initialization
const ver = document.querySelector('#star-rating-ver');
const inv = document.querySelector('#star-rating-inv');
const hum = document.querySelector('#star-rating-hum');


const starVer = document.querySelectorAll('.star-ver');
const starInv = document.querySelectorAll('.star-inv');
const starHum = document.querySelectorAll('.star-hum');
//console.log(Allstar);


cargaEventListener();

function cargaEventListener(){

    ver.addEventListener('click', deathStar(starVer));
    inv.addEventListener('click', deathStar(starInv));
    hum.addEventListener('click', deathStar(starHum));

}



function deathStar(newStar){

    newStar.forEach((star, i) =>{

        star.onclick = function(){

            //definicion de variable control
            let starActual = i+1;

        newStar.forEach((star,j)=>{

            //si la estrella actual es mayor 
                if(starActual >= j+1 ) {

                    star.innerHTML = '&#9733';


                }else{

                    star.innerHTML = '&#9734';
            
                }

            });
        }
    });

}