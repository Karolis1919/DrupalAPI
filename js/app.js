"use strict";

let droopalas;
let elementas = document.querySelector(".rezult");
let input = document.getElementById("searchas");
let filter = input.value.toUpperCase();
let items = document.getElementsByClassName(".col-10");
let textValue;
let p;

function droopal(){
    const fetchDrupal = async () => {
        droopalas = await fetch(
            "http://www.karolis.web-training.lt/darbuotojaiinfo?_format=json"
        ).then(res => res.json());
    }
    const Drupal = async () => {
        await fetchDrupal();
        console.log(droopalas);
        for (let i=0; i<droopalas.length; i++){
            let newDiv = document.createElement("div");
            elementas.appendChild(newDiv);
            newDiv.classList.add("row");
            let newCol1 = document.createElement("div");
            newCol1.classList.add("col-2");
            newDiv.appendChild(newCol1);
            let newCol2 = document.createElement("div");
            newCol2.classList.add("col-10");
            newDiv.appendChild(newCol2);
            let vardas = document.createElement("p");
            let spec = document.createElement("p");
            let servisas = document.createElement("p");
            let miestas = document.createElement("p");
            let photo = document.createElement("img");
            newCol1.appendChild(photo);
            newCol2.appendChild(vardas);
            newCol2.appendChild(spec);
            newCol2.appendChild(servisas);
            newCol2.appendChild(miestas);
            photo.src = droopalas[i].field_darbnuotrauka;
            vardas.textContent = droopalas[i].field_darbvardaspavarde;
            spec.textContent = droopalas[i].field_darbspecializacija;
            servisas.textContent = droopalas[i].field_darbservisas;
            miestas.textContent = droopalas[i].field_miestas;


            for(let i = 0; i < items.length; i++){
                p = items[i].getElementsByTagName("p")[0];
                textValue = p.textContent || p.innerText;
                if(textValue.toUpperCase().indexOf(filter) > -1){
                    items[i].style.display = "";
                }else{
                    items[i].style.display = "none";
                }
            }

        }
    }
    Drupal();
}
droopal();