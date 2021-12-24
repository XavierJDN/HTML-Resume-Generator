const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class StructureSiteJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/structureSite.json");
    }

    async getAllStructure(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const structureContainer = JSON.parse(fileBuffer);
        return structureContainer[languageId];
    }

}

module.exports = {StructureSiteJsonManager};