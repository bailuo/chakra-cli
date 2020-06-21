// import ts from 'typescript';
import shell from 'shelljs';

async function transpile() {
  shell.find('templates/theme-ts').forEach(file => {
    console.log(file);
  });
}

export default transpile;
