import { writable } from "svelte/store";
export const countrys = writable([]);
export let countryDetails = writable([]);
export let borderFullName = writable([]);
export let countryCodes = [];

export const fetchCountry = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        countrys.set(data);
        return data;
    } else {
        throw new Error(response.statusText);
    }
}

export const updateCountry = async (countryName: string) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        storeCountryCodes(data);
        countryDetails.set(data);
        return data;
    } else {
        throw new Error(response.statusText);
    }
};

const storeCountryCodes = (data) => {
    countryCodes = data.map((data: { borders: []; }) => {
        return [data.borders];
    });
    getBorderByName();
}

const getBorderByName = async () => {
    try {
        let countryQuery = countryCodes.join().toLowerCase();
        const url = `https://restcountries.com/v3.1/alpha?codes=${countryQuery}`;
        const response = await fetch(url);
        const data = await response.json();
        // save border with fullname
        const countryName = data.map((element) => {
            return element.name.common;
        })
        borderFullName.set(countryName);
    } catch (error) {
        throw new Error(error);
    }
};

