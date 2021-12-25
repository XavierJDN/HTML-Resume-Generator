import CvManager from "/asset/js/cv_manager.js";


const cvManager = new CvManager(window.location.pathname.split(`/`)[1]);

export const headerConfig  = async (manager) =>{
    const headerContact = await manager.getContact();
    const contactListContainer = document.getElementsByTagName(`header`)[0].getElementsByTagName(`ul`)[0];
    const contactListConfig = ["home",  "tel", "email","github"];
    for(const contact of contactListConfig){
        const listContactContainer = document.createElement(`li`);
        const contactContainer = document.createElement(`span`);
        if (contact === "home"){
            contactContainer.innerText = headerContact[contact].ref;
        }else{
            const iconContainer = document.createElement(`i`);
            headerContact[contact].iconClass.forEach(element => {
                iconContainer.classList.add(element);
            });
            contactContainer.appendChild(iconContainer);
            if(contact === "email") contactContainer.innerText = headerContact[contact].ref.substring(7);
            else if(contact === "tel") contactContainer.innerText = headerContact[contact].ref.substring(4);
            else contactContainer.innerText = headerContact[contact].ref; 
        }
        listContactContainer.appendChild(contactContainer);
        contactListContainer.appendChild(listContactContainer);
    }
}

export const skillConfig = async (manager) => {
    const skills = await manager.getSkills();
    const header = await manager.getStructure();
    const basicComputerHeader = skills.computer.title.basic;
    const advancedComputerHeader = skills.computer.title.advanced;

    const skillsContainer = document.getElementById(`knowledge`);
    const headerContainer = document.createElement(`h2`);

    const computerSkillsContainer = document.createElement(`div`);

    const basicComputerSkillsContainer = document.createElement(`div`);
    const advancedComputerSkillsContainer = document.createElement(`div`);
    const basicComputerHeaderContainer = document.createElement(`h4`);
    const advancedComputerHeaderContainer = document.createElement(`h4`);
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
    advandedComputerListContainer.className = `list-computer-skills`;
    basicComputerListContainer.className = `list-computer-skills`;
    
    headerContainer.innerText = header.knowledge;
    basicComputerHeaderContainer.innerText = basicComputerHeader;
    advancedComputerHeaderContainer.innerText = advancedComputerHeader;
    advancedComputerSkillsContainer.appendChild(advancedComputerHeaderContainer);
    advancedComputerSkillsContainer.appendChild(advandedComputerListContainer);
    basicComputerSkillsContainer.appendChild(basicComputerHeaderContainer);
    basicComputerSkillsContainer.appendChild(basicComputerListContainer);
    
    computerSkillsContainer.appendChild(advancedComputerSkillsContainer);
    computerSkillsContainer.appendChild(basicComputerSkillsContainer);
    skillsContainer.appendChild(headerContainer);
    skillsContainer.appendChild(computerSkillsContainer);
}

export const langConfig = async (manager) =>{
    const skills = await manager.getSkills();
    const languageSkillsContainer = document.getElementById(`lang`);
    const languageHeaderContainer = document.createElement(`h2`)
    languageSkillsContainer.appendChild(languageHeaderContainer);
    languageHeaderContainer.innerText = skills.language.header;
    for (const language of Object.keys(skills.language.skills)){
        const languageContainer = document.createElement(`p`)
        languageContainer.innerText = `${skills.language.skills[language].icon} ${skills.language.title[language].title} - ${skills.language.title[language].specification} - ${skills.language.skills[language].level} `;
        languageSkillsContainer.appendChild(languageContainer);
    }

}

export const presentationConfig = async (manager) => {
    const presentation = await manager.getPresentation();
    const structure = await manager.getStructure();
    const presentationContainer = document.getElementsByTagName(`header`)[0];
    const presentationTitle = document.createElement(`h2`);
    const articleContainer = document.createElement(`article`);
    const descriptionContainer = document.createElement(`p`);
    descriptionContainer.innerText = presentation.description;
    presentationTitle.innerText = structure[`about-me`];
    presentationContainer.appendChild(presentationTitle);
    articleContainer.appendChild(descriptionContainer);
    presentationContainer.appendChild(articleContainer);
}
export const jobConfig = async (manager) =>{
    const header = await manager.getStructure();
    const jobs = await manager.getExperience();
    const jobsContainer = document.getElementById(`job`);
    const headerContainer = document.createElement(`h2`);
    const jobsListContainer = document.createElement(`ul`);
    headerContainer.innerText = header.job;
    for (const job of jobs){
        const jobContainer = document.createElement(`li`);
        const headerJobContainer = document.createElement(`span`);
        const titleContainer = document.createElement(`h3`);
        const timeJobContainer = document.createElement(`p`);
        const listTaskContainer = document.createElement(`ul`);
        const listSkillsContainer = document.createElement(`ul`);

        headerJobContainer.className = `program-title`;
        listTaskContainer.className = `job-description`;
        listSkillsContainer.className = `list-computer-skills`;

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

export const DegreeConfig = async (manager) => {
    const degreesContainer = document.getElementById(`school`)
    const degrees = await manager.getDegree();
    const header = await manager.getStructure();
        const headerContainer = document.createElement(`h2`);
        const listDegrees = document.createElement(`ul`);
        listDegrees.className = `school-degree`;
        for(const degree of degrees){
            const degreeContainer = document.createElement(`li`);
            const headerDegreeContainer = document.createElement('span');
            const schoolContainer = document.createElement(`h3`);
            const degreeTitleContainer = document.createElement(`h3`);
            const timeDegreeContainer = document.createElement(`p`);
            const specificationContainer = document.createElement(`p`);
    
            headerDegreeContainer.className = `program-title`;
            listDegrees.id = `academic-program`;
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
    const headerContainer = document.createElement(`h2`);
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

headerConfig(cvManager);
presentationConfig(cvManager);
DegreeConfig(cvManager);
jobConfig(cvManager);
hobbieConfig(cvManager);
skillConfig(cvManager);
langConfig(cvManager);