const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class SchoolDegreeJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/schoolDegree.json");
    }

    async getAllDegree(languageId){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const degreeContainer = JSON.parse(fileBuffer);
        return degreeContainer[languageId];
    }

    async addNewDegree(newDegree){
        const degreeFr = await this.getAllDegree(fr);
        const degreeEn = await this.getAllDegree(en);
        degreeFr.push(newDegree.fr);
        degreeEn.push(newDegree.en);
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({"fr":degreeFr, "en":degreeEn}));
    }
}

module.exports = {SchoolDegreeJsonManager};
