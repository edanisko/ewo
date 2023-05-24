// whois-record.ts
// part of a type script library for executing back whois queries

export class WhoisRecord {
    private domain: string;
    private output: string;
    
    constructor(domain: string, output: string) {
        this.domain = domain;
        this.output = output;
    }
    
    public getDomain(): string {
        return this.domain;
    }
    
    public getOutput(): string {
        return this.output;
    }
}