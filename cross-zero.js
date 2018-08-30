var table = document.getElementById("table");
var flag = true;
var kind_of_game = true;
var bot_winner = true;
var clear_td = document.getElementsByTagName("td");
var bot_win_flag = true;
var win_cod = ['012', '345', '678', '036', '147', '258', '048', '642'];
var rows = table.rows;
one.addEventListener('click', start_one_man);
two.addEventListener('click', start_two_man);

function start_one_man() {
    for (var i = 0; i < clear_td.length; i++) {
        clear_td[i].innerHTML = "";
    }
    kind_of_game = true;
    document.getElementById('turn').style.display = 'block';
    document.getElementById('kind_one').style.display = 'block';
    document.getElementById('kind_two').style.display = 'none';
    table.onclick = function (event) {
        var target = event.target;
        if (target.tagName != 'TD') return; //проверка, тыкнули ли мы на td
        if (target.innerHTML === "") {
            target.innerHTML = "x";
            check();
            var chech_winner = check();
            if (chech_winner) {
                return;
            } else {
                bot_go();
                check();
                return;
            }

        }
    }
}

function start_two_man() {
    for (var i = 0; i < clear_td.length; i++) {
        clear_td[i].innerHTML = "";
    }
    kind_of_game = false;
    document.getElementById('turn').style.display = 'none';
    document.getElementById('kind_two').style.display = 'block';
    document.getElementById('kind_one').style.display = 'none';
    table.onclick = function (event) {
        var target = event.target;
        if (target.tagName != 'TD') return;
        if (target.innerHTML === "") {
            if (flag) {
                target.innerHTML = "x";
                flag = false;
                check();
                return;
            }

            if (!flag) {
                target.innerHTML = "o";
                flag = true;
                check();
                return;
            }
        } else return;
    }
}

function clear() {

    for (var i = 0; i < clear_td.length; i++) {
        clear_td[i].innerHTML = "";
    }
    for (var j = 0; j <= 7; j++) {
        document.getElementById('win' + j).style.display = "none";
    }
    document.getElementById('rezult').innerHTML = "";
    document.getElementById('turn').style.display = "none";

    if (kind_of_game) {
        start_one_man();
        document.getElementById('kind_one').style.display = "block";
        document.getElementById('kind_two').style.display = "none";
    } else if (!kind_of_game) {
        start_two_man();
        document.getElementById('kind_two').style.display = "block";
        document.getElementById('kind_one').style.display = "none";
    }
    flag = true;
}

function step_num() {
    let arr = new Array();
    let step = 0;
    for (var r = 0, n = rows.length; r < n; r++) {
        for (var c = 0, m = rows[r].cells.length; c < m; c++) {
            arr.push(rows[r].cells[c].innerText);
            if (rows[r].cells[c].innerText == '') {
                step++;
            }
        }
    }
    return step;
}

function get_random() {
    var rand = 0 + Math.random() * (2 + 1 - 0);
    rand = Math.floor(rand);
    var rand2 = 0 + Math.random() * (2 + 1 - 0);
    rand2 = Math.floor(rand2);
    if (rows[rand].cells[rand2].innerText == '') {
        rows[rand].cells[rand2].innerText = 'o';
        return;
    } else {
        get_random();
    }
}


