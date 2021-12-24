const HTTPInterface = {
  SERVER_URL: "http://localhost:5000/api",

  GET: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return await response.json();
  },

  POST: async function (endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    return await response.json();
  },

  DELETE: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    return await response.status;
  },

  PATCH: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "PATCH",
    });
    return response.status;
  },
};

export default class HTTPManager {
  constructor() {
    this.experienceBaseURL = `experience/`;
    this.computerSkillsBaseURL = `skills/computer/`;
    this.languageSkillsBaseURL = `skills/language/`;
    this.degreeBaseURL = `degree/`;
    this.contactBaseURL = `contact/`;
    this.structureBaseURL = "structure/";
    this.presentationBaseURL = "presentation/";
    this.hobbieBaseURL = "hobbie/";
  }

  async fetchAllExperience(language){
    try{
      return await HTTPInterface.GET(this.experienceBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all experience`, error);
    }
  }

  async fetchAllComputerSkills(language){
    try{
      return await HTTPInterface.GET(this.computerSkillsBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all computer skills`, error);
    }
  }

  async fetchAllContact(){
    try{
      return await HTTPInterface.GET(this.contactBaseURL);
    }catch(error){
      console.log(`An error has occured while fetching all contact`, error);
    }
  }

  async fetchAllStructure(language){
    try{
      return await HTTPInterface.GET(this.structureBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all structure`, error);
    }
  }

  async fetchAllLanguageSkills(language){
    try{
      return await HTTPInterface.GET(this.languageSkillsBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all language skills`, error);
    }
  }

  async fetchAllPresentation(language){
    try{
      return await HTTPInterface.GET(this.presentationBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all presentation`, error);
    }
  }

  async fetchAllDegree(language){
    try{
      return await HTTPInterface.GET(this.degreeBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all degrees`, error);
    }
  }

  async fetchAllHobbie(language){
    try{
      return await HTTPInterface.GET(this.hobbieBaseURL + language);
    }catch(error){
      console.log(`An error has occured while fetching all hobbies`, error);
    }
  }
}
