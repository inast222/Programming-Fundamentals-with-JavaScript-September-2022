function companyUsers(input) {
    let result = {};

    input.forEach(line => {
        let [companyName, userID] = line.split(" -> ");

        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(userID);
    })

    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(el => {
        let companyName = el[0];
        let allIDs = el[1];
        console.log(companyName);

        let uniqueIDs = new Set(allIDs)
        for (const id of uniqueIDs) {
            console.log(`-- ${id}`)
        }
    })
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])