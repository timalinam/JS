var event, ok;

var events = []

event = letEvent(works.a00, works.a0, works.a1, works.a2)
events.push(event)

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        
        event = letEvent(works.b00, works.b0, works.b1, works.b2)
        events.push(event)

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                
                event = letEvent(works.d00, works.d0, works.d1, works.d2)
                events.push(event)
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                
                event = letEvent(works.d00, works.d0, works.d1, works.d2)
                events.push(event)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        
        event = letEvent(works.c00, works.c0, works.c1, works.c2)
        events.push(event)

        switch (event) {
            case 1: // Второе действие
                
                event = letEvent(works.d00, works.d0, works.d1, works.d2)
                events.push(event)
                break;
            case 2: // Второе действие
                
                event = letEvent(works.d00, works.d0, works.d1, works.d2)
                events.push(event)
                break;
                
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
do {
    ok = false;
    var userAnsw = +prompt('Введите порядковый номер вопроса по счету, чтобы узнать ваш ответ\n' + '-1 - Выход из игры');
    if (userAnsw == -1) {
        break;
    }else {
        ok = isAnswer(events.length, userAnsw);
    }
    } while (!ok);

alert(events[userAnsw - 1])
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function letEvent(question,numAnsw, answer1, answer2) {
    do {
        ok = false;
        var event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }else {
            ok = isAnswer(numAnsw, event);
        }
    } while (!ok);
    
    return event;   
}

