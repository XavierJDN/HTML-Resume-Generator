const { ConntactJsonManager } = require("../managers/contact_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager = new ConntactJsonManager();

router.get("/", async (request, response) => {
    try{
        response.send(await jsonManager.getAllContact());
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

router.post("/", async (request, response) => {
    try{
        if(!Object.keys(request.body).length){
            response.status(HTTP_STATUS.BAD_REQUEST).end();
                return;
        }
        await jsonManager.addNewContact(addNewContact);
        response.redirect(`/cv`)
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

module.exports = { router: router, jsonManager: jsonManager };
