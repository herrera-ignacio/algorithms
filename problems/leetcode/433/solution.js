// https://leetcode.com/problems/minimum-genetic-mutation/

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number} min mutations or -1 if not possible
*/
function minMutation(start, end, bank) {
    const q = [];
    const visited = {};

    q.push(start);

    while (q.length > 0) {
        const gene = q.pop();
        const str = gene.split('');

        for (let validGene of bank) {
            const valid = validGene.split('');

            if (visited[validGene]) continue;

            let changes = 0;

            for (let i = 0; i < str.length; i++) {
                if (str[i] !== valid[i]) changes++;
            }
            
            if (changes === 1) {
                visited[validGene] = visited[gene] ? visited[gene] + 1 : 1;
                q.push(validGene);
            }
        }
    }

    return visited[end] ?? -1;
}

const case1 = ["AACCGGTT", "AACCGGTA", ["AACCGGTA"]] // 1
const case2 = ["AAAAACCC", "AACCCCCC", ["AAAACCCC","AAACCCCC","AACCCCCC"]]; // 3

console.log(minMutation(...case1));
console.log(minMutation(...case2));

