export default async function getCityData(cityName) {
  const cityNameLower = cityName.toLowerCase();
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=63b8bf7c3cd84359870151427230808&q=${cityNameLower}&days=3&aqi=no&alerts=no`);
  const responseData = await response.json();
  if (responseData.error) {
    console.log(responseData.error.message);
  } else {
    cityInput.value = '';
    console.log(responseData);
  }
}
