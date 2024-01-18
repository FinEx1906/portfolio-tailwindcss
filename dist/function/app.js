// base
const projectLoop = [
    {
        id: 1,
        project: "My first website for a training center",
        projectInfo: "I used this site for testing at my first training center. I created this site for my training center",
        projectImages: "../../assets/images/lastProject.png",
        skill: ["HTML", "CSS", "BOOTSTRAP", "SASS", "JAVASCRIPT"]
    },
    {
        id: 2,
        project: "Dashboard site for testing",
        projectInfo: "Then! I created a dashboard using javascript to test myself and it has some great functionality. Create new users, register and login, etc",
        projectImages: "../../assets/images/purple-free-dashbord.png",
        skill: ["HTML", "CSS", "TAILWINDCSS", "SASS", "javascript"]
    }
]

const projectContainer = document.getElementById('projectContainer')

// Loops
projectLoop.map((item) => {
    projectContainer.innerHTML += `
    <div class="my-16">
        <h4 class="font-normal flex items-center tracking-tighter">
        <section>
        <img src="../assets/icon/lastProject.svg" alt="lastProject" >
        </section>
        <span class="ml-3">Last Project</span>
        <span class=" text-blue-400 text-lg block ml-6  pl-2 pr-2 pt-1 pb-1 rounded-2xl bg-blue-50">Education
            Center</span>
        </h4>
        <p class="text-3xl my-5 -tracking-normal font-medium">
        ${item.project}
        </p>
        <p class="text-2xl">${item.projectInfo}</p>
        <div class="images my-2">
        <a href="#">
            <img src="${item.projectImages}" alt="${item.id}" class="img-fluid rounded-lg border-gray-100 border">
        </a>
        </div>
        <div class="button-link">
        ${item.skill.map(skill => `
            <button
                class="pl-5 mt-3 pr-5 pt-2 pb-2 text-gray-500 hover:bg-gray-200 transition border-gray-400 border rounded-3xl text-center">${skill}</button>
        `).join('')}
        </div>
    </div>
`
})