const axios = require('axios');

export const getJSON = async (url: string) => {
    try {
        return (
            await axios({
                method: 'get',
                url: url,
                responseType: 'json'
            })
        ).data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postJSON = async (url: string, data: object) => {
    try {
        await axios({
            method: 'put',
            url: url,
            responseType: 'json',
            data: data
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};
