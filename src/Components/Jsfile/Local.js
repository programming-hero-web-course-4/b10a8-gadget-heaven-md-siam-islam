
const getStore = () => {
    const storedListing = localStorage.getItem('cart-list');
    if (storedListing) {
        return JSON.parse(storedListing);
    } else {
        return [];
    }
};


const addStore = (id) => {
    const storeList = getStore();
    storeList.push(id);
    localStorage.setItem('cart-list', JSON.stringify(storeList));
};


const getwish = () => {
    const storedListing = localStorage.getItem('wish-list');
    if (storedListing) {
        return JSON.parse(storedListing);
    } else {
        return [];
    }
};


const addwish = (id) => {
    const wishList = getwish(); 
    wishList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(wishList));
};


export { addStore, addwish, getStore, getwish};
