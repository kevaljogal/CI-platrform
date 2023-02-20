function myFunction() {
    var x = document.getElementById("Toggel");
    if (x.style.display === "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";

    }
  }

// Get the elements with class="column"
var elements = document.getElementsByClassName("card");
var image = document.getElementsByClassName("card-head");
var cardbody = document.getElementsByClassName("card-body");
// var x1 = document.getElementsByClassName("vgrid");
// var y1 = document.getElementsByClassName("vlist");




// // List View
// function listView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "100%";
//     elements[i].style.display = "flex";
//     image[i].style.width = "30%";
//     cardbody[i].style.width="60%"
//   }

// }

// // Grid View
// function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "460px";
//     image[i].style.width = "100%";
//     cardbody[i].style.width="100%"
//     console.log("grid");
//   }
// }

function mygridView() {
  var gridview=document.getElementById("grid1")
  var listview=document.getElementById("list1")
  gridview.style.display = "block";
   listview.style.display = "none";
      }
      function mylistView() {
  var gridview=document.getElementById("grid1")
  var listview=document.getElementById("list1")
  gridview.style.display = "none";
   listview.style.display = "block";
      }