"use strict";
// whois-error.ts
// part of a type script library for executing back whois queries
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoisError = void 0;
class WhoisError extends Error {
    domain;
    constructor(domain, message) {
        super(message);
        this.domain = domain;
    }
    getDomain() {
        return this.domain;
    }
}
exports.WhoisError = WhoisError;
//# sourceMappingURL=whois-error.js.map