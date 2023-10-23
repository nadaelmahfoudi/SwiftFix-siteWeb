// variables var, let , const
// var vs const // local scope and global scope
// syntax
// datatypes (primitive datatype non-primitive datatype)
// objects
// loops in js : forEach // for .. in // for .. of
// functions: anonymous func / simple function / arrow function (arg) => {}

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
})

function toggleSearch() {
    var input = document.getElementById("search-input");
    if (input.style.display === "none") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }}

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});