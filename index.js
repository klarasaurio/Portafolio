let continer = document.querySelector(".principal");
let filter = document.querySelector(".title").textContent
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#close");

closeModal.addEventListener("click", function (){
    modal.style.display = "none";
})


async function readData() {
    let data = await fetch("[
        {
            "id": 0,
            "nombre": "Bad idea",
            "descripcion": "miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau",
            "img": "./img/Bad idea.jpg",
            "category":"Diseño grafico",
            "gird-row": "3",
            "col-span": "2"
        },
        {
            "id": 1,
            "nombre": "oso",
            "descripcion": "miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau",
            "img": "./img/oso.png",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id": 3,
            "nombre": "fuck off",
            "descripcion": "miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau miau miau miau miaaau miau patata miau miau miau miau",
            "img": "./img/Fuck off.jpg",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id": 4,
            "nombre": "doctor who",
            "descripcion": "",
            "img": "./img/Doctor who.png",
            "category":"Diseño editorial",
            "gird-row": "1",
            "col-span": "3"
        }
        
    ]");
    data = await data.json();
    return data;
}

async function drawElements(filter) {
    let data = await readData();
    data.forEach(element => {
        if (element.category.toLowerCase() == filter.toLowerCase()) {
            let div = document.createElement("div");
            div.classList.add("card");
            div.style.backgroundImage = `url('${element.img}`;
            div.style.gridRow = "span " + element["gird-row"];
            div.style.gridColumn = "span " + element["col-span"];
            continer.appendChild(div)

            div.addEventListener("click", function () {
                console.log(element);
                modal.style.display = "flex";
                modal.querySelector("#nombre").innerHTML = element.nombre
                modal.querySelector("#descripcion").innerHTML = element.descripcion
                modal.querySelector("#img").src = element.img
                
            })

        }
    });
}


drawElements(filter);
