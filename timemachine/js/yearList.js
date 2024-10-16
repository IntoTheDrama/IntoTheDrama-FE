const yearList = [
    {
        "year": "1990년",
        "address": "",
    },

    {
        "year": "2000년",
        "address": "",
    },

    {
        "year": "2010년",
        "address": "",
    },

    {
        "year": "2020년",
        "address": "",
    },
]


const buttonContainer = document.querySelector('.button-container');

let eraButton = '';
yearList.forEach(years => {
    eraButton += `
<button><a href="${years.address}">${years.year}</a></button>
`
})
buttonContainer.innerHTML = eraButton;

