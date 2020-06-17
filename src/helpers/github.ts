const GithubContent = require('github-content');
const tree = require('github-trees');

/**
 * General github options
 */
const options = {
  owner: 'chakra-ui',
  repo: 'chakra-ui',
  branch: 'master',
  path: 'packages/theme/src',
};

/**
 * Initialze the client that gets blob content
 * based on path
 */
const client = new GithubContent(options);

/**
 * Check if the the node is the `theme` folder
 */
export function getFiles(files) {
  client.files(files, (err, output) => {
    console.log(output);
  });
}

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
  });
  const paths = data.tree.filter(isThemeDirectory).map(node => node.path);
  return paths;
}

async function download() {
  const files = await getFilePaths();
  await Promise.all(files.map(writeFile));
}

function writeFile(path) {
  const file = new File([blob], 'uploaded_file.jpg', {
    type: 'image/jpeg',
    lastModified: Date.now(),
  });
}
