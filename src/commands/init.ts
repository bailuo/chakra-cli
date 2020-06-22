import { Command, flags } from '@oclif/command';
import * as fs from 'fs-extra';
import transpile from '../helpers/transpile';
import path from 'path';
import shell from 'shelljs';

function detectPackageManager() {
  const isNpm = fs.pathExistsSync(
    path.resolve(process.cwd(), 'package-lock.json')
  );
  return isNpm ? 'npm' : 'yarn';
}

function installThemeTools() {
  const manager = detectPackageManager();
  const cmd = manager === 'yarn' ? 'yarn add' : 'npm install';
  shell.exec(`${cmd} @chakra-ui/theme-tools`);
}

function setupTheme(options) {
  const { out, typescript } = options;

  const tsPath = path.resolve(__dirname, '../../templates/theme-ts');
  const jsPath = path.resolve(__dirname, '../../templates/theme-js');

  const fromPath = typescript ? tsPath : jsPath;
  const toPath = fs.realpathSync(process.cwd()) + '/' + out;

  fs.copySync(fromPath, toPath, { overwrite: true });
}

export default class Init extends Command {
  static description = 'Initialize a Chakra UI package or theme';

  static examples = [
    `$ chakra init --theme --ts
    This will copy the theme to your project in typescript
    `,
    `$ chakra init --theme
    This will copy the theme to your project in javascript
    `,
  ];

  static flags = {
    theme: flags.boolean({
      description: 'Clone the chakra starter theme',
    }),
    out: flags.string({
      char: 'o',
      description: 'The directory to output the theme to',
      default: 'chakra',
    }),
    help: flags.help({ char: 'h' }),
    ts: flags.boolean({
      description: 'Use the TypeScript version',
    }),
    toJs: flags.boolean({
      hidden: true,
      description: 'Used internally to convert the TS theme to JS',
    }),
  };

  async run() {
    const { flags } = this.parse(Init);
    const { theme, out, ts: typescript, toJs } = flags;

    /**
     * Once we download/copy the TS theme over,
     * we use this option to get the JS version
     * @private
     */
    if (toJs) {
      transpile();
      this.log('Created theme in JavaScript successfully');
    }

    if (!theme) {
      this.error(`Seems you forgot to pass the --theme flag`);
    }

    installThemeTools();

    setupTheme({ out, typescript });
  }
}
