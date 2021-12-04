document.addEventListener("DOMContentLoaded",
   function(event) {
       document.querySelector("button.navbar-toggler")
         .addEventListener("blur", function() {
            var screenWidth = window.innerWidth;
            if (screenWidth < 992) {
            document.querySelector("#navbarNav").classList.remove("show");  
         }
        });
   }   
);