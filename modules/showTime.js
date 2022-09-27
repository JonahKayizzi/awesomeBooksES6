import {DateTime} from './luxon.js';
import createHTMLelement from './createHTMLelement.js'; 

export default () => {
  const dateTimeContainer = document.querySelector('.time-container');
  const currentDate =  DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateTimeContainer.innerHTML = currentDate;
}