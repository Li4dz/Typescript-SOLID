export class Card {
    private Code: String;
    protected MonthlyCost: number;

    constructor(code: String, MonthlyCost: number) {
        this.Code = code;
        this.MonthlyCost = MonthlyCost;
    }

    getCode(): String {
        return this.Code;
    }

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.02;
    }

}

export class GoldenCard extends Card {
    
    monthlyDiscount(): number {
        return this.MonthlyCost * 0.05;
    }
}

export class SilverCard extends Card {

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.03;
    }
}