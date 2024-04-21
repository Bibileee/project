function showPopup(type) {
        if (type==="Email"){
            alert("My Email is : BeeHappy@gmail.com");
        } else if (type==="Phone"){
            alert("My Phone is : 5879559685");
        } else if (type==="Address"){
            alert("My Address is : 123 Bakery Street, Cityville");
        }
    }
    function flipCard(card) {
    card.classList.toggle('card-flip');
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

var more = document.getElementById("more");
var moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener('click', ()=>{
  more.style.display='block';
  moreBtn.style.display='none';
})


    // JavaScript for accordion functionality
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }