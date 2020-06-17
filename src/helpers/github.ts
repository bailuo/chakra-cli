import * as tree from 'github-trees';
const repo = require('github-download-parts');

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
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PASSWORD,
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
  await Promise.all(
    paths.map(path => {
      const p1 = path.split('packages/theme/src')[1];
      const p2 = 'chakra/' + p1;
      return repo('chakra-ui/chakra-ui', p2, path);
    })
  );
}
