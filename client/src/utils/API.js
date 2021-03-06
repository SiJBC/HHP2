import axios from "axios"

export  default {
    getHeadache(){
        return axios.get("/api/ailments/headache")
    },

    getHeadachePharm(){
        return axios.get("/api/ailments/headache/pharm")
    },

    getHeadacheNoPharm(){
        return axios.get("/api/ailments/headache/nopharm")
    },

    getBackpain(){
        return axios.get("/api/ailments/backpain")
    },

    getBackpainPharm(){
        return axios.get("/api/ailments/backpain/pharm")
    },

    getBackpainNoPharm(){
        return axios.get("/api/ailments/backpain/nopharm")
    },

    getAlzheimers(){
        return axios.get("/api/ailments/alzheimers")
    },

    getAlzheimersPharm(){
        return axios.get("/api/ailments/alzheimers/pharm")
    },

    getAlzheimersNoPharm(){
        return axios.get("/api/ailments/alzheimers/nopharm")
    },

    getDiabetes(){
        return axios.get("/api/ailments/diabetes")
    },

    getDiabetesPharm(){
        return axios.get("/api/ailments/diabetes/pharm")
    },

    getDiabetesNoPharm(){
        return axios.get("/api/ailments/diabetes/nopharm")
    },
    getJointPains(){
        return axios.get("/api/ailments/jointpains")
    },

    getJointPainsPharm(){
        return axios.get("/api/ailments/jointpains/pharm")
    },

    getJointPainsNoPharm(){
        return axios.get("/api/ailments/jointpains/nopharm")
    },

    postAilment(userData){
        return axios.post("/api/ailments", userData)
    },

    returnByEmail(email){
        return axios.get("/api/ailments/" + email)
    },

    deletePost(id){
        return axios.delete("/api/ailments/" + id);
    },

    likePost(id){
        return axios.put("/api/ailments/" + id);
    }
}

