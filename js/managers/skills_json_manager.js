const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class SkillsJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/skills.json");
    }
    async getAllSkills(){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const skillsContainer = JSON.parse(fileBuffer);
        return skillsContainer;
    }

    async getAllComputerSkills(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const skillsContainer = JSON.parse(fileBuffer);
        return {"title":{"basic":skillsContainer[languageId].basic, "advanced":skillsContainer[languageId].advanced}, "skills":skillsContainer.computer};
    }

    async getAllLanguageSkills(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const skillsContainer = JSON.parse(fileBuffer);
        return {"header":skillsContainer[languageId].languageHeader, "title":skillsContainer[languageId].language, "skills":skillsContainer.language};
    }

    async addNewComputerSkills(knowledge, newComputerSkills){
        const computerSkills = await this.getAllComputerSkills();
        const skills = await this.getAllSkills();
        computerSkills[knowledge].push(newComputerSkills);
        skills.computer = computerSkills;
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(skills));
    }
 
    async addNewLanguageId(id, knowledge, icon){
        const languageSkills = await this.getAllLanguageSkills();
        const skills = await this.getAllSkills();
        languageSkills.push({"id":id, "level":knowledge, "icon":icon});
        skills.language = languageSkills;
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(skills));
    }

    async addNewLanguagePresentation(languageId, title, specification){
        const languageSkills = await this.getAllLanguageSkills(languageId);
        const skills = await this.getAllSkills();
        languageSkills.title.push({"title":title, "specification":specification});
        skills.language = languageSkills;
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(skills));
    }

    async addNewLangugage(newLanguage){
        this.addNewLanguageId(newLanguage.id, newLanguage.knowledge, newLanguage.icon);
        this.addNewLanguagePresentation(newLanguage.languageId, newLanguage.title, newLanguage.specification);
    }

}

module.exports = {SkillsJsonManager};