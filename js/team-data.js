/* ==========================================================================
   TEAM MEMBER DATA
   Edit this array to update the Team Members page — add, remove, or change
   any member without touching the HTML. Each entry:
   { name: "Full Name", role: "Position", photo: "path/to/photo.jpg" }
   Leave photo as "" (empty string) to show the default avatar automatically.
   ========================================================================== */

const TEAM_MEMBERS = [
  { name: "Marwan Said Mostafa",     role: "Team leader / R&D ",  photo: "" },
  { name: "Sara Khaled",       role: "Electronics Engineer",        photo: "" },
  { name: "Omar Youssef",      role: "Embedded Systems Engineer",   photo: "" },
  { name: "Mariam Hassan",     role: "Software Engineer",           photo: "" },
  { name: "Youssef Adel",      role: "Control Systems Engineer",    photo: "" },
  { name: "Nourhan Tarek",     role: "Computer Vision Engineer",    photo: "" },
  { name: "Karim Fathy",       role: "Mechanical Design Engineer",  photo: "" },
  { name: "Aya Mostafa",       role: "PCB Design Engineer",         photo: "" },
  { name: "Mohamed Sameh",     role: "Firmware Engineer",           photo: "" },
  { name: "Hana Ibrahim",      role: "UI / UX Designer",            photo: "" },
  { name: "Ali Mahmoud",       role: "Hydraulics Engineer",         photo: "" },
  { name: "Salma Ahmed",       role: "Software Engineer",           photo: "" },
  { name: "Amr Nabil",         role: "Power Systems Engineer",      photo: "" },
  { name: "Rana Sherif",       role: "Sensors & Instrumentation",   photo: "" },
  { name: "Hossam Ezzat",      role: "Mechanical Design Engineer",  photo: "" },
  { name: "Yasmin Gamal",      role: "Communications Engineer",     photo: "" },
  { name: "Mostafa Reda",      role: "Structural Engineer",         photo: "" },
  { name: "Dina Wael",         role: "Data Analyst",                photo: "" },
  { name: "Tarek Anwar",       role: "Control Systems Engineer",    photo: "" },
  { name: "Nada Samir",        role: "Software Engineer",           photo: "" },
  { name: "Islam Fawzy",       role: "Electronics Engineer",        photo: "" },
  { name: "Farida Osman",      role: "Computer Vision Engineer",    photo: "" },
  { name: "Khaled Ashraf",     role: "Mechanical Design Engineer",  photo: "" },
  { name: "Malak Hesham",      role: "Embedded Systems Engineer",   photo: "" },
  { name: "Adham Magdy",       role: "Firmware Engineer",           photo: "" },
  { name: "Jana Emad",         role: "UI / UX Designer",            photo: "" },
  { name: "Bassel Kamal",      role: "Power Systems Engineer",      photo: "" },
  { name: "Menna Alaa",        role: "Software Engineer",           photo: "" },
  { name: "Ziad Ramadan",      role: "Hydraulics Engineer",         photo: "" },
  { name: "Lina Sobhy",        role: "Data Analyst",                photo: "" },
  { name: "Seif Eldin",        role: "Structural Engineer",         photo: "" },
  { name: "Nourhan Salah",     role: "Sensors & Instrumentation",   photo: "" },
  { name: "Hazem Talaat",      role: "Communications Engineer",     photo: "" },
  { name: "Rawan Fahmy",       role: "Software Engineer",           photo: "" },
  { name: "Marwan Adel",       role: "PCB Design Engineer",         photo: "" },
  { name: "Ghada Hany",        role: "Computer Vision Engineer",    photo: "" },
  { name: "Yousef Kamel",      role: "Mechanical Design Engineer",  photo: "" },
  { name: "Sondos Amr",        role: "Control Systems Engineer",    photo: "" }
];

/* Renders the team grid, split into two even columns, once the DOM is ready. */
document.addEventListener('DOMContentLoaded', () => {
  const leftCol = document.querySelector('[data-team-col="left"]');
  const rightCol = document.querySelector('[data-team-col="right"]');
  if (!leftCol || !rightCol) return;

  const half = Math.ceil(TEAM_MEMBERS.length / 2);
  const leftMembers = TEAM_MEMBERS.slice(0, half);
  const rightMembers = TEAM_MEMBERS.slice(half);

  const buildCard = (member) => {
    const card = document.createElement('div');
    card.className = 'member-card reveal';
    const photoSrc = member.photo && member.photo.trim() !== ''
      ? member.photo
      : 'assets/images/avatar-default.svg';
    card.innerHTML = `
      <div class="member-photo">
        <img src="${photoSrc}" alt="${member.name}" loading="lazy">
      </div>
      <div class="member-info">
        <div class="member-name">${member.name}</div>
        <div class="member-role">${member.role}</div>
      </div>
    `;
    return card;
  };

  leftMembers.forEach(m => leftCol.appendChild(buildCard(m)));
  rightMembers.forEach(m => rightCol.appendChild(buildCard(m)));

  // Re-observe newly injected .reveal cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.member-card.reveal').forEach(el => observer.observe(el));
});
