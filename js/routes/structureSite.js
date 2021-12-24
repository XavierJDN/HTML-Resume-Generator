const { json } = require("express");
const { StructureSiteJsonManager } = require("../managers/structureSite_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const  jsonManager =    new StructureSiteJsonManager();

router.get("/:lang", async (request, response) => {
    const language = request.params.lang;
    try{
        response.send(await jsonManager.getAllStructure(language));
    }catch(e){
        response.status(HTTP_STATUS.SERVER_ERROR).end();
    }
})

module.exports = { router: router, jsonManager: jsonManager };