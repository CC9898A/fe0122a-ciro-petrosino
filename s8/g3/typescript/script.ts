abstract class CalcTaxes {

    redditoannualelordo: number;
    tasseinps: number;
    
    tasseirpef: number;


    constructor(redditoannualelordo: number, tasseinps: number, tasseirpef: number) {

        this.redditoannualelordo = redditoannualelordo;
        this.tasseinps = tasseinps;
     
        this.tasseirpef = tasseirpef;


    }
    abstract getUtiletasse(): number;
    abstract gettasseinps(): number;
    abstract gettasseirpef(): number;
    abstract getredditoannuonetto(): number;


}

class WorkerTaxes extends CalcTaxes {
    constructor(redditoannualelordo: number, tasseinps: number,  tasseirpef: number) {
        super( redditoannualelordo, tasseinps, tasseirpef)

    }
getUtiletasse(): number {
    return this.redditoannualelordo
}
gettasseinps(): number {
    return this.tasseinps
}
gettasseirpef(): number {
    return this.tasseirpef
}
getredditoannuonetto(): number {
    return this.redditoannualelordo
}

}


let worker1 = new WorkerTaxes (100000,1000,2000)
console.log(worker1)



