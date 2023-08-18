import './styles.css';
import getCityData from './getCityData';

const cityInputBtn = document.querySelector('#cityInputBtn');
const cityInput = document.querySelector('#cityInput');
cityInputBtn.addEventListener('click', () => {
  getCityData(cityInput.value);
});
cityInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    getCityData(cityInput.value);
  }
});
