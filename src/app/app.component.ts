import { Component } from '@angular/core';
import { InterbankCard, BcpCard, CreditCard } from './LiskovSustitution/creditCard.class';
import { GoldenCard, Card, SilverCard } from './OpenClosed/cards.class';
import { Printer, Copier, Scanner, SuperPrinter, SimplePrinter } from "./InterfaceSegregation/printerFunctions";
import { Robot, Megaman, Protoman } from "./DependencyInversion/dependencyInversion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
    /*Open Close Principle*/
    let goldenCard = new GoldenCard("001", 100);
    let silverCard = new SilverCard("002", 100);
    var goldenDiscount = goldenCard.monthlyDiscount();
    var silverDiscount = silverCard.monthlyDiscount();
    console.log(`Monthly Discount : ${goldenDiscount} 
       Total : ${ 100 - goldenDiscount }`);
    console.log(`Monthly Discount : ${silverDiscount} 
       Total : ${ 100 - silverDiscount}`);

    /*Liskov Sustitution Principle*/ 
    let interbank = new InterbankCard();
    let bcp = new BcpCard();
    this.printCardName(interbank);
    this.printCardName(bcp);

    /*Interface Segregation Principle*/
    var superPrinter = new SuperPrinter();
    var simplePrinter = new SimplePrinter();

    console.log("Simple Printer Works !!!");
    simplePrinter.printDocument();
    console.log("Super Printer Works !!!");
    superPrinter.printDocument();
    superPrinter.scannerDocument();
    superPrinter.copyDocument();

    /*Dependency Inversion Principle*/
    var robotMega = new Megaman();
    var robotProto = new Protoman();
    this.printRobotMethods(robotMega);
    this.printRobotMethods(robotProto);
  }

  printCardName(creditCard : CreditCard){
    console.log(creditCard.getName());
  }

  printRobotMethods(robot : Robot){
    robot.fight();
    robot.fly();
  }

}
