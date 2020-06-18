import { promises as fs } from 'fs';
import * as fsExtra from 'fs-extra';
import { Octokit } from '@octokit/rest';
import ts from 'typescript';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

/**
 * General github options
 */
const options = {
  owner: 'chakra-ui',
  repo: 'chakra-ui',
  branch: 'master',
  path: 'packages/theme/src',
  outDir: 'chakra',
};

/**
 * Check if the a github node is the `theme` folder
 */
function isThemeDirectory(node) {
  return node.path.startsWith(options.path) && node.type === 'blob';
}

/**
 * Get the file paths for all theme related files
 */
export async function getFilePaths() {
  const { data } = await octokit.git.getTree({
    owner: options.owner,
    repo: options.repo,
    tree_sha: 'c0f9c28',
    recursive: 'true',
  });

  if (!data.tree) {
    console.log('Error retrieving file tree');
    return;
  }

  return data.tree.filter(isThemeDirectory).map(node => node.path);
}

export async function download() {
  const paths = await getFilePaths();
  if (!paths) {
    console.log('Error retrieving file paths');
    return;
  }

  try {
    await Promise.all(
      paths.map(async path => {
        const filePath = path.split('packages/theme/src')[1];
        const destination = 'chakra' + filePath;

        fsExtra.ensureFileSync(destination);

        const { data } = await octokit.repos.getContent({
          owner: 'chakra-ui',
          repo: 'chakra-ui',
          ref: 'c0f9c28',
          path,
        });

        const buffer = Buffer.from(data.content, 'base64');
        const text = buffer.toString('ascii');

        const { outputText: jsCode } = await ts.transpileModule(text, {
          compilerOptions: {
            module: 6, // => 'es2020'
          },
        });

        await fs.writeFile(destination, jsCode, 'utf-8');
      })
    );
  } catch (error) {
    console.error(error);
  }
}
