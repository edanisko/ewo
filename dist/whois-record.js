"use strict";
// whois-record.ts
// part of a type script library for executing back whois queries
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoisRecord = void 0;
class WhoisRecord {
    domain;
    output;
    constructor(domain, output) {
        this.domain = domain;
        this.output = output;
    }
    getDomain() {
        return this.domain;
    }
    getOutput() {
        return this.output;
    }
}
exports.WhoisRecord = WhoisRecord;
//# sourceMappingURL=whois-record.js.map