function lastKNumSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sequanceK = result.slice(- k);
        let sum = 0;
        for (el of sequanceK) {
            sum += el;
        }
        result.push(sum)
    }
    console.log(result.join(" "))
}
lastKNumSequance(6, 3)