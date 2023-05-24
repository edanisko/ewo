"use strict";
// a type script library for executing back whois queries
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batch = void 0;
const whois_1 = require("./whois");
const whois_error_1 = require("./whois-error");
class Batch {
    whois;
    options;
    constructor(options) {
        this.options = options;
        this.whois = new whois_1.Whois(options);
    }
    async query(domain) {
        try {
            return await this.whois.query(domain);
        }
        catch (err) {
            throw new whois_error_1.WhoisError(domain, err);
        }
    }
    async queryMany(domains) {
        const promises = domains.map((domain) => this.query(domain));
        return await Promise.all(promises);
    }
}
exports.Batch = Batch;
//# sourceMappingURL=batch.js.map