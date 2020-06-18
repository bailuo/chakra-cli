import * as tree from 'github-trees';
import { promises as fs } from 'fs';
import * as fsExtra from 'fs-extra';
import { Octokit } from '@octokit/rest';

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
  const data = await tree(options.owner, options.repo, {
    recursive: true,
    sha: 'c0f9c28',
    token: '7bb7ea2a97882bf30b0f425ec2074bfb1b5380f1',
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

  console.log('paths', paths);
  try {
    await Promise.all(
      paths.map(async path => {
        const p1 = path.split('packages/theme/src')[1];
        const p2 = 'chakra' + p1;

        fsExtra.ensureFileSync(p2);

        const { data } = await octokit.repos.getContent({
          owner: 'chakra-ui',
          repo: 'chakra-ui',
          ref: 'c0f9c28',
          path,
        });

        const buffer = Buffer.from(data.content, 'base64');
        const text = buffer.toString('ascii');

        await fs.writeFile(p2, text, 'utf-8');
      })
    );
  } catch (error) {
    console.error(error);
  }
}
