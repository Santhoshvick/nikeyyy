/**
 * 
 */

 
 let val = document.getElementById("profile");

  function pro() {
      location.href = "signup.html";
  }
document.getElementById("cart1").addEventListener("click", function() {
  var div = document.getElementById("cart");
  if (div.style.display === "inline-block") {
    div.style.display = "none";
  } else {
    div.style.display = "inline-block"; 
    
    div.style.right = "0px"; 
    div.style.top = "117.5px"; 
  }

});



document.getElementById("close").addEventListener("click",function()
{
   var div1=document.getElementById("cart")
   div1.style.display="none"
})


let inc1 = 0;
let plus1 = document.getElementById("plus1");
let incre = document.querySelector("#one");
plus1.addEventListener("click", plusOne);
function plusOne() {
  inc1++;
  incre.textContent = inc1;
}
let min = document.getElementById("minus1");
min.addEventListener("click", min1);
function min1() {
  if (inc1 > 0) {
    inc1--;
    incre.textContent = inc1;
  }
}

let inc2 = 0;
let plus2 = document.getElementById("plus2");
let incre2 = document.querySelector("#two");
plus2.addEventListener("click", plusTwo);
function plusTwo() {
  inc2++;
  incre2.textContent = inc2;
}
let min2 = document.getElementById("minus2");
min2.addEventListener("click", minTwo);
function minTwo() {
  if (inc2 > 0) {
    inc2--;
    incre2.textContent = inc2;
  }
}

let inc3 = 0;
let plus3 = document.getElementById("plus3");
let incre3 = document.querySelector("#three");
plus3.addEventListener("click", plusThree);
function plusThree() {
  inc3++;
  incre3.textContent = inc3;
}
let min3 = document.getElementById("minus3");
min3.addEventListener("click", minThree);
function minThree() {
  if (inc3 > 0) {
    inc3--;
    incre3.textContent = inc3;
  }
}

let inc4 = 0;
let plus4 = document.getElementById("plus4");
let incre4 = document.querySelector("#four");
plus4.addEventListener("click", plusFour);
function plusFour() {
  inc4++;
  incre4.textContent = inc4;
}
let min4 = document.getElementById("minus4");
min4.addEventListener("click", minFour);
function minFour() {
  if (inc4 > 0) {
    inc4--;
    incre4.textContent = inc4;
  }
}

let inc5 = 0;
let plus5 = document.getElementById("plus5");
let incre5 = document.querySelector("#five");
plus5.addEventListener("click", plusFive);
function plusFive() {
  inc5++;
  incre5.textContent = inc5;
}
let min5 = document.getElementById("minus5");
min5.addEventListener("click", minFive);
function minFive() {
  if (inc5 > 0) {
    inc5--;
    incre5.textContent = inc5;
  }
}

let inc6 = 0;
let plus6 = document.getElementById("plus6");
let incre6 = document.querySelector("#six");
plus6.addEventListener("click", plusSix);
function plusSix() {
  inc6++;
  incre6.textContent = inc6;
}
let min6 = document.getElementById("minus6");
min6.addEventListener("click", minSix);
function minSix() {
  if (inc6 > 0) {
    inc6--;
    incre6.textContent = inc6;
  }
}

let inc7 = 0;
let plus7 = document.getElementById("plus7");
let incre7 = document.querySelector("#seven");
plus7.addEventListener("click", plusSeven);
function plusSeven() {
  inc7++;
  incre7.textContent = inc7;
}
let min7 = document.getElementById("minus7");
min7.addEventListener("click", minSeven);
function minSeven() {
  if (inc7 > 0) {
    inc7--;
    incre7.textContent = inc7;
  }
}

let inc8 = 0;
let plus8 = document.getElementById("plus8");
let incre8 = document.querySelector("#eight");
plus8.addEventListener("click", plusEight);
function plusEight() {
  inc8++;
  incre8.textContent = inc8;
}
let min8 = document.getElementById("minus8");
min8.addEventListener("click", minEight);
function minEight() {
  if (inc8 > 0) {
    inc8--;
    incre8.textContent = inc8;
  }
}

let inc9 = 0;
let plus9 = document.getElementById("plus9");
let incre9 = document.querySelector("#nine");
plus9.addEventListener("click", plusNine);
function plusNine() {
  inc9++;
  incre9.textContent = inc9;
}
let min9 = document.getElementById("minus9");
min9.addEventListener("click", minNine);
function minNine() {
  if (inc9 > 0) {
    inc9--;
    incre9.textContent = inc9;
  }
}

let inc10 = 0;
let plus10 = document.getElementById("plus10");
let incre10 = document.querySelector("#ten");
plus10.addEventListener("click", plusTen);
function plusTen() {
  inc10++;
  incre10.textContent = inc10;
}
let min10 = document.getElementById("minus10");
min10.addEventListener("click", minTen);
function minTen() {
  if (inc10 > 0) {
    inc10--;
    incre10.textContent = inc10;
  }
}

let inc11 = 0;
let plus11 = document.getElementById("plus11");
let incre11 = document.querySelector("#eleven");
plus11.addEventListener("click", plusEleven);
function plusEleven() {
  inc11++;
  incre11.textContent = inc11;
}
let min11 = document.getElementById("minus11");
min11.addEventListener("click", minEleven);
function minEleven() {
  if (inc11 > 0) {
    inc11--;
    incre11.textContent = inc11;
  }
}

let inc12 = 0;
let plus12 = document.getElementById("plus12");
let incre12 = document.querySelector("#twelve");
plus12.addEventListener("click", plusTwelve);
function plusTwelve() {
  inc12++;
  incre12.textContent = inc12;
}
let min12 = document.getElementById("minus12");
min12.addEventListener("click", minTwelve);
function minTwelve() {
  if (inc12 > 0) {
    inc12--;
    incre12.textContent = inc12;
  }
} 


function instagram()
{
  location.href="https://www.instagram.com/accounts/login/?hl=en"
}
function facebook()
{
  location.href="https://www.facebook.com"
}


function searchEngine()
{
    let searchbox=document.getElementById("search-box")
    if(searchbox.style.display=="none")
    {
      searchbox.style.display="inline"
    }
    else{
      searchbox.style.display="none"
    }
}



document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchitem');
  const suggestionsList = document.getElementById('suggestions');

  // Sample product data (replace with your actual data source)
  const products = [
      'Smartphone',
      'Headphones',
      'Keyboard',
      'Mouse',
      'Tablet',
      'Smartwatch',
      'Camera',
      'Printer',
      'Monitor',
      
  ];

  searchInput.addEventListener('input', function() {
      const searchText = searchInput.value.toLowerCase();
      suggestionsList.innerHTML = ''; // Clear previous suggestions

      if (searchText.length > 0) {
          const filteredProducts = products.filter(product =>
              product.toLowerCase().startsWith(searchText)
          );

          if (filteredProducts.length > 0) {
              filteredProducts.forEach(product => {
                  const listItem = document.createElement('li');
                  listItem.textContent = product;
                  listItem.addEventListener('click', function() {
                      searchInput.value = product;
                      suggestionsList.style.display = 'none';
                  });
                  suggestionsList.appendChild(listItem);
              });
              suggestionsList.style.display = 'block';
          } else {
              suggestionsList.style.display = 'none'; // Hide if no matches
          }
      } else {
          suggestionsList.style.display = 'none'; // Hide if search input is empty
      }
  });

  // Hide suggestions when clicking outside the search container
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.search-container')) {
          suggestionsList.style.display = 'none';
      }
  });
});

