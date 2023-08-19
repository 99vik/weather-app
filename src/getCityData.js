import displayData from "./displayData";

export default async function getCityData(cityName) {
  const main = document.querySelector('main');
    main.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
  const cityNameLower = cityName.toLowerCase();
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=63b8bf7c3cd84359870151427230808&q=${cityNameLower}&days=3&aqi=no&alerts=no`);
  const responseData = await response.json();


  if (responseData.error) {
    alert(responseData.error.message);
  } else {
    cityInput.value = '';
    displayData(responseData);
  }
}
