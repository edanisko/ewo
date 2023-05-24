"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batch_1 = require("./batch");
const app = async () => {
    // Create a new instance of Batch with the desired options
    const options = { cmd: "whois", args: ["ninespin.com"] };
    const batch = new batch_1.Batch(options);
    // Query a single domain
    const domain = "example.com";
    const record = await batch.query(domain);
    console.log(record);
    // Query multiple domains
    const domains = ["example.com", "google.com", "github.com"];
    const records = await batch.queryMany(domains);
    console.log(records);
};
app();
//# sourceMappingURL=app2.js.map