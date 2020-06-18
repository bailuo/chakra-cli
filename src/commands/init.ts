import { Command, flags } from '@oclif/command';
import { download } from '../helpers/github';

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
    await download();
  }
}
