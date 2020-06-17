chakra-cli
==========

Command line interface for rapid Chakra UI integration for React, Vue and Next

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/chakra-cli.svg)](https://npmjs.org/package/chakra-cli)
[![Downloads/week](https://img.shields.io/npm/dw/chakra-cli.svg)](https://npmjs.org/package/chakra-cli)
[![License](https://img.shields.io/npm/l/chakra-cli.svg)](https://github.com/chakra-ui/chakra-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g chakra-cli
$ chakra COMMAND
running command...
$ chakra (-v|--version|version)
chakra-cli/1.0.0 darwin-x64 node-v14.3.0
$ chakra --help [COMMAND]
USAGE
  $ chakra COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`chakra hello [FILE]`](#chakra-hello-file)
* [`chakra help [COMMAND]`](#chakra-help-command)

## `chakra hello [FILE]`

describe the command here

```
USAGE
  $ chakra hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ chakra hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/chakra-ui/chakra-cli/blob/v1.0.0/src/commands/hello.ts)_

## `chakra help [COMMAND]`

display help for chakra

```
USAGE
  $ chakra help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
