//? Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
//! УВАГА
//? Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

//? Для генерування випадкового кольору використовуй функцію getRandomHexColor.



const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let intervalId = null;



start.addEventListener('click', startBtn);
stop.addEventListener('click', stopBtn);
stop.setAttribute('disabled', true);


function startBtn() {
    intervalId = setInterval(changeBg, 1000);
    stop.removeAttribute('disabled');
    start.setAttribute('disabled', true);
    
}


function stopBtn() {
    clearInterval(intervalId);
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', true);
}

function changeBg() {
    return (document.body.style.background = getRandomHexColor());
} 


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }




// const buttonStartEl = document.querySelector('[data-start]');
// const buttonStopEl = document.querySelector('[data-stop]');

// console.log(buttonStartEl);

// buttonStartEl.addEventListener('click', startChange);
// buttonStopEl.addEventListener('click', stopChange);

// buttonStopEl.setAttribute('disabled', true);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function colorBcg() {
//   return (document.body.style.background = getRandomHexColor());
// }

// let timerId = null;

// function startChange() {
//   // timerId = setInterval(colorBcg, 1000);
//   timerId = setInterval(() => {
//     colorBcg();
//   }, 1000);

//   buttonStopEl.removeAttribute('disabled');
//   buttonStartEl.setAttribute('disabled', true);
// }

// function stopChange() {
//   clearInterval(timerId);
//   buttonStartEl.removeAttribute('disabled');
//   buttonStopEl.setAttribute('disabled', true);
// }

