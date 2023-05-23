productsData = [{
    productName: "MAKEUP MIRROR ART BEMM2302-RA",
    productInfo: "[MUA 1 TẶNG 1] Gương Trang Điểm",
    image: "./assets/carousel-mirror.jpg",
    imageAfter: "./assets/hover-mirror.jpg",
    discount: 0,
    price: 19890000,
    id: 1
},
{
    productName: "GUYON 02",
    productInfo: "Tủ Giày",
    image: "./assets/carousel-shoescabinet.jpg",
    imageAfter: "./assets/hover-cabinet.jpg",
    discount: 0,
    price: 3290000,
    id: 2
},
{
    productName: "INDIANA",
    productInfo: "Sofa Bed",
    image: "./assets/carousel-sofabed.jpg",
    imageAfter: "./assets/hover-sofa.jpg",
    discount: 5,
    price: 19890000,
    id: 3
},
{
    productName: "DOUBLE HANGER SIZE L NATURAL",
    productInfo: "Giá Treo Quần Áo",
    image: "./assets/carousel-doublehanger.jpg",
    imageAfter: "./assets/hover-doublehanger.jpg",
    discount: 41,
    price: 1690000,
    id: 4
},
{
    productName: "POET BED NATURAL",
    productInfo: "Giường Ngủ",
    image: "https://product.hstatic.net/200000044142/product/giuong-ngu-frida-02_8d966bfeb16648d2a42e092218a1f11a_medium.jpg",
    imageAfter: "./assets/hover-poetbed.jpg",
    discount: 0,
    price: 9090000,
    id: 5

},
{
    productName: "COMBO 3 TỦ QUẦN ÁO MANDY NATURAL",
    productInfo: "Tủ Quần Áo",
    image: "./assets/carousel-wardrobe.jpg",
    imageAfter: "./assets/hover-wardrobe.jpg",
    discount: 5,
    price: 15870000,
    id: 6
},

{
    productName: "Chara Coffee Table",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-caracoffeetable.jpg",
    imageAfter: "./assets/hover-caracoffeetable.jpg",
    discount: 0,
    price: 5450000,
    id: 13
},
{
    productName: "VIENNA",
    productInfo: "Sofa băng",
    image: "./assets/carousel-vienna.jpg",
    imageAfter: "./assets/hover-vienna.jpg",
    discount: 5,
    price: 17390000,
    id: 7
},
{
    productName: "Morel",
    productInfo: "Sofa Góc",
    image: "./assets/carousel-sofa.jpg",
    imageAfter: "./assets/hover-sofa.jpg",
    discount: 10,
    price: 27990000,
    id: 8
},
{
    productName: "AME TIVI SHELF",
    productInfo: "Kệ Tivi",
    image: "./assets/carousel-ametvshelf.jpg",
    imageAfter: "./assets/hover-ametvshelf.jpg",
    discount: 0,
    price: 5390000,
    id: 9
},
{
    productName: "MITHRIL COFFEE TABLE",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-mithrel.jpg",
    imageAfter: "./assets/hover-mithrel.jpg",
    discount: 0,
    price: 7619000,
    id: 10
},
{
    productName: "FRANE COFFEE TABLE",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-coffeetable.jpg",
    imageAfter: "./assets/hover-caracoffeetable.jpg",
    discount: 0,
    price: 4229000,
    id: 11
},
{
    productName: "Bee Table White",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-beetable.jpg",
    imageAfter: "./assets/hover-beetable.jpg",
    discount: 41,
    price: 459000,
    id: 12
},
{
    productName: "A Case Pink",
    productInfo: "Kệ đa năng",
    image: "./assets/carousel-pinkcases.jpg",
    imageAfter: "./assets/hover-pinkcases.jpg",
    discount: 49,
    price: 389000,
    id: 14
},
{
    productName: "NARI DINNER TABLE SIZE S BROWN",
    productInfo: "Bộ bàn ăn",
    image: "./assets/carousel-nari.jpg",
    imageAfter: "./assets/hover-nari.jpg",
    discount: 6,
    price: 6040000,
    id: 15
},
{
    productName: "Bey Cabinet 2F Brown",
    productInfo: "Kệ sách",
    image: "./assets/carousel-beycabinet.jpg",
    imageAfter: "./assets/hover-beycabinet.jpg",
    discount: 50,
    price: 399000,
    id: 15
}

]
// function để loop product card
const initProductsElement = () => {
    const productsDataElement = document.querySelector("#home-featured-products .productsCard");
    let listProducts = "";
    for (i = 0; i < productsData.length; i++) {
        const products = productsData[i];
        const { productName, productInfo, image, imageAfter, discount, price, id } = products;
        if (discount === 0) {
            listProducts += `<div class="box-01 col">
        <div class="img-container">
        <img class="img-before" src=${image} alt="">
        <img class="img-after" src=${imageAfter} alt="">
        </div>
        <div class="products">
        <div><a href="" class="product-name">${productName} </a></div>
        </a>
        <div class="product-info">${productInfo}
        </div>
        <div class="price">
            <div class="current-price">${price.toLocaleString('en-US')}₫</div>
        </div>
        <button class="my-btn" onclick="addProductToCart(${id})">Mua ngay</button>
        </div>
    </div>`
        }
        else {
            listProducts +=
                `<div class="box-01 col">
            <div class="img-container">
            <img class="img-before" src=${image} alt="">
            <img class="img-after" src=${imageAfter} alt="">
                <span class="discount">-${discount}%</span>
            </div>
            <div class="products">
            <div><a href="" class="product-name">${productName} </a></div>
            <div class="product-info">${productInfo}
            </div>
            <div class="price">
                <div class="old-price">${price.toLocaleString('en-US')}₫</div>
                <div class="current-price">${(price * (100 - discount) / 100).toLocaleString('en-US')}₫</div>
            </div>
            <button class="my-btn" onclick="addProductToCart(${id})">Mua ngay</button></div>
        </div>`};

    }
    productsDataElement.innerHTML = listProducts;
};
initProductsElement();


