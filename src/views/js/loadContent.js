
this.onmessage = function(e) {
    var imageData = e.data.imageData;
    var pizzaArr = e.data.pizzas;

    postMessage(pizzaArr);
};
