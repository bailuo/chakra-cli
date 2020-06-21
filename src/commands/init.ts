import { Command, flags } from '@oclif/command';
import { download } from '../helpers/download';
import shell from 'shelljs';
import transpile from '../helpers/transpile';

function installThemeTools() {
  shell.exec('yarn add @chakra-ui/theme-tools');
}

export default class Init extends Command {
  static description = 'Initialize a Chakra UI package or theme';

  static examples = [
    `$ chakra init
    `,
  ];

  static flags = {
    theme: flags.boolean({
      char: 't',
      description: 'Clone the chakra starter theme',
    }),
    out: flags.string({
      char: 'o',
      description: 'The directory to output the theme to',
      required: false,
    }),
    help: flags.help({ char: 'h' }),
    ts: flags.boolean(),
  };

  async run() {
    // const { flags } = this.parse(Init);
    // installThemeTools();
    // console.log(JSON.stringify(flags));
    // await download();
    transpile();
  }
}
