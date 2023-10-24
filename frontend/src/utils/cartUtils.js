import {useState} from "react";

const addOrUpdate = (id, store, count) => {
    if (store.length === 0 & count > 0) {
        console.log('First item')
        store.push(Object.fromEntries([[id, count]]))
        return store
    }

    store.forEach(item => {
        // Update count
        if (Object.keys(item).includes(id.toString())) {
            console.log('Update item count')
            item[id] = count
        }
    })

    // New item
    if (!store.find(item => Object.keys(item).includes(id.toString()))) {
        console.log('New Item')
        count !== 0 ? store.push(Object.fromEntries([[id, count]])) : console.log('NO new item')
    }

    console.log('live addOrUpdate:', store)
    return store
}

export const addQtyAndGetReadyStore = (id, store, count) => {
    store = addOrUpdate(id, store, count)
    const storeOut = [...store]
    return storeOut
}

export const getQtyInitValue = (qtyLocalStorage, id) => {
    let qtyCount
    if (qtyLocalStorage.length === 0) {
        qtyCount = 0
    } else {
        qtyCount = qtyLocalStorage.find(item => Object.keys(item).includes(id)) || 0
    }

    return qtyCount
}

export const addToCartStatus = (localStorageQty, stateQty, id) => {
    console.log('>>>>',localStorageQty, stateQty, id)
    if (localStorageQty[id] > 0) {
        return false
    }

    if (stateQty[id] > 0) {
        return false
    }

    if (stateQty === undefined) {
        return true
    }

    return true
}

export const useButtonStatus = (count, id) => {
    const [buttonStatus, setButtonStatus] = useState(count[id] > 0 ? false : true);
    return [buttonStatus, setButtonStatus]
}