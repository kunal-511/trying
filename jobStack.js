// alert("Hello user! Welcome on JobStack you will find the best jobs for you");


document.getElementsByClassName("login")[0].addEventListener("click", function(){
    var yourName = prompt("Hello! user please enter your name");
     alert("Hi " + yourName + " you have successfully login in to the page ")

});


$("#more").click(function(){
    $(".hide").toggleClass("invisible");
    $(".content4").addClass("content1");
    
});
// var i = 0;
// while (i < 8) {
//   $("#link"[i]).click(function(){
//     $(".invise"[i]).toggleClass("wrap")
//   })
// }

$("#link2").click(function(){
  $(".invise2").toggleClass("wrap")
})
$("#link3").click(function(){
  $(".invise3").toggleClass("wrap")
})
$("#link4").click(function(){
  $(".invise4").toggleClass("wrap")
})
$("#link5").click(function(){
  $(".invise5").toggleClass("wrap")
})

$(".link").click(function(){
  $("#wrap").toggleClass("invisible")
})

$("#more-reviews").click(function(){
$(".hidden").toggleClass("invisible")
})

// $(".showLess").click(function(){
   
//     $(".jobsDescription").addClass(".in")
//     // $(".jobsDescription").removeClass(".content1")
//     $(".show-less").addClass(".in")
// })
document.getElementById("car").addEventListener("mouseover", function(){

})



var list1 =[]
var list2 =[]
var list3 =[]
var list4 =[]
var list5 =[]
var list6 =[]

var n = 1;
var x = 0;
function AddRow(){
  var AddRown = document.getElementById('show');
  var NewRow = AddRown.insertRow(n);


  list1[x] = document.getElementById("fname").value
  list2[x] = document.getElementById("title").value
  list3[x] = document.getElementById("requirements").value
  list4[x] = document.getElementById("Location").value
  list5[x] = document.getElementById("stipend").value
  list6[x] = document.getElementById("time").value

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];

  n++;
  x++;
   
}