function bot_win() {
    for (var j = 0; j <= 2; j++) {
        if (rows[j].cells[0].innerText == 'o' && rows[j].cells[1].innerText == 'o' || rows[j].cells[1].innerText == 'o' && rows[j].cells[2].innerText == 'o' || rows[j].cells[0].innerText == 'o' && rows[j].cells[2].innerText == 'o' || rows[0].cells[j].innerText == 'o' && rows[1].cells[j].innerText == 'o' || rows[1].cells[j].innerText == 'o' && rows[2].cells[j].innerText == 'o' || rows[0].cells[j].innerText == 'o' && rows[2].cells[j].innerText == 'o' || rows[0].cells[0].innerText == 'o' && rows[1].cells[1].innerText == 'o' || rows[1].cells[1].innerText == 'o' && rows[2].cells[2].innerText == 'o' || rows[0].cells[0].innerText == 'o' && rows[2].cells[2].innerText == 'o' || rows[0].cells[2].innerText == 'o' && rows[1].cells[1].innerText == 'o' || rows[1].cells[1].innerText == 'o' && rows[2].cells[0].innerText == 'o' || rows[0].cells[2].innerText == 'o' && rows[2].cells[0].innerText == 'o') {
            if (rows[j].cells[0].innerText == 'o' && rows[j].cells[1].innerText == 'o' && rows[j].cells[2].innerText != 'x') {
                rows[j].cells[2].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[j].cells[1].innerText == 'o' && rows[j].cells[2].innerText == 'o' && rows[j].cells[0].innerText != 'x') {
                rows[j].cells[0].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[j].cells[0].innerText == 'o' && rows[j].cells[2].innerText == 'o' && rows[j].cells[1].innerText != 'x') {
                rows[j].cells[1].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[j].innerText == 'o' && rows[1].cells[j].innerText == 'o' && rows[2].cells[j].innerText != 'x') {
                rows[2].cells[j].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[1].cells[j].innerText == 'o' && rows[2].cells[j].innerText == 'o' && rows[0].cells[j].innerText != 'x') {
                rows[0].cells[j].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[j].innerText == 'o' && rows[2].cells[j].innerText == 'o' && rows[1].cells[j].innerText != 'x') {
                rows[1].cells[j].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[0].innerText == 'o' && rows[1].cells[1].innerText == 'o' && rows[2].cells[2].innerText != 'x') {
                rows[2].cells[2].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[1].cells[1].innerText == 'o' && rows[2].cells[2].innerText == 'o' && rows[0].cells[0].innerText != 'x') {
                rows[0].cells[0].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[0].innerText == 'o' && rows[2].cells[2].innerText == 'o' && rows[1].cells[1].innerText != 'x') {
                rows[1].cells[1].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[2].innerText == 'o' && rows[1].cells[1].innerText == 'o' && rows[2].cells[0].innerText != 'x') {
                rows[2].cells[0].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[0].cells[2].innerText == 'o' && rows[2].cells[0].innerText == 'o' && rows[1].cells[1].innerText != 'x') {
                rows[1].cells[1].innerText = 'o';
                check();
                bot_winner = false;
                return;
            } else if (rows[2].cells[0].innerText == 'o' && rows[1].cells[1].innerText == 'o' && rows[0].cells[2].innerText != 'x') {
                rows[0].cells[2].innerText = 'o';
                check();
                bot_winner = false;
                return;
            }
        } else {
            bot_win_flag = false;
            bot_winner = true;
        }
    }

}

