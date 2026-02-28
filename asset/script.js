
// Scroll fade-in animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('show');
        }
    });
});

// Sign-in modal
function openSignin(){ document.getElementById("signin").style.display="flex"; }
function closeSignin(){ document.getElementById("signin").style.display="none"; }