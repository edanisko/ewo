// a type script library for executing back whois queries





import { Whois } from "./whois";
import { WhoisRecord } from "./whois-record";
import type { WhoisOptions } from "./whois-options";
import { WhoisError } from "./whois-error";

export class Batch {
    private whois: Whois;
    private options: WhoisOptions;
    
    constructor(options: WhoisOptions) {
        this.options = options;
        this.whois = new Whois(options);
    }
    
    public async query(domain: string): Promise<WhoisRecord> {
        try {
        return await this.whois.query(domain);
        } catch (err) {
        throw new WhoisError(domain, err);
        }
    }
    
    public async queryMany(domains: string[]): Promise<WhoisRecord[]> {
        const promises = domains.map((domain) => this.query(domain));
        return await Promise.all(promises);
    }
    }


