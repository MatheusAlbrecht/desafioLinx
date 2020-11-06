import {requestProducts} from "./requisition.js";
export function resolveProductsRequest(requestResponse){
    // Expected result
    // <div class="product-instance">
    //     <img class="item-img">
    //     <p class="item-name">Nome Produto</p>
    //     <p class="item-desc">Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
    //     <p class="item-price-before"><span>De: R$</span><span></span></p>
    //     <p class="item-price-now"><span>Por: R$</span><span></span></p>
    //     <p class="item-payment-option">ou 2x de R$9,99</p>
    //     <button class="item-buy">Comprar</button>
    // </div>
    
    let parsedResponse = JSON.parse(requestResponse.response);
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }) 
    let container = document.querySelector("#product-lister");
        // container.innerHTML = ""; 
          
    parsedResponse.products.forEach((item)=>{        
        var product = document.createElement('div');
        product.className = "product-instance";
        
        var product_image = document.createElement("img");
        product_image.className = "item-img";
        product_image.src = item.image;
        
        var product_name = document.createElement("p");
        product_name.className = "item-name";
        product_name.innerHTML = item.name;

        var product_desc = document.createElement("p");
        product_desc.className = "item-desc";
        product_desc.innerHTML = item.description;

        var product_price_before = document.createElement("p");
        product_price_before.className = "item-price-before"
        product_price_before.innerHTML = `De: ${formatter.format(item.oldPrice)}`;

        var product_price_now = document.createElement("p");
        product_price_now.className = "item-price-now";
        product_price_now.innerHTML = `Por: ${formatter.format(item.price)}`;

        var product_payment = document.createElement("p");
        product_payment.className = "item-payment-option"
        product_payment.innerHTML = `ou ${item.installments.count}x de ${formatter.format(item.installments.value)}`;

        var product_buy = document.createElement("button");
        product_buy.className = "item-buy";
        product_buy.innerHTML = "Comprar";
        
        product.appendChild(product_image);
        product.appendChild(product_name);
        product.appendChild(product_desc);
        product.appendChild(product_price_before);
        product.appendChild(product_price_now);
        product.appendChild(product_payment);
        product.appendChild(product_buy);
        container.appendChild(product);
    })    
}

document.querySelector("#products-next-page").addEventListener("click", ()=>{
    document.getElementById("product-lister").setAttribute("data-page", parseInt(document.getElementById("product-lister").getAttribute("data-page")) + 1)
    requestProducts(document.getElementById("product-lister").getAttribute("data-page"), resolveProductsRequest);

})