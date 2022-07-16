function add() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var addit = parseInt(x) + parseInt(y);
    document.getElementById("screen1").innerHTML=addit;
  }

  function sub() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var subit = parseInt(x) - parseInt(y);
    document.getElementById("screen1").innerHTML=subit;
  }
  function div() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var divit = parseInt(x) / parseInt(y);
    document.getElementById("screen1").innerHTML=divit;
  }
  function mult() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var multit = parseInt(x) * parseInt(y);
    document.getElementById("screen1").innerHTML=multit;
  }