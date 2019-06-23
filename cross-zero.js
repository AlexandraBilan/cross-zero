var table = document.getElementById("table");
var all_td = document.getElementsByTagName("td");
var win_code = ['012', '345', '678', '036', '147', '258', '048', '642'];


function Player(symbol){
    this.symbol = symbol;
    this.move= '';
    this.type_player= '';
}

function Turn(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    let current_player = '';
    this.next = function() {
        if(current_player == '' || current_player == this.player2)
        {
            current_player = this.player1;
        }
        else if(current_player == this.player1){
            current_player = this.player2;
        }
        return current_player;
    }
}

var player1 = new Player('x');
var player2 = new Player('o');
var turn = new Turn(player1, player2);

function initialization(){
    let bot = document.getElementById('bot').checked;
    player1.move = human_move;
    player1.type_player = 'human';
    if(bot){
        player2.move = bot_move;
        player2.type_player = 'bot';
    }
    else{
        player2.move = human_move;
        player2.type_player = 'human';
    }
    clear(all_td);
}
var human_move = function (event){
    let target = event.target;
    target.innerHTML = this.symbol;
}

var bot_move = function (event){
    let move = possibility_win(player2.symbol);
    if(move){
        all_td[move].innerText = player2.symbol;
    }else{
        let check_human_win = possibility_win(player1.symbol);
        if(check_human_win){
            all_td[check_human_win].innerText = player2.symbol;
        }
        else{
        get_random();
        }
    }
}

table.onclick = function(){
    let target = event.target;
    if (target.tagName != 'TD') return;
    if (target.innerHTML === "") {
        if(player2.type_player == 'human'){
            turn.next().move(event);
            check_win();
        }else{
            player1.move(event);
            check_win();
            if(!check_win() && player2.type_player != 'human'){
                player2.move(event);
                check_win();
            }
        }

    }
};

function clear(clear_object){
    let count = clear_object.length;
    for(var i=0; i< count; i++)
        {
          clear_object[i].innerHTML = '';
        }
    for (var j = 0; j <= 7; j++) {
        document.getElementById('win' + j).style.display = "none";
    }
    document.getElementById('rezult').innerHTML = "";
    table.style.pointerEvents = 'auto';
}

function check_win_code(array, position1, position2, return_position, symbol){
   for (var i = 0; i < win_code.length; i++) {
        if (array[win_code[i].charAt(position1)] === array[win_code[i].charAt(position2)] && array[win_code[i].charAt(position1)] === symbol && array[win_code[i].charAt(return_position)] === ''){
            return win_code[i].charAt(return_position);
           }
    }
     return false;
}

function possibility_win(symbol){
     let array_all_symbol = get_all_symbol();
        let first_combination = check_win_code(array_all_symbol, 0, 1, 2, symbol);
        if(first_combination){
            return first_combination;
        }
        let second_combination = check_win_code(array_all_symbol, 0, 2, 1, symbol);
        if(second_combination){
            return second_combination;
        }        
        let third_combination = check_win_code(array_all_symbol, 1, 2, 0, symbol);
        if(third_combination){
            return third_combination;
        }
         return false;
}

function get_random() {
    let rand = Math.round((Math.random() * (8 - 1) + 1));
    if (all_td[rand].innerText == '') {
        all_td[rand].innerText = player2.symbol;
        return;
    } else {
        get_random();
    }
}

function get_all_symbol(){
    let array_all_symbol = [];
    let count = all_td.length;
    for (var i = 0; i < count; i++) {
        array_all_symbol.push(all_td[i].innerText);
    }
    return array_all_symbol;
}

function check_win() {
    let winner = "Победили ";
    let arr = get_all_symbol();
    let count = win_code.length;
    for (var i = 0; i < count; i++) {
        if (arr[win_code[i].charAt(0)] === arr[win_code[i].charAt(1)] && arr[win_code[i].charAt(1)] === arr[win_code[i].charAt(2)] && arr[win_code[i].charAt(0)] != '') {
            document.getElementById('rezult').innerText = winner + " " + arr[win_code[i].charAt(0)];
            document.getElementById('win' + i).style.display = "block";
            table.style.pointerEvents = 'none';
            return true;
        } else {
            var counter = 0;
            for (var j = 0; j < all_td.length; j++) {
                if (all_td[j].textContent != "") {
                    counter++;
                    if (counter === 9) {
                        document.getElementById('rezult').style = "margin-left: 190px;";
                        document.getElementById('rezult').innerHTML = "Ничья :)";
                        return true;
                    }
                }
            }
        }
    }
}
document.addEventListener("DOMContentLoaded",  initialization());
bot.addEventListener('click',  function() {initialization()}, false);
btn.addEventListener('click',  function() {clear(all_td)}, false);