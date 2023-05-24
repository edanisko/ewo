"use strict";
// whois.ts
// part of a type script library for executing back whois queries
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whois = void 0;
const whois_record_1 = require("./whois-record");
const whois_error_1 = require("./whois-error");
class Whois {
    options;
    constructor(options) {
        this.options = options;
    }
    async query(domain) {
        const cmd = this.options.cmd;
        const args = this.options.args;
        const process = require('child_process').spawnSync(cmd, [...args, domain]);
        const decoder = new TextDecoder();
        const stdout = process.stdout;
        const stderr = process.stderr;
        const status = process.status;
        if (status === 0) {
            const output = decoder.decode(stdout);
            return new whois_record_1.WhoisRecord(domain, output);
        }
        else {
            const error = decoder.decode(stderr);
            throw new whois_error_1.WhoisError(domain, error);
        }
    }
}
exports.Whois = Whois;
//# sourceMappingURL=whois.js.map