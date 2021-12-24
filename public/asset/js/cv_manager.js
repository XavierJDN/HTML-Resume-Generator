import HTTPManager from "/asset/js/http_manager.js";

export default class CvManager{
    constructor(language){
        this.language = language;
        this.httpManager = new HTTPManager();
    }

    async getSkills(){
        return  {   "computer": await this.httpManager.fetchAllComputerSkills(this.language),
                    "language": await this.httpManager.fetchAllLanguageSkills(this.language)
                }
    }

    async getDegree(){
        return await this.httpManager.fetchAllDegree(this.language);
    }

    async getExperience(){
        return await this.httpManager.fetchAllExperience(this.language);
    }

    async getContact(){
        return await this.httpManager.fetchAllContact();
    }

    async getPresentation(){
        return await this.httpManager.fetchAllPresentation(this.language);
    }

    async getStructure(){
        return await this.httpManager.fetchAllStructure(this.language);
    }

    async getHobbie(){
        return await this.httpManager.fetchAllHobbie(this.language);
    }
}
