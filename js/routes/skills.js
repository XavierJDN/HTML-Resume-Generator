const { json } = require("express");
const { SkillsJsonManager } = require("../managers/skills_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager =    new SkillsJsonManager();

router.get("/computer/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        response.send(await jsonManager.getAllComputerSkills(language));
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

router.get("/language/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        response.send(await jsonManager.getAllLanguageSkills(language));
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

module.exports = { router: router, jsonManager: jsonManager };
