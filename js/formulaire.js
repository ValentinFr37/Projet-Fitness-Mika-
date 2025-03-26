document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("bLZDDmKk9vEoRuRiE"); 

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

      
        const formData = {
            nom: this.nom.value,
            email: this.email.value,
            message: this.message.value,
        };

        // Envoi du mail avec EmailJS
        emailjs.send("service_pithkrr", "template_7snlfcs", formData) 
            .then(response => {
                alert("Votre message a bien été envoyé !");
                this.reset(); 
                console.log("bonjours")
            })
            .catch(error => {
                alert("Une erreur s'est produite, veuillez réessayer.");
                console.error("Erreur EmailJS :", error);
            });
    });
});

