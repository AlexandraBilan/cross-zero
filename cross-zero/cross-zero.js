var table = document.getElementById("table");
var flag = true;
var rows = table.rows;
function start(){
table.onclick = function(event)
{
    var target = event.target;
    if (target.tagName != 'TD') return; //проверка, тыкнули ли мы на td
    if(target.innerHTML === "")
    {
            if(flag)
        {
            target.style = "color: #3b00ff";
            target.innerHTML = "x";
            flag = false;
            check();
            return;
        }

    if(!flag)
        {
            target.style = "color: red";
            target.innerHTML = "o";
            flag = true;
            check();
            return;
        }
    }
    else return;
}
}
var clear_td = document.getElementsByTagName("td");
function clear()
{
   
    for(var i=0; i<clear_td.length; i++)
    {
      clear_td[i].innerHTML="";
     }
    document.getElementById('rezult').innerHTML = "";
    document.getElementById('win1').style.display = "none";
    document.getElementById('win2').style.display = "none";
    start();
    flag = true;
}


function check()
{
    let winner = "Победили ";
       if(rows[0].cells[0].textContent === rows[0].cells[1].textContent && rows[0].cells[1].textContent === rows[0].cells[2].textContent && rows[0].cells[0].textContent != "")
                {
                    document.getElementById('win2').style = "display: block; left: 125px; top: 95px;";
                    document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[0].textContent;
                    table.onclick=function (){return false};
                    return;
                }
       else if(rows[1].cells[0].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[1].cells[2].textContent && rows[1].cells[0].textContent != "")
                {
                   document.getElementById('win2').style = "display: block; left: 125px; top: 155px;";
                    document.getElementById('rezult').innerHTML = winner + " " +rows[1].cells[0].textContent;
                    table.onclick=function (){return false};
                    return;
                }    
      else if(rows[2].cells[0].textContent === rows[2].cells[1].textContent && rows[2].cells[1].textContent === rows[2].cells[2].textContent && rows[2].cells[0].textContent != "")
                {
                   document.getElementById('win2').style = "display: block; left: 125px; top: 215px;";
                   document.getElementById('rezult').innerHTML = winner + " " +rows[2].cells[0].textContent;
                    table.onclick=function (){return false};
                   return;
                } 
     else if(rows[0].cells[0].textContent === rows[1].cells[0].textContent && rows[1].cells[0].textContent === rows[2].cells[0].textContent && rows[0].cells[0].textContent != "")
                {
                   document.getElementById('win2').style = "display: block; transform: rotate(90deg); top: 140px; left: 76px;"; 
                   document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[0].textContent;
                    table.onclick=function (){return false};
                    return;
                } 
      else if(rows[0].cells[1].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[1].textContent && rows[0].cells[1].textContent != "")
                {
                     document.getElementById('win2').style = "display: block; transform: rotate(90deg); top: 140px; left: 130px;"; 
                    document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[1].textContent;
                    table.onclick=function (){return false};
                    return;
                } 
      else if(rows[0].cells[2].textContent === rows[1].cells[2].textContent && rows[1].cells[2].textContent === rows[2].cells[2].textContent && rows[0].cells[2].textContent != "")
                {
                    document.getElementById('win2').style = "display: block; transform: rotate(90deg); top: 140px; left: 190px;"; 
                  document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[2].textContent;
                    table.onclick=function (){return false};
                    return;
                } 
      else if(rows[0].cells[0].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[2].textContent && rows[0].cells[0].textContent != "")
                {
                     document.getElementById('win1').style = "display: block;  transform: rotate(45deg); left: 105px; top: 155px" 
                    document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[0].textContent;
                    table.onclick=function (){return false};
                    return;
                } 
      else if(rows[0].cells[2].textContent === rows[1].cells[1].textContent && rows[1].cells[1].textContent === rows[2].cells[0].textContent && rows[0].cells[2].textContent != "")
                {
                    document.getElementById('win1').style = "display: block;  transform: rotate(132deg); left: 95px; top: 155px;"; 
                    document.getElementById('rezult').innerHTML = winner + " " +rows[0].cells[2].textContent;
                    table.onclick=function (){return false};
                    return;
                } 
    else
        {
    var counter = 0;
    for (var i = 0; i < clear_td.length; i++) {
        if (clear_td[i].textContent != "") 
        {
            counter++;
            if (counter === 9) {
                document.getElementById('rezult').style = " margin-left: 190px;";
                document.getElementById('rezult').innerHTML = "Ничья :)";
            }
        }
    }
    }

}
window.addEventListener('DOMContentLoaded', start);
btn.addEventListener('click', clear);