const tempUnit = document.querySelector('.switch input');

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
  if (tempUnit.checked) {
    temperature.textContent = `${Math.round(data.current.temp_f)}°F`;
  } else {
    temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
  }
  mainDiv.appendChild(img);
  mainDiv.appendChild(temperature);
  currentWeatherDiv.appendChild(mainDiv);

  const currentWeatherText = document.createElement('p');
  currentWeatherText.textContent = data.current.condition.text;
  currentWeatherDiv.appendChild(currentWeatherText);

  const currentWeatherSubText = document.createElement('p');
  if (tempUnit.checked) {
    currentWeatherSubText.textContent = `Feels like ${Math.round(data.current.feelslike_f)}°.  Min: ${Math.round(data.forecast.forecastday[0].day.mintemp_f)}°, Max: ${Math.round(data.forecast.forecastday[0].day.maxtemp_f)}°`;
  } else {
    currentWeatherSubText.textContent = `Feels like ${Math.round(data.current.feelslike_c)}°.  Min: ${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°, Max: ${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°`;
  }
  currentWeatherDiv.appendChild(currentWeatherSubText);

  return currentWeatherDiv;
}

function createForecastDayDiv(day) {
  const div = document.createElement('div');
  const dayDiv = document.createElement('p');

  const daysOfWeek = ['Sunday', 'Monday', 'Thuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dayDiv.textContent = `${daysOfWeek[new Date(day.date).getDay()]}, ${new Date(day.date).getDate()}.     ${months[new Date(day.date).getMonth()]} `;

  const tempDiv = document.createElement('div');
  const img = document.createElement('img');
  const tempText = document.createElement('p');
  img.src = day.day.condition.icon;
  if (tempUnit.checked) {
    tempText.textContent = `${Math.round(day.day.maxtemp_f)}° / ${Math.round(day.day.mintemp_f)}°`;
  } else {
    tempText.textContent = `${Math.round(day.day.maxtemp_c)}° / ${Math.round(day.day.mintemp_c)}°`;
  }
  tempDiv.appendChild(tempText);
  tempDiv.appendChild(img);

  const text = document.createElement('p');
  text.textContent = day.day.condition.text;

  div.appendChild(dayDiv);
  div.appendChild(tempDiv);
  div.appendChild(text);
  return div;
}

function createForecastDiv(data) {
  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecast');

  data.forecast.forecastday.forEach((day) => {
    forecastDiv.appendChild(createForecastDayDiv(day));
  });

  return forecastDiv;
}

export default function displayData(data) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  tempUnit.addEventListener('click', () => {
    displayData(data);
  });
  main.appendChild(createCurrentWeatherDiv(data));
  main.appendChild(createForecastDiv(data));
}
