export abstract class CreditCard {
    abstract getName() : string;
}

export class BcpCard extends CreditCard{
    getName() : string  {
        return "BCP Card";
    }
}

export class InterbankCard extends CreditCard{
    getName() : string  {
        return "Interbank Card";
    }
}