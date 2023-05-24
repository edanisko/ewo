#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const process = require("process");
const commander_1 = require("commander");
const program = new commander_1.Command();
program.version('1.0.1', '-v, --version', 'output the current version');
program;
// .addOption(new Option('-d, --domain <domains...>', 'domains to query'))
// .option('-d, --domain <domains...>', 'domains to query')
// .option('-h, --host <hosts>', 'hosts to query')
// .option('-p, --port <port>', 'port to query')
program.parse();
// console.log('Options: ', program.opts());
// console.log('Remaining arguments: ', program.args);
var PORT = 43;
var HOST = '192.30.45.30';
var MESSAGE = "GOOGLE.COM\n";
// sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
if (program.args) {
    for (let i = 0; i < program.args.length; i++) {
        MESSAGE = program.args[i] + '\n';
        sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
    }
}
else {
    console.log('No arguments specified');
    process.exit(0);
}
function sendTcpMessage(targetIP, targetPORT, message) {
    const client = new net.Socket();
    client.connect(targetPORT, targetIP, () => {
        client.write(message);
    });
    client.on('data', function (data) {
        const dataString = data.toString();
        const lines = dataString.split('\n');
        console.log(lines[0].trim());
        client.destroy();
    });
    client.on('close', () => {
        return;
    });
}
//# sourceMappingURL=app.js.map