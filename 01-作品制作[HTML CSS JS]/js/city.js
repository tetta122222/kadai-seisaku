function myFunction() {
    var input, filter, ul, li, a, i, txtValue,selected;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};



var input = document.getElementById("myInput");
function filterContent() {
  var user = document.getElementById("myDropdown").value;
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
  if(user=="A") {
      contentA.style.display="block";
      contentB.style.display="block";
      contentC.style.display="block";
  } else if (user=="B") {
      contentA.style.display="none";
      contentB.style.display="block";
      contentC.style.display="block";
  } else if (user=="C") {
      contentA.style.display="none";
      contentB.style.display="none";
      contentC.style.display="block";
  }
}


 function linkReload(value){
  if(value == 1){
    $(".search").attr('href','rakuten_api/index.html');
  }
  else{
    $(".search").attr('href','gurunabi_api/test.html');
  }
 }

 let qwawsef;
 let qwawsef1;
 

$('.option').on('click', function(value){
  qwawsef = $(this).children('input').val();
  qwawsef1 = $(this).children('input').attr('data-value');
  sessionStorage.setItem('value', qwawsef);
  sessionStorage.setItem('value1', qwawsef1);
  console.log(qwawsef);
  console.log(qwawsef1);
})


$("body").css('height',$(window).height());
 
 console.log(qwawsef);
 console.log(qwawsef1);

