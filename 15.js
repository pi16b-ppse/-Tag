/**
* ��������� ������������ ��� ������ ����� ����
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
    ei = 3;//���������� ������� �������� �������,
    ej = 3;// � ������� �������� ������ ������.
    for(i = 0; i &lt; 2012; ++i){ 
        switch(Math.round(3*Math.random())){ // ��������� ������� �������� ����� �� 0 �� 3				
	    case 0:
	        if(ei != 0){
		    swap(arr,ei,ej,--ei,ej);
		}
		break; 
	    case 1:
		if(ej != 3){ 
		    swap(arr,ei,ej,ei, ++ej);
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
	}
    }
    var table = document.createElement("table"); //C����� �������	
    for(i = 0; i &lt; 4; ++i){
        var row = document.createElement("tr"); //��������� � �� ������
	      for(j = 0; j &lt; 4; ++j){
	          var cell = document.createElement("td");//C����� ������
	          cell.id = i + " " + j; // ����������� � ������� cell click
	          cell.onclick = cellClick; //���������� � ������ �������������� ��-� �������
	          cell.innerHTML = arr[i][j];
	          row.appendChild(cell);// ��������� ������ � ������
	      }
	      table.appendChild(row);// ��������� ������ � ��������			
    }
    if(box.childNodes.length == 1){ //�������� �� ��������� �������
        box.removeChild(box.firstChild); //������� �������, ���� ��� ����	
        box.appendChild(table);// ���������� � box table</div>
    }
}

*@description ������� ����������, ������������ ��� ������ ����� ����
*/	    
var arr = [], box, ei,ej;

/**
* ������� �������� ������� ��� �������� ������� � ��������� ���������.
*@param {object} arr - ������ �����
*@param {object} i1 - ������� �������
*@param {object} j1 - ������� �������
*@param {object} i2 - ������� �������
*@param {object} j2 - ������� �������
*/						
function swap(arr,i1,j1,i2,j2){				
    t = arr[i1][j1];
	  arr[i1][j1] = arr[i2][j2];
	  arr[i2][j2] = t;
}

/**
*������� �������� ��������� �������� ����
*/
window.onload = function() {				
    box = document.getElementById("box");
	  newGame();				
    document.getElementById("reset").onclick = newGame;						
}

/**
* ������� ��� ��������� ������� �� ��������
*@param {var} event - ������
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