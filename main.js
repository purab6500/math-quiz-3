function addUser(){
    var player1_name=document.getElementById("player1_name_input").value;
    var player2_name=document.getElementById("player2_name_input").value;
    window.localStorage.setItem("name1", player1_name);
    window.localStorage.setItem("name2", player2_name);
    window.location="quiz.html";
}