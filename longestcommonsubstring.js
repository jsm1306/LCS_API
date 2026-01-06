import readline from 'readline';
import { fileURLToPath } from 'url';

function lcsRecursiveUtil(str1, str2, n, m, count) {
  if (n === 0 || m === 0) return count;

  if (str1[n - 1] === str2[m - 1]) {
    count = lcsRecursiveUtil(str1, str2, n - 1, m - 1, count + 1);
  }

  const count1 = lcsRecursiveUtil(str1, str2, n - 1, m, 0);
  const count2 = lcsRecursiveUtil(str1, str2, n, m - 1, 0);

  return Math.max(count, count1, count2);
}

export function longestcommonsubstring(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return 0;
  return lcsRecursiveUtil(str1, str2, str1.length, str2.length, 0);
}

const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question('Enter first string: ', (first) => {
    rl.question('Enter second string: ', (second) => {
      const len = longestcommonsubstring(first, second);
      console.log(`Length of longest common substring: ${len}`);
      rl.close();
    });
  });
}