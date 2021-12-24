const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class ExperienceJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/experience.json");
    }

    async getAllExperience(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const experiencesContainer = JSON.parse(fileBuffer);
        return experiencesContainer[languageId];
    }

    async addNewExperience(newExperience){
        const experiencesFr = await this.getAllExperience(`fr`);
        const experiencesEn = await this.getAllExperience(`en`);
        experiencesFr.push(newExperience.fr);
        experiencesEn.push(newExperience.en);
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({"fr":experiencesFr, "en":experiencesEn}));
    }
}

module.exports = {ExperienceJsonManager};