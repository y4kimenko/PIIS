const shirt = JSON.parse(localStorage.getItem("shirt"));

const shirtImg = document.getElementById("shirtImg");
const shirtName = document.getElementById("shirtName");
const shirtDecsr = document.getElementById("shirtDecsr");
const shirtPrice = document.getElementById("shirtPrice");

const frontBtn = document.getElementById("frontBtn");
const backBtn = document.getElementById("backBtn");
const colorButtonsDiv = document.getElementById("colorButtons");

if (shirt) {
    let shirtColor = shirt.colors? Object.keys(shirt.colors)[0] : "default";
    let shirtSide = "front";

    function changeShownShirt() {
        shirtImg.src = shirt.colors[shirtColor][shirtSide]
    }

    frontBtn.addEventListener("click", () => {
        shirtSide = "front";
        frontBtn.classList.add('active');
        backBtn.classList.remove('active')
        changeShownShirt();
    })
    backBtn.addEventListener("click", () => {
        shirtSide = "back";
        frontBtn.classList.remove('active');
        backBtn.classList.add('active')
        changeShownShirt()
    })

    changeShownShirt();
    shirtName.textContent = shirt.name ? shirt.name : " ";
    shirtDecsr.textContent = shirt.description ? shirt.description : " ";
    shirtPrice.textContent = shirt.price ? shirt.price : " ";

    if(shirt.colors){
        for (let color of Object.keys(shirt.colors)) {
            const button = document.createElement("button")
            button.style.backgroundColor = color;
            button.classList.add("shirt__color");
            button.textContent = "";
            button.style.borderRadius = "100%";
            button.addEventListener("click", () => {
                shirtColor = color;
                changeShownShirt();
            })
            colorButtonsDiv.append(button);
        }
    }
    
}