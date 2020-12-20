window.onload = function () {

    var basketLimit = 8;
    var basketCounter =0;
    var buttonBuy = document.getElementById('buyBasket');

    var sum = 0.00;
    updateSum(sum);

    var buttons = document.getElementsByClassName('buttonToBasket');
    for (var button of buttons) {
        button.addEventListener('click', function (e) {
            if(e.target.className.includes('buttonToBasket')){
                if(basketCounter < basketLimit){addToCard(e.target.parentElement);
                }else {
                    window.alert('Maksymalna ilość prodóktów w koszyku wynosi 8 sztuk');
                }}
            });
        }

    document.getElementById('basket').addEventListener('click', function (e) {
        if (e.target.classList.contains('removeProduct')) {
            removeElement(e.target);
        }
    });

    function addToCard(addProduct) {

        var productToAdd = document.createElement('div');
        productToAdd.classList.add('cardProduct');

        var productNameToAdd = document.createElement('p');
        var productPriceToAdd = document.createElement('p');
        productPriceToAdd.classList.add('cardProductPrice');

        var productRemoveButtonToAdd = document.createElement('button');
        productRemoveButtonToAdd.textContent = 'Usuń';
        productRemoveButtonToAdd.style.setProperty("background-color", "hotpink");
        productRemoveButtonToAdd.style.width = "120px";
        productRemoveButtonToAdd.classList.add('removeProduct');

        var nameOfProduct = addProduct.firstElementChild;
        var priceOfProduct = nameOfProduct.nextElementSibling;

        productNameToAdd.textContent = nameOfProduct.textContent;
        productPriceToAdd.textContent = priceOfProduct.textContent;

        productToAdd.appendChild(productNameToAdd);
        productToAdd.appendChild(productPriceToAdd);
        productToAdd.appendChild(productRemoveButtonToAdd);

        document.getElementById('basket').appendChild(productToAdd);

        basketCounter++;

        sum += parseFloat(priceOfProduct.textContent);
        updateSum(sum)
        }

   function updateSum(value) {
       document.getElementById('sumBasket').textContent = value.toFixed(2);
        }

   function removeElement(clickedElement) {
       var elementToRemove = clickedElement.parentElement;
       document.getElementById('basket').removeChild(elementToRemove);
       sum -= parseFloat(clickedElement.previousElementSibling.textContent);
       updateSum(sum);
       basketCounter--;
   }

   buttonBuy.addEventListener('click', function (){
       window.alert('Dziękujemy za zakupy w naszym sklepie.\n Wartośc Twojego koszyka wynosi: ' + sum + ' zł')
       sum = 0;
       updateSum(0);
   });

};
