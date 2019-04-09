function newGame(){
var arr = [];
for(i = 0; i &lt; 4; ++i){
		arr[i] = [];
		for(j = 0; j &lt; 4; ++j){
			if(i + j != 6)
				arr[i][j] = i*4 + j + 1;
			else
				arr[i][j] = "";
		}
	}
	ei = 3;//Запоминаем индексы элемента массива,
	ej = 3;// в котором записана пустая строка.
for(i = 0; i &lt; 2012; ++i) 
	switch(Math.round(3*Math.random())){ // Случайным образом выбираем число от 0 до 3				
			case 0: if(ei != 0) swap(arr,ei,ej,--ei,ej); break; 
			case 1: if(ej != 3) swap(arr,ei,ej,ei, ++ej); break; 
			case 2: if(ei != 3) swap(arr,ei,ej,++ei,ej); break; 
			case 3: if(ej != 0) swap(arr,ei,ej,ei,--ej); 
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
if(box.childNodes.length == 1) //Проверка на состояние таблицы
box.removeChild(box.firstChild); //Удаляем таблицу, если она есть	
box.appendChild(table);// Запихиваем в box table</div>
}
function swap(arr,i1,j1,i2,j2){				
		t = arr[i1][j1];
		arr[i1][j1] = arr[i2][j2];
		arr[i2][j2] = t;
}

function cellClick(e){				
var el = e.srcElement || e.target;
	//получаем номер строки и столбца, на пересечении которых расположена ячейка. 
	var i = el.id.charAt(0),
	j = el.id.charAt(2);
	