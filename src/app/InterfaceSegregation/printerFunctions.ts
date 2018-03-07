export interface Printer {
    printDocument();
}

export interface Scanner {
    scannerDocument();
}

export interface Copier {
    copyDocument();
}

export class SuperPrinter implements Printer, Scanner, Copier {

    copyDocument() {
        console.log('Copying document');
    }
    scannerDocument() {
        console.log('Scanning document');
    }
    printDocument() {
        console.log('Printing document');
    }
}

export class SimplePrinter implements Printer {

    printDocument() {
        console.log('Printing document');
    }
}