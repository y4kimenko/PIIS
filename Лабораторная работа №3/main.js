const productsUl = document.getElementById("products");
const quickViewWindow = document.getElementById("quickViewWindow");
const closeQViewBtn = document.getElementById("closeQViewWindow")

document.addEventListener("DOMContentLoaded",()=>{

    shirts.forEach(shirt =>{
        if(!shirt.colors) return;

        const colors = Object.keys(shirt.colors);
        
        const productWrapper = document.createElement("li");
        productWrapper.classList.add("shirts__item");

        productWrapper.style.cssText = `
            background-image: url(${colors.length? shirt.colors[colors[0]].front : shirt.default.front});
        `;
    
        const productName = document.createElement("h3");
        productName.textContent = shirt.name? shirt.name: "Default";
        productName.classList.add("shirts__name");
    
        const productColors = document.createElement("p");
        productColors.textContent = `Available in ${colors.length? colors.length: "0"} colors`;
        productColors.classList.add("shirts__descr");
    
        const btnPanel = document.createElement("div");
        btnPanel.classList.add("shirts__buttons")
    
        const quickViewBtn =  document.createElement("button");
        quickViewBtn.classList.add("shirts__button");
        quickViewBtn.classList.add("btn-reset");
       
        quickViewBtn.textContent="Quick View";
        quickViewBtn.addEventListener("click", ()=>{ quickView(shirt, colors[0])});

        const seePageBtn =  document.createElement("button");
        seePageBtn.textContent="See Page";
        seePageBtn.classList.add("shirts__button");
        seePageBtn.classList.add("btn-reset");
        seePageBtn.addEventListener("click", ()=>{
            localStorage.setItem("shirt", JSON.stringify(shirt)) ;
            window.location.href="./product.html"
        })
    
        btnPanel.append(quickViewBtn);
        btnPanel.append(seePageBtn);
    
        productWrapper.append(productName);
        productWrapper.append(productColors);
        productWrapper.append(btnPanel);
    
        productsUl.append(productWrapper)
    })
    
})

function quickView(shirt, colorKey){
    quickViewWindow.style.display ="flex";
    const quickViewImage = document.getElementById("quickViewImg");
    const name = document.getElementById("nameTxt");
    const descr = document.getElementById("descrTxt");
    const price = document.getElementById("priceTxt");
    name.textContent = shirt.name? shirt.name: "Default";
    descr.textContent = shirt.description? shirt.description: " ";
    price.textContent = shirt.price? shirt.price: " ";
    quickViewImage.src = colorKey? shirt.colors[colorKey].front : shirt.default.front;
}
closeQViewBtn.addEventListener("click", ()=>{ 
    quickViewWindow.style.display ="none";
})