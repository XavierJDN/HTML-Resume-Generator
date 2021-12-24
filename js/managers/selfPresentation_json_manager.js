const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class SelfPresentationJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/selfPresentation.json");
    }

    async getAllSelfPresentation(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const presentationContainer = JSON.parse(fileBuffer);
        return  {
                "name":presentationContainer.name,
                "description":presentationContainer.description[languageId]
                };
    }

    async modifyPresentation(newSelfPresentation){
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({"fr":newSelfPresentation.fr, "en":newSelfPresentation.en}));
    }
}

module.exports = {SelfPresentationJsonManager};