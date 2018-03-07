console.log("stest");

var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.getNombreTarjeta = function () {
        return "Tarjeta generica";
    };
    return CreditCard;
}());
var TestOCP = /** @class */ (function () {
    function TestOCP() {
        var tarjeta = new CreditCard();
        console.log(tarjeta.getNombreTarjeta());
    }
    return TestOCP;
}());
