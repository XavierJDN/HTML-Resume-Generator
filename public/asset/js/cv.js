import CvManager from "/asset/js/cv_manager.js";


const cvManager = new CvManager(window.location.pathname.split(`/`)[1]);

export const presentationConfig = async (manager) => {
    const presentation = await manager.getPresentation()
    const contacts = await manager.getContact();
    const presentationContainer = document.getElementById("about-me");
    const nameContainer = document.createElement(`h1`);
    const articleContainer = document.createElement(`article`);
    const descriptionContainer = document.createElement(`p`);
    const contactContainer = document.createElement(`ul`);
    contactContainer.id = `contact-me`;
    for(const contact of Object.keys(contacts)){
        if(contact === `home`) continue;
        const linkContainer = document.createElement(`li`);
        const link = document.createElement(`a`);
        const icon = document.createElement(`i`)
        link.href = contacts[contact].ref;
        contacts[contact].iconClass.forEach(element => {
            icon.classList.add(element);
        });
        link.appendChild(icon);
        linkContainer.appendChild(link);
        contactContainer.appendChild(linkContainer);
    }
    descriptionContainer.innerText = presentation.description;
    nameContainer.innerText = presentation.name;
    presentationContainer.appendChild(nameContainer);
    articleContainer.appendChild(descriptionContainer);
    articleContainer.appendChild(contactContainer);
    presentationContainer.appendChild(articleContainer);
}

export const skillsConfig = async (manager) => {
    const skills = await manager.getSkills();
    const header = await manager.getStructure();
    const basicComputerHeader = skills.computer.title.basic;
    const advancedComputerHeader = skills.computer.title.advanced;

    const skillsContainer = document.getElementById(`knowledge`);
    const headerContainer = document.createElement(`h3`);

    const computerSkillsContainer = document.createElement(`div`);

    const basicComputerSkillsContainer = document.createElement(`div`);
    const advancedComputerSkillsContainer = document.createElement(`div`);
    const languageSkillsContainer = document.createElement(`div`);
    const basicComputerHeaderContainer = document.createElement(`h4`);
    const advancedComputerHeaderContainer = document.createElement(`h4`);
    const languageHeaderContainer = document.createElement(`h4`)
    const basicComputerListContainer = document.createElement(`ul`);
    const advandedComputerListContainer = document.createElement(`ul`);

    for(const basicSkill of skills.computer.skills.basic){
        const skillContainer = document.createElement(`li`);
        skillContainer.innerText = basicSkill;
        basicComputerListContainer.appendChild(skillContainer);
    }

    for(const advancedSkill of skills.computer.skills.advanced){
        const skillContainer = document.createElement(`li`);
        skillContainer.innerText = advancedSkill;
        advandedComputerListContainer.appendChild(skillContainer);
    }
    computerSkillsContainer.className = `skills`;
    advancedComputerSkillsContainer.className = `column`;
    basicComputerSkillsContainer.className = `column`;

    headerContainer.innerText = header.knowledge;
    basicComputerHeaderContainer.innerText = basicComputerHeader;
    advancedComputerHeaderContainer.innerText = advancedComputerHeader;
    languageHeaderContainer.innerText = skills.language.header;
    advancedComputerSkillsContainer.appendChild(advancedComputerHeaderContainer);
    advancedComputerSkillsContainer.appendChild(advandedComputerListContainer);
    basicComputerSkillsContainer.appendChild(basicComputerHeaderContainer);
    basicComputerSkillsContainer.appendChild(basicComputerListContainer);
    languageSkillsContainer.appendChild(languageHeaderContainer);

    for (const language of Object.keys(skills.language.skills)){
        const languageContainer = document.createElement(`p`)
        languageContainer.innerText = `${skills.language.skills[language].icon} ${skills.language.title[language].title} - ${skills.language.title[language].specification} - ${skills.language.skills[language].level} `;
        languageSkillsContainer.appendChild(languageContainer);
    }

    computerSkillsContainer.appendChild(advancedComputerSkillsContainer);
    computerSkillsContainer.appendChild(basicComputerSkillsContainer);
    skillsContainer.appendChild(headerContainer);
    skillsContainer.appendChild(computerSkillsContainer);
    skillsContainer.appendChild(languageSkillsContainer)

}

export const DegreeConfig = async (manager) => {
const degrees = await manager.getDegree();
const header = await manager.getStructure();
    const degreesContainer = document.getElementById(`school`);
    const headerContainer = document.createElement(`h3`);
    const listDegrees = document.createElement(`ul`);
    listDegrees.className = `school-degree`;
    for(const degree of degrees){
        const degreeContainer = document.createElement(`li`);
        const headerDegreeContainer = document.createElement('span');
        const schoolContainer = document.createElement(`h3`);
        const degreeTitleContainer = document.createElement(`h3`);
        const timeDegreeContainer = document.createElement(`p`);
        const specificationContainer = document.createElement(`p`);

        headerDegreeContainer.className = `school-title`;

        degreeTitleContainer.innerText = degree.degree;
        timeDegreeContainer.innerText = degree.time; 
        schoolContainer.innerText = degree.school;
        specificationContainer.innerText = degree.specification;

        headerDegreeContainer.appendChild(degreeTitleContainer);
        headerDegreeContainer.appendChild(timeDegreeContainer);

        degreeContainer.appendChild(headerDegreeContainer);
        degreeContainer.appendChild(schoolContainer);
        degreeContainer.appendChild(specificationContainer);

        listDegrees.appendChild(degreeContainer);
    }
    headerContainer.innerText = header.school;
    degreesContainer.appendChild(headerContainer)
    degreesContainer.appendChild(listDegrees);
}

