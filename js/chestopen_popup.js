

$("a[href='#popup']").on("click", openPopUp);
$("#popup").on("click", closePopUp);

function i()
{
  alert("afa");
}

function openPopUp()
{
  $("#popup").css({"display": "block",
                   "opacity": 1});
}

function closePopUp()
{
  $("#popup").css({"display": "none",
                   "opacity": 0});
}

