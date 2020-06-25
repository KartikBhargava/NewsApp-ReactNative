import { articles_url, _api_key, country_code } from '../config/rest_config';

export async function getArticles(category) {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        console.log(error)
        throw error;
    }
}