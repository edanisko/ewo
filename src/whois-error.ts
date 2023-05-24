// whois-error.ts
// part of a type script library for executing back whois queries

export class WhoisError extends Error {
    private domain: string;
    
    constructor(domain: string, message: string) {
        super(message);
        this.domain = domain;
    }
    
    public getDomain(): string {
        return this.domain;
    }
}
