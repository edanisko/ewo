#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var net = require("net");
var process = require("process");
var commander_1 = require("commander");
var program = new commander_1.Command();
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
    for (var i = 0; i < program.args.length; i++) {
        MESSAGE = program.args[i] + '\n';
        sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
    }
}
else {
    console.log('No arguments specified');
    process.exit(0);
}
function sendTcpMessage(targetIP, targetPORT, message) {
    var client = new net.Socket();
    client.connect(targetPORT, targetIP, function () {
        client.write(message);
    });
    client.on('data', function (data) {
        var dataString = data.toString();
        var lines = dataString.split('\n');
        console.log(lines[0].trim());
        client.destroy();
    });
    client.on('close', function () {
        return;
    });
}
