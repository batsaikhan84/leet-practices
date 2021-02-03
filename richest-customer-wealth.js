var maximumWealth = function(accounts) {
    arr = []
    accounts.map(account => {
        arr.push(account.reduce((a, b) => a + b, 0))
    })
    console.log(arr)
};

accounts = [[1,2,3],[3,2,1]]

maximumWealth(accounts)