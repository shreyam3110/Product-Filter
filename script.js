let products ={
    data:[
    {
        productName: "Black Dress",
        category: "Casual-Dress",
        price: "30",
        image: "black-dress.jpg",
    },
    {
        productName: "Black Frock",
        category: "Casual-Dress",
        price: "50",
        image: "black-frock.jpg",
    },
    {
        productName: "Black Hoodie",
        category: "Hoodies",
        price: "40",
        image: "black-hoodie.jpg",
    },
    {
        productName: "Black Midi Dress",
        category: "Midi-Dress",
        price: "60",
        image: "black-midi.jpg",
    },
    {
        productName: "Short Skirt",
        category: "Trendy-Skirt",
        price: "50",
        image: "black-skirt-short.jpg",
    },
    {
        productName: "Black Skirt",
        category: "Trendy-Skirt",
        price: "60",
        image: "black-skirt.jpg",
    },
    {
        productName: "Trendy Long Skirt",
        category: "Trendy-Skirt",
        price: "30",
        image: "skirt.jpg",
    },
    {
        productName: "White Hoodie",
        category: "Hoodies",
        price: "60",
        image: "white hoodie.jpg",
    },
    {
        productName: "Classy Dress",
        category: "Casual-Dress",
        price: "30",
        image: "white-dress.jpg",
    },
    {
        productName: "T-shirt Trendies",
        category: "T-shirt",
        price: "60",
        image: "white-men.jpg",
    },
    {
        productName: "Casual Midi Dress",
        category: "Midi-Dress",
        price: "30",
        image: "white-midi.jpg",
    },
]
};

for(let i of products.data){
    // create card
    let card = document.createElement("div");
    //card should have category and should stay hidden intially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    
}

//parameter passed from button (parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText
        .toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on "all" button click
        if(value == "All"){
            element.classList.remove("hide");
        }
        else{
            //check if element contain category class
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through
    elements.forEach((element, index) =>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
            cards[index].classList.remove("hide");
        }
        else{
            //hide other
            cards[index].classList.add("hide");
        }
    })
})

//initially display all products

window.onload = () => {
    filterProduct("All");
};


