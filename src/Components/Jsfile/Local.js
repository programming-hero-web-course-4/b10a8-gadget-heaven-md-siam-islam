
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

 const clearStore = () => {
    localStorage.clear(); 
};


const updateStore = (updatedProductIds) => {
    localStorage.setItem('cart-list', JSON.stringify(updatedProductIds));
};



const updateWish = (updatedWishIds) => {
    localStorage.setItem('wish-list', JSON.stringify(updatedWishIds));
};






export { addStore, addwish, getStore, getwish,clearStore,updateStore,updateWish};
