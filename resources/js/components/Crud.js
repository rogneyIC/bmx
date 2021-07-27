import axios from "axios";

const crud = {};

crud.listDonation = async (accepted) => {
    const res = await axios
        .post("/donation/list", { accepted })
        .then((response) => {
            response.data.map((item) => {
                item.read = item.accepted;
            });
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

crud.listProgress = async (accepted) => {
    const res = await axios
        .post("/progress/list", { accepted })
        .then((response) => {
            response.data.map((item) => {
                item.read = item.accepted;                
            });
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

export default crud;
