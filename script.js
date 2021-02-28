let container = document.querySelector('.container');

let data = new Date(),
    day = data.getDay(),
    hour = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds(),
    month = new Date("December 31, 2021");
//Добрый день (утро, вечер, ночь в зависимости от времени суток)
if (hour > 3 && hour < 12) { container.insertAdjacentHTML('afterbegin', '<p>Доброе утро!</p>'); }
if (hour > 11 && hour < 19) { container.insertAdjacentHTML('afterbegin', '<p>Добрый день!</p>'); }
if (hour > 18 && hour < 24) { container.insertAdjacentHTML('afterbegin', '<p>Добрый вечер!</p>'); }
if (hour > 23 || hour < 4) { container.insertAdjacentHTML('afterbegin', '<p>Привет полуночникам!</p>'); }
//Сегодня: Понедельник
let myDay = [' Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
container.insertAdjacentHTML('afterend', `<p>Сегодня: </p>${myDay[day]}`);

//До нового года осталось 175 дней
let msPerDay = 24 * 60 * 60 * 1000;
let newYear = (month.getTime() - data.getTime()) / msPerDay;
let newYearSec = (parseInt(newYear));
container.after(' До нового года осталось ' + newYearSec + ' дней.  ');
//Текущее время:12:05:15 PM
if (hour <= 9) { hour = `0${hour}`; }
if (minutes <= 9) { minutes = `0${minutes}`; }
if (seconds <= 9) { seconds = `0${seconds}`; }
container.append(` Текущее время: ${hour}:${minutes}:${seconds}`);










