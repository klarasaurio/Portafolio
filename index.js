let continer = document.querySelector(".principal");
let filter = document.querySelector(".title").textContent
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#close");

closeModal.addEventListener("click", function (){
    modal.style.display = "none";
})


async function readData() {
    let data = await fetch("./data.json");
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
