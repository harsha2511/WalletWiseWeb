// Initialize GSAP animations for team members
const teamMembers = document.querySelectorAll(".team-member");

teamMembers.forEach((member, index) => {
    gsap.from(member, { opacity: 0, y: 20, duration: 1, delay: 0.2 * index });
});
