var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CalcTaxes = /** @class */ (function () {
    function CalcTaxes(redditoannualelordo, tasseinps, tasseirpef) {
        this.redditoannualelordo = redditoannualelordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return CalcTaxes;
}());
var WorkerTaxes = /** @class */ (function (_super) {
    __extends(WorkerTaxes, _super);
    function WorkerTaxes(redditoannualelordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannualelordo, tasseinps, tasseirpef) || this;
    }
    WorkerTaxes.prototype.getUtiletasse = function () {
        return this.redditoannualelordo;
    };
    WorkerTaxes.prototype.gettasseinps = function () {
        return this.tasseinps;
    };
    WorkerTaxes.prototype.gettasseirpef = function () {
        return this.tasseirpef;
    };
    WorkerTaxes.prototype.getredditoannuonetto = function () {
        return this.redditoannualelordo;
    };
    return WorkerTaxes;
}(CalcTaxes));
var worker1 = new WorkerTaxes(100000, 1000, 2000);
console.log(worker1);
