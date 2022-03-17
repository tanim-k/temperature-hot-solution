// use keyboard enter for search :
const searchField = document.getElementById('button');
const searchInput = document.getElementById('city-name');
searchInput.addEventListener('keypress', function (event) {
    console.log('keypress trigerred', event.key)
    if (event.key === 'Enter'){
        searchField.click();
    }      
});

const API_KEY = `77d6ca2d772aa512416a9d925ed13de7`
const searchTemperature = () => {
const city = document.getElementById('city-name').value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
fetch(url)
.then(res => res.json())
.then(data => displayTemperature(data))
}
const setInnetText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temp => {
    setInnetText('city', temp.name);
    setInnetText('temp', temp.main.temp);
    setInnetText('cloud', temp.weather[0].main);
    console.log(temp)
    // set icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

