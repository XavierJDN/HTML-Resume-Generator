const { json } = require("express");
const { SchoolDegreeJsonManager } = require("../managers/schoolDegree_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager =    new SchoolDegreeJsonManager();

router.get("/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        response.send(await jsonManager.getAllDegree(language));
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
        await jsonManager.addNewDegree(request.body);
        response.redirect(`/cv`);
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
        return;
    }
})

module.exports = { router: router, jsonManager: jsonManager };
