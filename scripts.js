// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert on Donate button click (optional)
document.querySelectorAll('.btn-donate').forEach(btn => {
    btn.addEventListener('click', function(){
        console.log("Redirecting to PayPal donation page...");
    });
});
