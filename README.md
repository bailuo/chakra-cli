# Chakra CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/chakra-cli.svg)](https://npmjs.org/package/chakra-cli)
[![Downloads/week](https://img.shields.io/npm/dw/chakra-cli.svg)](https://npmjs.org/package/chakra-cli)
[![License](https://img.shields.io/npm/l/chakra-cli.svg)](https://github.com/chakra-ui/chakra-cli/blob/master/package.json)

Chakra CLI provides a set of commands to enhance your design system when usinghakra UI React or Vue.

This page contains a complete list of all CLI commands available, alongside their optional parameters for additional behavior.

All commands and options are listed in the following categories:

| Category              | Description                                 |
| --------------------- | ------------------------------------------- |
| [Commands](#commands) | A list of commands from Chakra CLI.         |
| [Options](#options)   | Additional options for Chakra CLI commands. |

# Install

```sh
npm install -g chakra-cli

# or

yarn global add chakra-cli
```

# Commands

## Init

The `init` command is used to initialize Chakra UI locally and clone the default chakra theme to your project.

### Basic Usage

```sh
chakra init [options]
```

### Options

| Option            | Description                 |
| ----------------- | --------------------------- |
| --theme           | clone the default theme     |
| -ts, --typescript | setup command in typescript |
| -h, --help        | show CLI help               |
| -o, --out         | the output directory        |

### Examples

```sh
# clone theme (in javascript)
chakra init --theme

# clone theme (in typescript)
chakra init --theme -ts

# clone theme to specific directory
chakra init --theme -o src
```

## Help

display help for chakra

```
USAGE
  $ chakra help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/segunadebayo"><img src="https://avatars2.githubusercontent.com/u/6916170?v=4" width="100px;" alt=""/><br /><sub><b>Segun Adebayo</b></sub></a><br /><a href="https://github.com/chakra-ui/chakra-cli/commits?author=segunadebayo" title="Code">💻</a> <a href="https://github.com/chakra-ui/chakra-cli/commits?author=segunadebayo" title="Documentation">📖</a> <a href="#infra-segunadebayo" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://chanchan.io/"><img src="https://avatars1.githubusercontent.com/u/1954752?v=4" width="100px;" alt=""/><br /><sub><b>Mark Chandler</b></sub></a><br /><a href="https://github.com/chakra-ui/chakra-cli/commits?author=with-heart" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/dominus_kelvin"><img src="https://avatars0.githubusercontent.com/u/24433274?v=4" width="100px;" alt=""/><br /><sub><b>Omereshone Kelvin Oghenerhoro</b></sub></a><br /><a href="https://github.com/chakra-ui/chakra-cli/commits?author=DominusKelvin" title="Code">💻</a> <a href="#ideas-DominusKelvin" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/ugbechike"><img src="https://avatars1.githubusercontent.com/u/29172958?v=4" width="100px;" alt=""/><br /><sub><b>Ugbechike</b></sub></a><br /><a href="https://github.com/chakra-ui/chakra-cli/commits?author=ugbechike" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
