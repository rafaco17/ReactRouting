const baseUrl = 'https://dragonball-api.com/api/';
const characterUrl = baseUrl + 'characters/';

export const getGoku = () => {
    return fetch(characterUrl + '1').then(res => res.json())
}