document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("addSkillModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");
    const cancelBtn = document.getElementById("cancelBtn");
    const skillForm = document.getElementById("skillForm");
    const skillsContainer = document.querySelector(".skills-container");

    if (openModalBtn) {
        openModalBtn.onclick = function () {
            modal.style.display = "block";
        };
    }
    if (closeModalBtn) {
        closeModalBtn.onclick = function () {
            modal.style.display = "none";
        };
    }
    if (cancelBtn) {
        cancelBtn.onclick = function () {
            modal.style.display = "none";
        };
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Form submission handler
    if (skillForm) {
        skillForm.onsubmit = function (event) {
            event.preventDefault(); 
            const domain = document.getElementById("domain").value;
            const skills = [];
            for (let i = 1; i <= 3; i++) {
                const skill = document.getElementById(`skill${i}`).value;
                const proficiency = parseInt(document.getElementById(`proficiency${i}`).value) || 0;

                if (skill) {
                    skills.push({ name: skill, proficiency });
                }
            }
            const newSkillBox = document.createElement("div");
            newSkillBox.classList.add("skill-box");
            let skillTemplate = `<h3 style="font-size: 1.5rem;">${domain}</h3>`;
            skills.forEach(skillData => {
                skillTemplate += `<p style="margin-bottom: 10px;">${skillData.name} <span class="progress"><span style="width: ${skillData.proficiency}%"></span></span></p>`;
            });

            newSkillBox.innerHTML = skillTemplate;
            skillsContainer.appendChild(newSkillBox);
            modal.style.display = "none";
            skillForm.reset();
        };
    }
});

    // Initialize Owl Carousel
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 3, 
            loop: true,
            margin: 10,
            nav: true, 
            autoplay: true,
            autoplayTimeout: 3000, 
            autoplayHoverPause: true 
            
        });
    });
    

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".info-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Print data to console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
        alert("Your information has been submitted successfully!");
        form.reset();
    });
});
