#!/usr/bin/env node

import * as net from "net";
import * as process from "process";
import { Command, Option } from "commander";

const program = new Command();
program.version("1.0.1", "-v, --version", "output the current version");

program;
// .addOption(new Option('-d, --domain <domains...>', 'domains to query'))
// .option('-d, --domain <domains...>', 'domains to query')
// .option('-h, --host <hosts>', 'hosts to query')
// .option('-p, --port <port>', 'port to query')

program.parse();

// console.log('Options: ', program.opts());

var PORT = 43;
var HOST = "192.30.45.30";
var MESSAGE = "GOOGLE.COM\n";

if (program.args.length > 0) {
  // console.log("Remaining arguments: ", program.args);
  // alphabetize program.args from a-z
  program.args.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < program.args.length; i++) {
    MESSAGE = program.args[i] + "\n";
    sendTcpMessage(HOST, PORT, Buffer.from(new String(MESSAGE)));
  }
} else {
  console.log("No arguments specified");
  process.exit(0);
}

function sendTcpMessage(targetIP: string, targetPORT: number, message: Buffer) {
  const client = new net.Socket();
  client.connect(targetPORT, targetIP, () => {
    client.write(message);
  });

  client.on("data", function (data: Buffer) {
    const dataString = data.toString();
    const lines = dataString.split("\n");

    // only log the result if the text contains no match

    if (lines[0].includes("No match")) {
      console.log(lines[0].trim());
    }

    client.destroy();
  });

  client.on("close", () => {
    return;
  });
}
