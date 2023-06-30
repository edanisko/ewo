#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var process = require("process");
var commander_1 = require("commander");
var program = new commander_1.Command();
program.version("1.0.1", "-v, --version", "output the current version");
program;
// .addOption(new Option('-d, --domain <domains...>', 'domains to query'))
// .option('-d, --domain <domains...>', 'domains to query')
// .option('-h, --host <hosts>', 'hosts to query')
// .option('-p, --port <port>', 'port to query')
program.parse();
// console.log('Options: ', program.opts());
// console.log("Remaining arguments: ", program.args);
var PORT = 43;
var HOST = "192.30.45.30";
var MESSAGE = "GOOGLE.COM\n";
// sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
if (program.args.length > 0) {
    console.log("Remaining arguments: ", program.args);
    // alphabetize program.args from a-z
    program.args.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    for (var i = 0; i < program.args.length; i++) {
        MESSAGE = program.args[i] + "\n";
        sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
    }
}
else {
    console.log("No arguments specified");
    process.exit(0);
}
function sendTcpMessage(targetIP, targetPORT, message) {
    var client = new net.Socket();
    client.connect(targetPORT, targetIP, function () {
        client.write(message);
    });
    client.on("data", function (data) {
        var dataString = data.toString();
        var lines = dataString.split("\n");
        // only log the result if the text contains no match
        if (lines[0].includes("No match")) {
            console.log(lines[0].trim());
        }
        client.destroy();
    });
    client.on("close", function () {
        return;
    });
}
