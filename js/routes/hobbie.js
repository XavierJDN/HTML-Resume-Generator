const { json } = require("express");
const { HobbieJsonManager } = require("../managers/hobbie_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager = new HobbieJsonManager();

router.get("/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        response.send(await jsonManager.getAllHobbie(language));
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

router.post("/", async (request, response) =>{
    try{
        if(!Object.keys(request.body).length){
            response.status(HTTP_STATUS.BAD_REQUEST).end();
            return;
        }
        await jsonManager.addNewHobbie(request.body);
        response.redirect(`/cv`);
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
        return;
    }
})

module.exports = { router: router, jsonManager: jsonManager };
