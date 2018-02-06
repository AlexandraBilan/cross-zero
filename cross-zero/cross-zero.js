var table = document.getElementById("table");
var flag = true;
//table.rows[1].cells[1].style.background = '#ddd';


var rows = table.rows;
//for (var i = 0; i < rows.length; i++) {
//	rows[i].cells[i++].style.background = '#ddd';
//};



table.onclick = function(event)
{
    var target = event.target;
    if (target.tagName != 'TD') return; //проверка, тыкнули ли мы на td
    if(target.innerHTML === "")
    {
            if(flag)
        {
            target.innerHTML = "x";
            flag = false;
            check();
            return;
        }

    if(!flag)
        {
            target.innerHTML = "o";
            flag = true;
            check();
            return;
        }
    }
    else return;
}



var clear_td = document.getElementsByTagName("td");
function clear()
{
   
    for(var i=0; i<clear_td.length; i++)
    {
        clear_td[i].innerHTML="";
    
     }
    document.getElementById('rezult').innerHTML = "";
    flag = true;
}


function check()
{
 
       if(rows[0].cells[0].textContent === rows[0].cells[1].textContent && rows[0].cells[1].textContent === rows[0].cells[2].textContent && rows[0].cells[0].textContent != "")
                {
                    document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[0].textContent;
                    return;
                }
       else if(rows[1].cells[0].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[1].cells[2].textContent && rows[1].cells[0].textContent != "")
                {
                    document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[1].cells[0].textContent;
                    return;
                }    
      else if(rows[2].cells[0].textContent === rows[2].cells[1].textContent && rows[2].cells[1].textContent === rows[2].cells[2].textContent && rows[2].cells[0].textContent != "")
                {
                   document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[2].cells[0].textContent;
                    return;
                } 
     else if(rows[0].cells[0].textContent === rows[1].cells[0].textContent && rows[1].cells[0].textContent === rows[2].cells[0].textContent && rows[0].cells[0].textContent != "")
                {
                   document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[0].textContent;
                    return;
                } 
      else if(rows[0].cells[1].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[1].textContent && rows[0].cells[1].textContent != "")
                {
                    document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[1].textContent;
                    return;
                } 
      else if(rows[0].cells[2].textContent === rows[1].cells[2].textContent && rows[1].cells[2].textContent === rows[2].cells[2].textContent && rows[0].cells[2].textContent != "")
                {
                  document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[2].textContent;
                    return;
                } 
      else if(rows[0].cells[0].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[2].textContent && rows[0].cells[0].textContent != "")
                {
                    document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[0].textContent;
                    return;
                } 
      else if(rows[0].cells[2].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[0].textContent && rows[0].cells[2].textContent != "")
                {
                    document.getElementById('rezult').innerHTML = "Победил человек, играющий за " + " " +rows[0].cells[2].textContent;
                    return;
                } 
    
    else 
    { 
    clear_td.forEach(function(item)
    {
       if( item.textContent != "")
           {
               
           }
    });
        
    }
        
    return;
   
  
}

btn.addEventListener('click', clear);