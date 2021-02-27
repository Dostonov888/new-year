

Data = new Date();
Day = Data.getDay();
Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();
Month = new Date("December 31, 2021");
if (Hour > 3 && Hour < 12) document.writeln("Доброе утро!");
if (Hour > 11 && Hour < 19) document.writeln("Добрый день!");
if (Hour > 18 && Hour < 24) document.writeln("Добрый вечер!");
if (Hour > 23 || Hour < 4) document.writeln("Привет полуночникам!");


if (Day == 0) document.writeln("Сегодня: Воскресенье.");
if (Day == 1) document.writeln("Сегодня: Понедельник.");
if (Day == 2) document.writeln("Сегодня: Вторник.");
if (Day == 3) document.writeln("Сегодня: Среда.");
if (Day == 4) document.writeln("Сегодня: Четверг.");
if (Day == 5) document.writeln("Сегодня: Пятница.");
if (Day == 6) document.writeln("Сегодня: Суббота.");

msPerDay = 24 * 60 * 60 * 1000;
NewYear = (Month.getTime() - Data.getTime()) / msPerDay;
NewYearSec = (parseInt(NewYear));
//Добрый день (утро, вечер, ночь в зависимости от времени суток)
//Сегодня: Понедельник
//Текущее время:12:05:15 PM
//До нового года осталось 175 дней
document.writeln(' До нового года осталось ' + NewYearSec + ' дней.  ');
document.write(" Текущее время: " + Hour + ":" + Minutes + ":" + Seconds);






