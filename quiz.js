var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");
var player1score=0;
var player2score=0;

window.localStorage.setItem("player1_score", player1score);
window.localStorage.setItem("player2_score", player2score);

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML= player1score ;
document.getElementById("player2_score").innerHTML= player2score ;

document.getElementById("player_que").innerHTML="QUESTION TURN - "+player1_name;
document.getElementById("player_ans").innerHTML="ANSWER TURN - "+player2_name;

function send(){
    num_1=document.getElementById("no_1").value;
    num_2=document.getElementById("no_2").value;
    console.log(num_1+"  X  "+num_2+ "  =");
        window.localStorage.setItem("number_1", num_1);
        window.localStorage.setItem("number_2", num_2);
        input="<br> Answer: <input type='text'id='input_check_box' >";
           butten_c="<br><br> <button class='btn btn-info'onclick='check()'>check</buttn>";
           row=no_1 + "x" + no_2 + input + butten_c;
            document.getElementById("output").innerHTML=row;
           document.getElementById("no_1").value="";
           document.getElementById("no_2").value="";
        }
   