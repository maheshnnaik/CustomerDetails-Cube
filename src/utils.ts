import { PICSUMURL } from "./constant";

export const getRandomImages = (): Promise<string[]> => {
    return new Promise(async (resolve, reject) => {
        try {
            const page = getRandomPageNumber();
            const url = `${PICSUMURL}?page=${page}&limit=9`;
            const response = await fetch(url);
            const data = await response.json();
            resolve(data);
        } catch (error) {
            resolve([])
        }
    })
}

const getRandomPageNumber = () => {
    return Math.floor(Math.random() * 20)
}