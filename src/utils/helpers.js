
export const storeOnLocalStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}

export const getFromLocalStorage = (item) => {
    const data = localStorage.getItem(item);
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}