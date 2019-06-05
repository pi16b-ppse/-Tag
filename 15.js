/**
*@description Переменные, используемые при начале новой игры для определения игрового поля и его элементов
*/
var arr = [], box, ei,ej;	

/**
* Функция меняющая местами два элемента массива с заданными индексами.
*@param {intеger} arr - Массив ячеек
*@param {intеger} i1 - Элемент массива
*@param {intеger} j1 - Элемент массива
*@param {intеger} i2 - Элемент массива
*@param {intеger} j2 - Элемент массива
*@return void
*/					
function swap(arr,i1,j1,i2,j2){				
    t = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = t;
}


/**
*Функция загрузки начальной страницы игры
*@return void
*/
window.onload = function() {				
    box = document.getElementById("box");
    newGame();				
    document.getElementById("reset").onclick = newGame;
}


/**
* Функция для обработки нажатий на костяшки
*@param {var} event - Ячейка
*@return void
*/
function cellClick(event) {
    var event = event || window.event,
    el = event.srcElement || event.target,
    i = el.id.charAt(0),
    j = el.id.charAt(2);
    if((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)){					
        document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
        el.innerHTML = "";
        ei = i;
        ej = j;
        var q = true;
        for(i = 0; i < 4; ++i){
            for(j = 0; j < 4; ++j){
                if(i + j != 6 && document.getElementById(i + " " + j).innerHTML != i*4 + j + 1){
                    q = false;
                    break;
                }
                if(q) alert("Victory!");
            }
        }
   }
}


/**
* Параметры используемые при начале новой игры
*@return void
*/
function newGame(){			
    var arr = [];
    for(i = 0; i &lt; 4; ++i){
        arr[i] = [];
        for(j = 0; j &lt; 4; ++j){
            if(i + j != 6){
                arr[i][j] = i * 4 + j + 1;
            } else {
                arr[i][j] = "";
            }
        }
    }
    ei = 3;//Запоминаем индексы элемента массива,
    ej = 3;// в котором записана пустая строка.
    for(i = 0; i < 1600; ++i){
        switch(Math.round(3*Math.random())){
            case 0:
                if(ei != 0){
                    swap(arr,ei,ej,--ei,ej);
                }
                break; 
            case 1:
                if(ej != 3){ 
                    swap(arr,ei,ej,ei,++ej);
                }
                break; 
            case 2:
                if(ei != 3){
                    swap(arr,ei,ej,++ei,ej);
                }
                break; 
            case 3: 
                if(ej != 0){
                    swap(arr,ei,ej,ei,--ej); 
                }
                break; 
         }
    }
    var table = document.createElement("table"); //Cоздаём таблицу	
    for(i = 0; i &lt; 4; ++i){
        var row = document.createElement("tr"); //Добавляем в неё строки
        for(j = 0; j &lt; 4; ++j){
            var cell = document.createElement("td");//Cоздаём ячейки
            cell.id = i + " " + j; // Привязываем к событию cell click
            cell.onclick = cellClick; //Записываем в ячейку соответсвующий эл-т массива
            cell.innerHTML = arr[i][j];
            row.appendChild(cell);// Добавляем ячейку в строку
        }
        table.appendChild(row);// Добавляем строку в итаблицу			
    }
    if(box.childNodes.length == 1){ //Проверка на состояние таблицы
        box.removeChild(box.firstChild); //Удаляем таблицу, если она есть	
        box.appendChild(table);// Запихиваем в box table</div>
    }
}
