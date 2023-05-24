// whois.ts
// part of a type script library for executing back whois queries

import { WhoisRecord } from "./whois-record";
import { WhoisOptions } from "./whois-options";
import { WhoisError } from "./whois-error";

export class Whois {
    private options: WhoisOptions;
    
    constructor(options: WhoisOptions) {
        this.options = options;
    }
    
    public async query(domain: string): Promise<WhoisRecord> {
        const cmd = this.options.cmd;
        const args = this.options.args;
        const process = require('child_process').spawnSync(cmd, [...args, domain]);
        
        const decoder = new TextDecoder();
        const stdout = process.stdout;
        const stderr = process.stderr;
        const status = process.status;
        
        if (status === 0) {
            const output = decoder.decode(stdout);
            return new WhoisRecord(domain, output);
        } else {
            const error = decoder.decode(stderr);
            throw new WhoisError(domain, error);
        }
    }
}