// import ts from 'typescript';
import prettier from 'prettier';
import shell from 'shelljs';

async function transpile() {
  // shell.find('templates/theme-ts').forEach(file => {
  //   console.log(file);
  // });
  shell.exec('npx tsc --project tsconfig.theme.json');
  shell.exec('npx prettier --write templates/theme-js');
  shell.exec('npx esformatter -i templates/theme-js/**/*.js --config esformatter.json')
}

export default transpile;
