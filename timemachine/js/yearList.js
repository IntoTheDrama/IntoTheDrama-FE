const yearList = [
    {
        "year": "1990년",
        "address": "1990.html",
    },

    {
        "year": "2000년",
        "address": "2000.html",
    },

    {
        "year": "2010년",
        "address": "2010.html",
    },

    {
        "year": "2020년",
        "address": "2020.html",
    },
]


const buttonContainer = document.querySelector('.button-container');

let eraButton = '';
yearList.forEach(years => {
    eraButton += `
<button><a href="/timemachine/html/${years.address}">${years.year}</a></button>
`
})
buttonContainer.innerHTML = eraButton;

