// Mobile navigation bar function
var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.querySelector(".fa-bars");

    function openmenu(){
        sidemenu.style.right = "0";
        menuIcon.style.display = "none";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
        menuIcon.style.display = "block";
    }

// Send Form Function
const scriptURL = 'https://script.google.com/macros/s/AKfycbxwVognegUkv9y0CFAd74J_EuPg_njd9WdK3YuJhOa4L6-v6AvJsMGHEOCbLUS3PKys/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message has been sent successfully!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

// scrollToTopFunction
window.addEventListener("scroll", function() {
    var scrollButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 0) {
      scrollButton.classList.add("show"); // Add the "show" class to fade in the scroll button
    } else {
      scrollButton.classList.remove("show"); // Remove the "show" class to fade out the scroll button
    }
  });