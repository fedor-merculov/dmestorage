function createCalendar(year) {
  let newArr = [];

  if( (year - 1004) % 4 !== 0 ){

    //Январь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'01'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'01'+'.'+year);
      }
    }
    //Февраль
    for(let i = 1; i <= 28; i++){
      newArr.push(i+'.'+'02'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'02'+'.'+year);
      }
    }
    //Март
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'03'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'03'+'.'+year);
      }
    }
    //Апрель
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'04'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'04'+'.'+year);
      }
    }
    //Май
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'05'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'05'+'.'+year);
      }
    }
    //Июнь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'06'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'06'+'.'+year);
      }
    }
    //Июль
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'07'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'07'+'.'+year);
      }
    }
    //Август
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'08'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'08'+'.'+year);
      }
    }
    //Сентябрь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'09'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'09'+'.'+year);
      }
    }
    //Октябрь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'10'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'10'+'.'+year);
      }
    }
    //Ноябрь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'11'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'11'+'.'+year);
      }
    }
    //Декабрь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'12'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'12'+'.'+year);
      }
    }
  } 

  else {

    //Январь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'01'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'01'+'.'+year);
      }
    }
    //Февраль
    for(let i = 1; i <= 29; i++){
      newArr.push(i+'.'+'02'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'02'+'.'+year);
      }
    }
    //Март
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'03'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'03'+'.'+year);
      }
    }
    //Апрель
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'04'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'04'+'.'+year);
      }
    }
    //Май
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'05'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'05'+'.'+year);
      }
    }
    //Июнь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'06'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'06'+'.'+year);
      }
    }
    //Июль
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'07'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'07'+'.'+year);
      }
    }
    //Август
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'08'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'08'+'.'+year);
      }
    }
    //Сентябрь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'09'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'09'+'.'+year);
      }
    }
    //Октябрь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'10'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'10'+'.'+year);
      }
    }
    //Ноябрь
    for(let i = 1; i <= 30; i++){
      newArr.push(i+'.'+'11'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'11'+'.'+year);
      }
    }
    //Декабрь
    for(let i = 1; i <= 31; i++){
      newArr.push(i+'.'+'12'+'.'+year);
      if(i<10){
        newArr.pop();
        newArr.push('0'+i+'.'+'12'+'.'+year);
      }
    }
  }
  return newArr;
}

let btn = document.querySelector('#btnIE');
btn.onclick = function(){

  let priceBaggage = 600; // стоимость хранения 1 места багажа в течение 1 календарного дня
  let priceBaggageLess = 300; // стоимость хранения 1 места багажа в течение 3 часов 1 календарного дня
  let priceClothes = 300; // стоимость хранения 1 кофра одежды
  
  // результаты подсчётов стоимости хранения
  let resultBaggage = 0;
  let resultClothes = 0;
  let resultTotal = 0; 
  
  // получение значений полей ввода даты, времени, количества багажа и одежды
  let firstDate = document.querySelector('#firstDateIE').value;
  let firstTime = document.querySelector('#firstTimeIE').value;
  let secondDate = document.querySelector('#secondDateIE').value;
  let secondTime = document.querySelector('#secondTimeIE').value;
  let baggage = Number(document.querySelector('#baggageIE').value);
  let clothes = Number(document.querySelector('#clothesIE').value);
  let resultBaggageOutput = document.querySelector('#resultBaggage').value;
  let resultClothesOutput = document.querySelector('#resultClothes').value; 
  let resultTotalOutput = document.querySelector('#resultTotal').value;
  let resultDays = document.querySelector('#resultDays').value;
  
  //создание массивов с годами
  let inputfirstHalfYear = Number(firstDate.slice(6));
  let firstHalfArr = createCalendar(inputfirstHalfYear);
  let inputSecondHalfYear = inputfirstHalfYear+1;
  let secondHalfArr = createCalendar(inputSecondHalfYear);
  let fullArr = firstHalfArr.concat(secondHalfArr);
  // функция преобразования времени
  function timeFunction(time){
  let newArr = time.split(':');
  let newestArr = [];
  newestArr.push( (Number(newArr[0])*60)+Number(newArr[1]) );
  return newestArr[0];
  }
  // вычисление разницы дней
  let firstIndx = fullArr.indexOf(firstDate);
  let lastIndx = fullArr.indexOf(secondDate);
  let differenceArr = fullArr.slice(firstIndx, lastIndx+1);
  let difference = differenceArr.length;
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
  
  // вывод результатов подсчёта  
  resultBaggageOutput = resultBaggage;
  resultClothesOutput = resultClothes; 
  resultTotalOutput = resultTotal;
  resultDays = difference;
  
  
}