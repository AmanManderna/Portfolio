var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);

        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}
