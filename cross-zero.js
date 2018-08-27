var table = document.getElementById("table");
var flag = true;

function start() {
    table.onclick = function (event) {
        var target = event.target;
        if (target.tagName != 'TD') return; //проверка, тыкнули ли мы на td
        if (target.innerHTML === "") {
            if (flag) {
                target.style = "color: #3b00ff";
                target.innerHTML = "x";
                flag = false;
                check();
                return;
            }

            if (!flag) {
                target.style = "color: red";
                target.innerHTML = "o";
                flag = true;
                check();
                return;
            }
        } else return;
    }
}

var clear_td = document.getElementsByTagName("td");

function clear() {

    for (var i = 0; i < clear_td.length; i++) {
        clear_td[i].innerHTML = "";
    }
    for (var j = 0; j <= 7; j++) {
        document.getElementById('win' + j).style.display = "none";
    }
    document.getElementById('rezult').innerHTML = "";
    start();
    flag = true;
}

var win_cod = ['012', '345', '678', '036', '148', '258', '048', '642'];

function check() {
    let winner = "Победили ";
    var arr = new Array();

    for (var r = 0, n = table.rows.length; r < n; r++) {

        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            arr.push(table.rows[r].cells[c].innerText);
        }
    }
    for (var i = 0; i < win_cod.length; i++) {
        if (arr[win_cod[i].charAt(0)] === arr[win_cod[i].charAt(1)] && arr[win_cod[i].charAt(1)] === arr[win_cod[i].charAt(2)] && arr[win_cod[i].charAt(0)] != '') {
            document.getElementById('rezult').innerText = winner + " " + arr[win_cod[i].charAt(0)];
            document.getElementById('win' + i).style.display = "block";
            table.onclick = function () {
                return false;
            };
            break;
        } else {
            var counter = 0;
            for (var j = 0; j < clear_td.length; j++) {
                if (clear_td[j].textContent != "") {
                    counter++;
                    if (counter === 9) {
                        document.getElementById('rezult').style = "margin-left: 190px;";
                        document.getElementById('rezult').innerHTML = "Ничья :)";
                    }
                }
            }
        }
    }
}


window.addEventListener('DOMContentLoaded', start);
btn.addEventListener('click', clear);