// function để tạo caroulsel/slider

const findFirstDiscountIndex = (product) => {
    for (let i = 0; i < product.length; i++) {
        if (product[i].discount !== 0) { return product[i].id }
    };
}
const firstDiscountIndex = findFirstDiscountIndex((productsData))


// const initProductsElement2 = () => {
//     const productsDataElement2 = document.querySelector("#home-flashsale .row");
//     const processingProductsCard = productsData.map((product, index) => {
//         const { productName, productInfo, image, imageAfter, discount, price, currentPrice, id } = product;
//         if (discount !== 0 && id===firstDiscountIndex) {
//             return `<div class="box-01 carousel-item active" data-bs-interval="10000">
//     <div class="img-container">
//     <img class="img-before" src=${image} alt="">
//     <img class="img-after" src=${imageAfter} alt="">
//         <span class="discount">${discount}%</span>
//     </div>
//     <div class="product-name"><a href="">${productName}</div>
//     </a>
//     <div class="product-info">${productInfo}
//     </div>
//     <div class="price">
//         <div class="old-price">${price}</div>
//         <div class="current-price">${currentPrice}</div>
//     </div>
//     <button class="my-btn">Mua ngay</button>
// </div>`}
// else if (discount !==0 && id !==firstDiscountIndex) {
//     return `<div class="box-01 carousel-item" data-bs-interval="2000">
//     <div class="img-container">
//     <img class="img-before" src=${image} alt="">
//     <img class="img-after" src=${imageAfter} alt="">
//         <span class="discount">${discount}%</span>
//     </div>
//     <div class="product-name"><a href="">${productName}</div>
//     </a>
//     <div class="product-info">${productInfo}
//     </div>
//     <div class="price">
//         <div class="old-price">${price}</div>
//         <div class="current-price">${currentPrice}</div>
//     </div>
//     <button class="my-btn">Mua ngay</button>
// </div>`
// }
//     })
//     console.log(processingProductsCard);
//     productsDataElement2.innerHTML = processingProductsCard.join("");
// }

const initProductsElement2 = () => {
    const productsDataElement2 = document.querySelector("#home-flashsale .track");
    const processingProductsCard = productsData.map((product) => {
        const { productName, productInfo, image, imageAfter, discount, price, id } = product;
        if (discount !== 0) {
            return `<div class="box-01 col">
            <div class="img-container">
            <img class="img-before" src=${image} alt="">
            <img class="img-after" src=${imageAfter} alt="">
                <span class="discount">-${discount}%</span>
            </div>
            <div class="products">
            <div><a href="" class="product-name">${productName} </a></div>
            <div class="product-info">${productInfo}
            </div>
            <div class="price">
            <div class="old-price">${price.toLocaleString('en-US')}₫</div>
            <div class="current-price">${(price * (100 - discount) / 100).toLocaleString('en-US')}₫</div>
            </div>
            <button class="my-btn" onclick="addProductToCart(${id})">Mua ngay</button></div>
        </div>`}
    })
    productsDataElement2.innerHTML = processingProductsCard.join("");
}


initProductsElement2();



// Hover Effect: Function để thay đổi ảnh khi hover

const box = document.querySelectorAll(".box-01")
const img = document.querySelectorAll(".img-after")


for (let i = 0; i < box.length; i++) {
    box[i].onmouseover = function () {
        img[i].classList.add("active");
    }
}

for (let i = 0; i < box.length; i++) {
    box[i].onmouseout = function () {
        img[i].classList.remove("active");
    }
}

// Slider/Carousel

const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
const track = document.querySelector(".track");
let carouselWidth = document.querySelector(".carousel-inner").offsetWidth;

let index = 0;

window.addEventListener('resize', () => {
    track.style.transform = document.querySelector(".carousel-inner").offsetWidth;

})

nextBtn.addEventListener('click', () => {
    index++;
    preBtn.classList.add('active');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        nextBtn.classList.add('hide');
    }
})

preBtn.addEventListener('click', () => {
    index--;
    nextBtn.classList.remove('hide');
    if (index === 0) {
        preBtn.classList.remove('active');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`
})

console.log(carouselWidth);

// Add product to cart

let cart = [];

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartInformation = () => {
    const cartInString = localStorage.getItem("cart");
    cart = JSON.parse(cartInString) || [];
};
// loadCartInformation();

function addProductToCart(id) {
    const selectedProduct = productsData.find((product) => Number(product.id) === id);
    const productInCartIndex = cart.findIndex((cartItem) => Number(cartItem.id) === id);
    if (productInCartIndex !== -1) {
        cart[productInCartIndex].quantity += 1;
    } else {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    }
    saveCartToLocalStorage(cart);
    console.log(cart);
}