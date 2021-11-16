
module.exports = function Cart(cart) {
    
    this.id = cart.id || 0;
    this.timestamp = cart.timestamp || 0;
    this.producto = cart.items || {};

    this.add = function(item, id) {
        let cartItem = this.producto[id];
        if (!cartItem) {
            cartItem = this.producto[id] = item 
        }
    };

    this.removeItem = function(id_prod) {
        console.log("-----------------------------");
        console.log(this.id)
        console.log(this.producto[id_prod]);
        delete this.producto[id_prod];
    };
    
    this.getItems = function() {
        let arr = [];
        for (var id in this.producto) {
            arr.push(this.producto[id]);
        }
        return arr;
    };
};
