productsData = [{
    productName: "MAKEUP MIRROR ART BEMM2302-RA",
    productInfo: "[MUA 1 TẶNG 1] Gương Trang Điểm",
    image: "./assets/carousel-mirror.jpg",
    imageAfter: "./assets/hover-mirror.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "19,890,000₫",
    id: "1"
},
{
    productName: "GUYON 02",
    productInfo: "Tủ Giày",
    image: "./assets/carousel-shoescabinet.jpg",
    imageAfter: "./assets/hover-cabinet.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "3,290,000₫",
    id: "2"
},
{
    productName: "INDIANA",
    productInfo: "Sofa Bed",
    image: "./assets/carousel-sofabed.jpg",
    imageAfter: "./assets/hover-sofa.jpg",
    discount: -5,
    oldPrice: "19,890,000₫",
    currentPrice: "18,890,000₫",
    id: "3"
},
{
    productName: "DOUBLE HANGER SIZE L NATURAL",
    productInfo: "Giá Treo Quần Áo",
    image: "./assets/carousel-doublehanger.jpg",
    imageAfter: "./assets/hover-doublehanger.jpg",
    discount: -41,
    oldPrice: "1,690,000₫",
    currentPrice: "999,000₫",
    id: "4"
},
{
    productName: "POET BED NATURAL",
    productInfo: "Giường Ngủ",
    image: "https://product.hstatic.net/200000044142/product/giuong-ngu-frida-02_8d966bfeb16648d2a42e092218a1f11a_medium.jpg",
    imageAfter: "./assets/hover-poetbed.jpg",
    discount: -5,
    oldPrice: "",
    currentPrice: "9,090,000₫",
    id: "5"

},
{
    productName: "COMBO 3 TỦ QUẦN ÁO MANDY NATURAL",
    productInfo: "",
    image: "./assets/carousel-wardrobe.jpg",
    imageAfter: "./assets/hover-wardrobe.jpg",
    discount: -5,
    oldPrice: "15,870,000₫",
    currentPrice: "15,070,000₫",
    id: "6"
},

{
    productName: "Chara Coffee Table",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-caracoffeetable.jpg",
    imageAfter: "./assets/hover-caracoffeetable.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "5,450,000₫",
    id: "13"
},
{
    productName: "VIENNA",
    productInfo: "Sofa băng",
    image: "./assets/carousel-vienna.jpg",
    imageAfter: "./assets/hover-vienna.jpg",
    discount: -5,
    oldPrice: "17,390,000₫",
    currentPrice: "16,520,000₫",
    id: "7"
},
{
    productName: "Morel",
    productInfo: "Sofa Góc",
    image: "./assets/carousel-sofa.jpg",
    imageAfter: "./assets/hover-sofa.jpg",
    discount: -10,
    oldPrice: "27,990,000₫",
    currentPrice: "26,590,000₫",
    id: "8"
},
{
    productName: "AME TIVI SHELF",
    productInfo: "Kệ Tivi",
    image: "./assets/carousel-ametvshelf.jpg",
    imageAfter: "./assets/hover-ametvshelf.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "5,390,000₫",
    id: "9"
},
{
    productName: "MITHRIL COFFEE TABLE",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-mithrel.jpg",
    imageAfter: "./assets/hover-mithrel.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "7,619,000₫",
    id: "10"
},
{
    productName: "FRANE COFFEE TABLE",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-coffeetable.jpg",
    imageAfter: "./assets/hover-caracoffeetable.jpg",
    discount: 0,
    oldPrice: "",
    currentPrice: "4,229,000₫",
    id: "11"
},
{
    productName: "Bee Table White",
    productInfo: "Bàn Trà - Bàn Sofa",
    image: "./assets/carousel-beetable.jpg",
    imageAfter: "./assets/hover-beetable.jpg",
    discount: -41,
    oldPrice: "459,000₫",
    currentPrice: "299,000₫",
    id: "12"
}

]

// function để loop product card
const initProductsElement = () => {
    const productsDataElement = document.querySelector("#home-featured-products .productsCard");
    let listProducts = "";
    for (i = 0; i < productsData.length; i++) {
        const products = productsData[i];
        const { productName, productInfo, image, imageAfter, discount, oldPrice, currentPrice } = products;
        if (discount === 0) {
            listProducts += `<div class="box-01">
        <div class="img-container">
        <img class="img-before" src=${image} alt="">
        <img class="img-after" src=${imageAfter} alt="">
        </div>
        <div class="product-name"><a href="">${productName}</div>
        </a>
        <div class="product-info">${productInfo}
        </div>
        <div class="price">
            <div class="old-price">${oldPrice}</div>
            <div class="current-price">${currentPrice}</div>
        </div>
        <button class="my-btn">Mua ngay</button>
    </div>`
        }
        else {
            listProducts +=
                `<div class="box-01">
    <div class="img-container">
    <img class="img-before" src=${image} alt="">
    <img class="img-after" src=${imageAfter} alt="">
        <span class="discount">${discount}%</span>
    </div>
    <div class="product-name"><a href="">${productName}</div>
    </a>
    <div class="product-info">${productInfo}
    </div>
    <div class="price">
        <div class="old-price">${oldPrice}</div>
        <div class="current-price">${currentPrice}</div>
    </div>
    <button class="my-btn">Mua ngay</button>

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


const initProductsElement2 = () => {
    const productsDataElement2 = document.querySelector("#home-flashsale .row");
    const processingProductsCard = productsData.map((product, index) => {
        const { productName, productInfo, image, imageAfter, discount, oldPrice, currentPrice, id } = product;
        if (discount !== 0 && id===firstDiscountIndex) {
            return `<div class="box-01 carousel-item active" data-bs-interval="10000">
    <div class="img-container">
    <img class="img-before" src=${image} alt="">
    <img class="img-after" src=${imageAfter} alt="">
        <span class="discount">${discount}%</span>
    </div>
    <div class="product-name"><a href="">${productName}</div>
    </a>
    <div class="product-info">${productInfo}
    </div>
    <div class="price">
        <div class="old-price">${oldPrice}</div>
        <div class="current-price">${currentPrice}</div>
    </div>
    <button class="my-btn">Mua ngay</button>
</div>`}
else if (discount !==0 && id !==firstDiscountIndex) {
    return `<div class="box-01 carousel-item" data-bs-interval="2000">
    <div class="img-container">
    <img class="img-before" src=${image} alt="">
    <img class="img-after" src=${imageAfter} alt="">
        <span class="discount">${discount}%</span>
    </div>
    <div class="product-name"><a href="">${productName}</div>
    </a>
    <div class="product-info">${productInfo}
    </div>
    <div class="price">
        <div class="old-price">${oldPrice}</div>
        <div class="current-price">${currentPrice}</div>
    </div>
    <button class="my-btn">Mua ngay</button>
</div>`
}
    })
    console.log(processingProductsCard);
    productsDataElement2.innerHTML = processingProductsCard.join("");
}



initProductsElement2();

$('#recipeCarousel').carousel({
    interval: 10000
  })

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


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
