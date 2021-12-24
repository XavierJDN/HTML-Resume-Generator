const { json } = require("express");
const { ExperienceJsonManager } = require("../managers/experience_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager = new ExperienceJsonManager();

router.get("/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        const res = await jsonManager.getAllExperience(language);
        response.send(await jsonManager.getAllExperience(language));
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
        await jsonManager.addNewExperience(request.body);
        response.redirect(`/cv`);
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
        return;
    }
})

module.exports = { router: router, jsonManager: jsonManager };