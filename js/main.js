var button=document.querySelector(".button-search");

var form=document.querySelector(".offer-form");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
});

form.classList.remove("form-show");

button.addEventListener("click", function() {
    form.classList.toggle("form-show");
});
