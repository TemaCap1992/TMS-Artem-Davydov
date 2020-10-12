const input = document.getElementById('input');
const form = document.getElementById('form')
const tableBody = document.getElementById('tbody');
const clear = document.getElementById('clear');

let map = new Map();

function renderTableRow() {
    let tBody = ''

    map.forEach((value, key) => {
        const [city, country, temp] = value

        tBody += `
        <tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temp}</td>
            <td>${temp}</td>
        </tr>
        `

    })
    tableBody.innerHTML = tBody
}

function getWeather(city) {
    return fetch(`http://api.weatherstack.com/current?access_key=316a645b27a2b562cf826f4797de2a48&query=${city}`)
        .then(res => res.json())
}

form.addEventListener('submit', event => {
    event.preventDefault()

    getWeather(input.value).then((response) => {
        const {
            current: { temperature },
            location: { country, name }

        } = response
        console.log(response);
        map.set(name, [name, country, temperature])
        renderTableRow()
    })
    input.value = '';
})

clear.onclick = function () {
    map.clear()
    renderTableRow()
}