function bot_go() {
    var step = step_num();
    if (step == 8) {
        get_random();
    } else if (step > 1) {
        bot_win();
        if (bot_winner == true) {
            if (!bot_win_flag) {
                for (var j = 0; j <= 2; j++) {
                    if (rows[j].cells[0].innerText == 'x' && rows[j].cells[1].innerText == 'x' || rows[j].cells[1].innerText == 'x' && rows[j].cells[2].innerText == 'x' || rows[j].cells[0].innerText == 'x' && rows[j].cells[2].innerText == 'x' || rows[0].cells[j].innerText == 'x' && rows[1].cells[j].innerText == 'x' || rows[1].cells[j].innerText == 'x' && rows[2].cells[j].innerText == 'x' || rows[0].cells[j].innerText == 'x' && rows[2].cells[j].innerText == 'x' || rows[0].cells[0].innerText == 'x' && rows[1].cells[1].innerText == 'x' || rows[1].cells[1].innerText == 'x' && rows[2].cells[2].innerText == 'x' || rows[0].cells[0].innerText == 'x' && rows[2].cells[2].innerText == 'x' || rows[0].cells[2].innerText == 'x' && rows[1].cells[1].innerText == 'x' || rows[1].cells[1].innerText == 'x' && rows[2].cells[0].innerText == 'x' || rows[0].cells[2].innerText == 'x' && rows[2].cells[0].innerText == 'x') {
                        if (rows[j].cells[0].innerText == 'x' && rows[j].cells[1].innerText == 'x' && rows[j].cells[2].innerText != 'o') {
                            rows[j].cells[2].innerText = 'o';
                            return;
                        } else if (rows[j].cells[1].innerText == 'x' && rows[j].cells[2].innerText == 'x' && rows[j].cells[0].innerText != 'o') {
                            rows[j].cells[0].innerText = 'o';
                            return;
                        } else if (rows[j].cells[0].innerText == 'x' && rows[j].cells[2].innerText == 'x' && rows[j].cells[1].innerText != 'o') {
                            rows[j].cells[1].innerText = 'o';
                            return;
                        } else if (rows[0].cells[j].innerText == 'x' && rows[1].cells[j].innerText == 'x' && rows[2].cells[j].innerText != 'o') {
                            rows[2].cells[j].innerText = 'o';
                            return;
                        } else if (rows[1].cells[j].innerText == 'x' && rows[2].cells[j].innerText == 'x' && rows[0].cells[j].innerText != 'o') {
                            rows[0].cells[j].innerText = 'o';
                            return;
                        } else if (rows[0].cells[j].innerText == 'x' && rows[2].cells[j].innerText == 'x' && rows[1].cells[j].innerText != 'o') {
                            rows[1].cells[j].innerText = 'o';
                            return;
                        } else if (rows[0].cells[0].innerText == 'x' && rows[1].cells[1].innerText == 'x' && rows[2].cells[2].innerText != 'o') {
                            rows[2].cells[2].innerText = 'o';
                            return;
                        } else if (rows[1].cells[1].innerText == 'x' && rows[2].cells[2].innerText == 'x' && rows[0].cells[0].innerText != 'o') {
                            rows[0].cells[0].innerText = 'o';
                            return;
                        } else if (rows[0].cells[0].innerText == 'x' && rows[2].cells[2].innerText == 'x' && rows[1].cells[1].innerText != 'o') {
                            rows[1].cells[1].innerText = 'o';
                            return;
                        } else if (rows[0].cells[2].innerText == 'x' && rows[1].cells[1].innerText == 'x' && rows[2].cells[0].innerText != 'o') {
                            rows[2].cells[0].innerText = 'o';
                            return;
                        } else if (rows[0].cells[2].innerText == 'x' && rows[2].cells[0].innerText == 'x' && rows[1].cells[1].innerText != 'o') {
                            rows[1].cells[1].innerText = 'o';
                            return;
                        } else if (rows[2].cells[0].innerText == 'x' && rows[1].cells[1].innerText == 'x' && rows[0].cells[2].innerText != 'o') {
                            rows[0].cells[2].innerText = 'o';
                            return;
                        }
                    }
                }
                get_random();
                return;

            } else return;

        }
    } else if (step == 0) {
        document.getElementById('rezult').style = "margin-left: 190px;";
        document.getElementById('rezult').innerHTML = "Ничья :)";
    }
}

function check() {
    let winner = "Победили ";
    let arr = new Array();

    for (var r = 0, n = rows.length; r < n; r++) {

        for (var c = 0, m = rows[r].cells.length; c < m; c++) {
            arr.push(rows[r].cells[c].innerText);
        }
    }
    for (var i = 0; i < win_cod.length; i++) {
        if (arr[win_cod[i].charAt(0)] === arr[win_cod[i].charAt(1)] && arr[win_cod[i].charAt(1)] === arr[win_cod[i].charAt(2)] && arr[win_cod[i].charAt(0)] != '') {
            document.getElementById('rezult').innerText = winner + " " + arr[win_cod[i].charAt(0)];
            document.getElementById('win' + i).style.display = "block";
            table.onclick = function () {
                return false;
            };
            return true;
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

btn.addEventListener('click', clear);
