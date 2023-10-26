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

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone_number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const nameRegex = /^{a-zA-Z}/g;

    if (!nameRegex.test(name)) {
      document.getElementById('nameError').innerText = 'Enter a valid name';
    } else {
      document.getElementById('nameError').innerText = '';
    }

    const phoneRegex = /\+212\-+[6|7]+\d{8}/g;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').innerText = 'Enter a valid phone number';
    } else {
      document.getElementById('phoneError').innerText = '';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@gmail+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerText = 'Enter a valid email';
    } else {
      document.getElementById('emailError').innerText = '';
    }

     const messageRegex = /^[a-zA-Z0-9]{10,}$/;

     if(!messageRegex.test('message')){
      document.getElementById('messageError').innerText = 'Enter a valid message';
     }else{
      document.getElementById('messageError').innerText = '';
     }
  }



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//le testimonial Carousel

var slideIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("testimonial");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}    
      x[slideIndex-1].style.display = "block";  
      setTimeout(carousel, 2000); 
  }
//ouvrir le Modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
