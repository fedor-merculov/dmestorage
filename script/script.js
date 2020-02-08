

let btn = document.querySelector('#btn');
btn.onclick = () => {
  
  let priceBaggage = 600; // стоимость хранения 1 места багажа в течение 1 календарного дня
  let priceBaggageLess = 300; // стоимость хранения 1 места багажа в течение 3 часов 1 календарного дня
  let priceClothes = 300; // стоимость хранения 1 кофра одежды
  
  // результаты подсчётов стоимости хранения
  let resultBaggage = 0;
  let resultClothes = 0;
  let resultTotal = 0; 
  
  // получение значений полей ввода даты, времени, количества багажа и одежды
  let firstDate = document.querySelector('#firstDate').value;
  let firstTime = document.querySelector('#firstTime').value;
  let secondDate = document.querySelector('#secondDate').value;
  let secondTime = document.querySelector('#secondTime').value;
  let baggage = Number(document.querySelector('#baggage').value);
  let clothes = Number(document.querySelector('#clothes').value);
  let output = document.querySelector('.output');   
  // создание объектов Date
  let firstDateDate = new Date(firstDate);
  let secondDateDate = new Date(secondDate);
  
  // функция преобразования времени
  let timeFunction = (time) => {
    let newArr = time.split(':');
    let newestArr = [];
    newestArr.push( (Number(newArr[0])*60)+Number(newArr[1]) );
    return newestArr[0];
  }

  // вычисление разницы дней
  let difference = (secondDateDate - firstDateDate)/1000/60/60/24+1;
  // расчёт стоимости, если багаж хранится в течение 1 календарного дня
  if(difference === 1) {
    resultBaggage = baggage * priceBaggage;
    resultClothes = clothes * priceClothes;
    resultTotal = resultBaggage + resultClothes;
    
    //проверка если багаж хранится менее 3 часов
    if( (timeFunction(secondTime)-timeFunction(firstTime))<=180 ){
      resultBaggage = baggage * priceBaggageLess;
      resultTotal = resultBaggage + resultClothes;
    }
  }
  
  // расчёт стоимости, если багаж хранится более 1 календарного дня
  if(difference > 1 && difference < 7){
    resultBaggage = baggage * priceBaggage * difference;
    resultClothes = clothes * priceClothes * difference;
    resultTotal = resultBaggage + resultClothes;
   }
  
  // расчёт, если багаж хранится более 6 календарных дней
  if(difference > 6 && difference <= 30){
    resultBaggage = (baggage * priceBaggage * 6) + (baggage * priceBaggageLess * (difference - 6) );
    resultClothes = clothes * priceClothes * difference;
    resultTotal = resultBaggage + resultClothes;
  }
  
  // расчёт, если багаж сдан после 21:00
  if(difference > 1 && timeFunction(firstTime) >= 1260){
    resultBaggage -= (baggage * priceBaggageLess);
    resultTotal = resultBaggage + resultClothes;
  }
  
  // расчёт, если багаж получен в первые полтора часа
  if(difference > 1 && difference < 7 && timeFunction(secondTime) <= 90){
    resultBaggage -= baggage * (priceBaggage - timeFunction(secondTime) * 5);
    resultTotal = resultBaggage + resultClothes;
  }
  
  output.style.display = 'flex';

// вывод результатов подсчёта  
if(difference === 1 && ( (timeFunction(secondTime)-timeFunction(firstTime))<=180 )){
  output.innerHTML = `<p class="ok">Стоимость хранения багажа: ${resultBaggage} рублей </p><p class="ok">Стоимость хранения одежды: ${resultClothes} рублей </p><p class="ok">Суммарная стоимость хранения: ${resultTotal} рублей </p>
  <p class="ok">Количество мест багажа: ${baggage}</p><p class="ok">Количество кофров одежды: ${clothes}</p><p class="ok">Срок хранения: менее 3 часов</p>`;
}
if(difference === 1 && ( (timeFunction(secondTime)-timeFunction(firstTime))>180 )){
  output.innerHTML = `<p class="ok">Стоимость хранения багажа: ${resultBaggage} рублей </p><p class="ok">Стоимость хранения одежды: ${resultClothes} рублей </p><p class="ok">Суммарная стоимость хранения: ${resultTotal} рублей </p>
  <p class="ok">Количество мест багажа: ${baggage}</p><p class="ok">Количество кофров одежды: ${clothes}</p><p class="ok">Календарных дней: 1</p>`;
}
if(difference > 1 && difference < 7){
  output.innerHTML = `<p class="ok">Стоимость хранения багажа: ${resultBaggage} рублей </p><p class="ok">Стоимость хранения одежды: ${resultClothes} рублей </p><p class="ok">Суммарная стоимость хранения: ${resultTotal} рублей </p>
  <p class="ok">Количество мест багажа: ${baggage}</p><p class="ok">Количество кофров одежды: ${clothes}</p><p class="ok">Календарных дней: ${difference}</p>`;
}
if(difference > 1 && difference > 6 && difference <=30){
  output.innerHTML = `<p class="ok">Стоимость хранения багажа: ${resultBaggage} рублей </p><p class="ok">Стоимость хранения одежды: ${resultClothes} рублей </p><p class="ok">Суммарная стоимость хранения: ${resultTotal} рублей </p>
  <p class="ok">Количество мест багажа: ${baggage}</p><p class="ok">Количество кофров одежды: ${clothes}</p><p class="ok">Календарных дней: ${difference}</p><p class="ok">В стоимость включена скидка на хранение багажа более 6 календарных дней</p>`;
}
if(difference>30){
  output.innerHTML = `<p class="error">Вы не можете хранить багаж более 30 календарных дней</p>`;
}


// сообщения об ошибках ввода данных
if(baggage === 0 && clothes === 0){
  output.innerHTML = '<p class="error">Пожалуйста, введите количество мест багажа или количество кофров одежды!</p>';
}
if(baggage < 0 || clothes < 0){
  output.innerHTML = '<p class="error">Количество мест багажа или кофров одежды не может быть меньше 0</p>';
}

if(firstDate > secondDate){
  output.innerHTML = '<p class="error">Дата сдачи багажа не может быть больше даты получения!</p>';
}
if(firstDate === secondDate && timeFunction(firstTime) > timeFunction(secondTime)) {
  output.innerHTML = '<p class="error">Время сдачи багажа не может быть больше времени получения!</p>';
}
if(firstDate === '' || firstTime === '' || secondDate === '' || secondTime === ''){
  output.innerHTML = '<p class="error">Пожалуйста, полностью заполните поля ввода даты и времени сдачи и получения багажа!</p>';
}
document.scrollBy(0,9999);




}

