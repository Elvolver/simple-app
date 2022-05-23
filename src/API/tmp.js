const a = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
]


console.log(a.map(e => e.id == 1 ? {id: 8} : e))