export const hobbieConfig = async (manager) => {
    const hobbies = await manager.getHobbie();
    const header = await manager.getStructure();
    const hobbiesContainer = document.getElementById(`hobbies`);
    const headerContainer = document.createElement(`h3`);
    const hobbieListContainer = document.createElement(`ul`);
    headerContainer.innerText = header.hobbies;
    for(const hobbie of hobbies){
        const hobbieContainer = document.createElement(`li`);
        const titleHobbieContainer = document.createElement(`h3`);
        const descriptionHobbieContainer = document.createElement(`p`);
        titleHobbieContainer.innerText = hobbie.title;
        descriptionHobbieContainer.innerText = hobbie.description;
        hobbieContainer.appendChild(titleHobbieContainer);
        hobbieContainer.appendChild(descriptionHobbieContainer);
        hobbieListContainer.appendChild(hobbieContainer);
    }
    hobbiesContainer.appendChild(headerContainer);
    hobbiesContainer.appendChild(hobbieListContainer);
}

export const jobConfig = async (manager) =>{
    const header = await manager.getStructure();
    const jobs = await manager.getExperience();
    const jobsContainer = document.getElementById(`job`);
    const headerContainer = document.createElement(`h3`);
    const jobsListContainer = document.createElement(`ul`);
    headerContainer.innerText = header.job;
    for (const job of jobs){
        const jobContainer = document.createElement(`li`);
        const headerJobContainer = document.createElement(`span`);
        const titleContainer = document.createElement(`h3`);
        const timeJobContainer = document.createElement(`p`);
        const listTaskContainer = document.createElement(`ul`);
        const listSkillsContainer = document.createElement(`ul`);

        headerJobContainer.className = `job-title`;
        listTaskContainer.className = `job-description`;
        listSkillsContainer.className = `skills`;

        titleContainer.innerText = job.title;
        timeJobContainer.innerText = job.time;

        for(const task of job.description){
            const taskContainer = document.createElement(`li`)
            taskContainer.innerText = task;
            listTaskContainer.appendChild(taskContainer);
        }

        for(const skill of job.skills){
            const skillContainer = document.createElement(`li`);
            skillContainer.innerText = skill;
            listSkillsContainer.appendChild(skillContainer);
        }
        headerJobContainer.appendChild(titleContainer);
        headerJobContainer.appendChild(timeJobContainer);
        jobContainer.appendChild(headerJobContainer);
        jobContainer.appendChild(listTaskContainer);
        jobContainer.appendChild(listSkillsContainer);
        jobsListContainer.appendChild(jobContainer);
    }
    jobsContainer.appendChild(headerContainer);
    jobsContainer.appendChild(jobsListContainer);
}

export const headerConfig = async (manager) =>{
    const headers = await manager.getStructure();
    const navigatorContainer = document.getElementsByTagName(`nav`)[0];
    for(const header of Object.keys(headers)){
        if (header === "footer") continue;
        const linkContent = document.createElement(`a`);
        if (header === `download`){
            linkContent.className = `downlaod-nav`;
            linkContent.href = headers[header].ref;
            linkContent.innerText = headers[header].title;
        }
        else{
            linkContent.href = `#${header}`;
            linkContent.innerText = headers[header];
        }
        navigatorContainer.appendChild(linkContent);
    }
}

export const footerConfig = async (manager) =>{
    const headers = await manager.getStructure();
    const contacts = await manager.getContact();
    const footerContainer = document.getElementsByTagName(`footer`)[0];
    const headersContainer = document.createElement(`ul`);
    for (const header of Object.keys(headers.footer)){
        const contactList = document.createElement(`ul`);
        const headerContainer = document.createElement('li');
        const titleContainer = document.createElement(`b`)
        headerContainer.id = header;
        titleContainer.innerText = headers.footer[header].title;
        for(const contact of headers.footer[header].contact){
            const linkContainer = document.createElement(`li`);
            const link = document.createElement(`a`);
            const icon = document.createElement(`i`)
            link.href = contacts[contact].ref;
            contacts[contact].iconClass.forEach(element => {
                icon.classList.add(element);
            });
            link.appendChild(icon);
            linkContainer.appendChild(link);
            contactList.appendChild(linkContainer);
        }
        headerContainer.appendChild(titleContainer);
        headerContainer.appendChild(contactList);
        headersContainer.appendChild(headerContainer);
    }
    footerContainer.appendChild(headersContainer);
}

await headerConfig(cvManager);
await presentationConfig(cvManager);
await skillsConfig(cvManager);
await DegreeConfig(cvManager);
await jobConfig(cvManager);
await hobbieConfig(cvManager);
await footerConfig(cvManager)