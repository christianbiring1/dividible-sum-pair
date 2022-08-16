/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let out = 0;
    let i = 0;
    while(i < n) {
        for(let j = i + 1; j < n; j += 1) {
            if((ar[i] + ar[j]) % k === 0)
            out += 1;
        }
        i += 1
    }
    return out;

}
