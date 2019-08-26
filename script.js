//    ------------------------   Fonctionalité 1   --------------------------------------------------------

var p = document.querySelector('footer');
var x = 1

p.addEventListener('click',function(){
	console.log("clique" + x++)
});


//    --------------------------  Fonctionalité 2  -------------------------------------------------------

var navbar = document.getElementsByClassName('navbar-toggler')[0];
var nav = document.getElementById('navbarHeader');

navbar.addEventListener('click',function(){
    nav.classList.toggle('collapse');
});


//    --------------------------  Fonctionalité 3   ----------------------------------------------------

var text = document.getElementsByClassName("card-text")[0];
var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

function colorRed() 
{
    text.style.color = "red";
}

edit.addEventListener("click", colorRed);


//  --------------------------    Fonctionalité 4   -------------------------------------------------------

var text2 = document.getElementsByClassName("card-text")[1];
var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

function Green(){
	if (text2.style.color === "green")
    {
        text2.style.color = "";
    }
    else
    {
        text2.style.color = "green";
    }
}

edit2.addEventListener("click", Green);

//   ----------------------------  Fonctionalité 5   ---------------------------------------------------

var a = document.getElementById("navbarHeader")[0];
var b = document.getElementsByTagName('link')[0];

addEventListener('dblclick', function(){
	b.disabled = true;
});

// -----------------------------   Fonctionalité 6   -------------------------------------------------

var card = document.getElementsByClassName("card");
var btn_view = document.getElementsByClassName("btn-success");


for(let i = 0; i < card.length; i++)
{
    function view()
    {
        if (card[i].getElementsByClassName("card-text")[0].style.display != "none")
        {
            card[i].getElementsByClassName("card-text")[0].style.display = "none";
            card[i].getElementsByClassName("card-img-top")[0].style.width = "20%";
        }
        else
        {
            card[i].getElementsByClassName("card-text")[0].style.display = "block";
            card[i].getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
    }

    btn_view[i].addEventListener("mouseover", view);

}


// ---------------------------------   Fonctionalité 7   ----------------------------------------------------

function move(){
	var right = document.getElementsByClassName("btn btn-secondary my-2")[0];
	var ButtonGrey = function(){
		var parent = document.getElementsByClassName("row")[1];
		parent.insertBefore(parent.lastChild, parent.childNodes[0]);
	}
	right.addEventListener("click",ButtonGrey);
};
move();

// --------------------------------   Fonctionalité 8  -------------------------------------------------------

function reverse(){
	var left = document.getElementsByClassName("btn btn-primary my-2")[0];
	var clicButtonGrey = function(i){
		var parent = document.getElementsByClassName("row")[1];
		parent.insertBefore(parent.firstChild, parent.lastChild.nextSibling);
		i.preventDefault();
	}
	left.addEventListener("click",clicButtonGrey);
}
reverse();

// ------------------------------   Fonctionalité 9 ---------------------------------------------------------