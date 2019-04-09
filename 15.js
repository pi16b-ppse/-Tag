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
}
function swap(arr,i1,j1,i2,j2){				
		t = arr[i1][j1];
		arr[i1][j1] = arr[i2][j2];
		arr[i2][j2] = t;
}