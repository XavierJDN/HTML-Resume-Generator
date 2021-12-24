const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class HobbieJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/hobbie.json");
    }

    async getAllHobbie(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const hobbieContainer = JSON.parse(fileBuffer);
        return hobbieContainer[languageId];
    }

    async addNewHobbie(newHobbie){
        const hobbieFr = await this.getAllHobbie(fr);
        const hobbieEn = await this.getAllHobbie(en);
        hobbieFr.push(newHobbie.fr);
        hobbieEn.push(newHobbie.en);
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({"fr":hobbieFr, "en":hobbieEn}));
    }
}

module.exports = {HobbieJsonManager};
