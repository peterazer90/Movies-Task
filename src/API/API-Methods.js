import {ApiKey, BaseUrl} from "./API-Config";

export const GetData = async (searchKeyword) => {
    const response = await fetch(BaseUrl + searchKeyword + '&' + ApiKey, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}