"use strict";
// whois-record.ts
// part of a type script library for executing back whois queries
exports.__esModule = true;
exports.WhoisRecord = void 0;
var WhoisRecord = /** @class */ (function () {
    function WhoisRecord(domain, output) {
        this.domain = domain;
        this.output = output;
    }
    WhoisRecord.prototype.getDomain = function () {
        return this.domain;
    };
    WhoisRecord.prototype.getOutput = function () {
        return this.output;
    };
    return WhoisRecord;
}());
exports.WhoisRecord = WhoisRecord;
