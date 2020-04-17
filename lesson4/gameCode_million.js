var works = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12, work13, work14, work15]


var numberQuest = 0
for(var w of works ){ 
    do {
        ok = false;
        var userAnsw = prompt(w.quest + "\n" + w.answ1 + "\n" + w.answ2 + "\n" + w.answ3 + "\n" + w.answ4 + "\n" + '-1 - Если вы хотите забрать деньги')
        userAnsw = userAnsw.toUpperCase()
        if (userAnsw == -1) {
            break;
        }else {
            ok = isAnswer(userAnsw);
        }
    } while (!ok);
    
    if(userAnsw == -1){
        if(numberQuest == 0){
            alert('Вы закончили игру. Ваш выйгрыш составил: 0')
            break;
        }else{
            var userMoney = works[numberQuest - 1].maxMoney
            alert('Вы закончили игру. Ваш выйгрыш составил: ' + CustomEvent)
            break;
        }
    }else if(userAnsw == w.right){
        alert("Это правильный ответ!!! Ваш выйгрыш составляет: " + w.maxMoney + " Ваша несгораемая сумма: " + w.minMoney);
    }else{
        alert("Это неправильный ответ... Правильный ответ: " + w.right + " Ваш выйгрыш составляет: " + w.minMoney)
        break;
    }
    
    numberQuest += 1
    
}

function isAnswer(event) {
    if (event == 'A' || event == 'B' || event == 'C' || event == 'D')  {
        return true;
    }else{
        alert('Вы ввели недопустимый символ');
        return false;
    }
    
}



//toUpperCase()

