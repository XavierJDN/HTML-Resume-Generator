const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class ConntactJsonManager{
    constructor(){
        this.JSON_PATH = path.join(__dirname + "../../../data/contact.json");
    }

    async getAllContact(){
        const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
        const contactContainer = JSON.parse(fileBuffer);
        return contactContainer;
    }

    async addNewContact(newContact){
        const contact = await this.getAllContact();
        contact.push(newContact);
        await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(contact));
    }
}

module.exports = {ConntactJsonManager};