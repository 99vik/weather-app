function createCurrentWeatherDiv(data) {
  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.classList.add('current-weather');

  const currentWeatherTitle = document.createElement('p');
  currentWeatherTitle.textContent = `Weather in ${data.location.name}, ${data.location.country}`;
  currentWeatherDiv.appendChild(currentWeatherTitle);

  const mainDiv = document.createElement('div');
  const img = document.createElement('img');
  img.src = data.current.condition.icon;
  const temperature = document.createElement('p');
  temperature.textContent = `${Math.round(data.current.temp_c)}°`;
  mainDiv.appendChild(img);
  mainDiv.appendChild(temperature);
  currentWeatherDiv.appendChild(mainDiv);

  const currentWeatherText = document.createElement('p');
  currentWeatherText.textContent = data.current.condition.text;
  currentWeatherDiv.appendChild(currentWeatherText);

  const currentWeatherSubText = document.createElement('p');
  currentWeatherSubText.textContent = `Feels like ${Math.round(data.current.feelslike_c)}°.  Min: ${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°, Max: ${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°`;
  currentWeatherDiv.appendChild(currentWeatherSubText);

  return currentWeatherDiv;
}

export default function displayData(data) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.appendChild(createCurrentWeatherDiv(data));

  console.log(data);
}
