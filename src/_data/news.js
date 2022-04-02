const axios = require("axios");
require("dotenv").config();
const countries = require("./countries.json");


async function getNews(country) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&pageSize=5`);
        return {
            country,
            articles: response.data.articles
        };
    } catch (error) {
        console.error(error);
    }
}

module.exports = async function() {
    const promises = countries.map(getNews)
    return Promise.all(promises)
                       .then(resObj => {
                            console.log(resObj);
                            return resObj;
                        })
}