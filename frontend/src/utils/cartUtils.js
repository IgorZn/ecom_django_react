const cleanUpStore = (id, store, count) => {
    if (store.length) {
        store.forEach(el => {
            if (Object.keys(el).includes(id)) {
                el[id] = count
            }
        })
        return store
    }
    return []

}

const addOrUpdate = (id, store, count) => {
    if (store.length === 0 & count > 0) {
        console.log('First item')
        store.push(Object.fromEntries([[id, count]]))
        return store
    }

    store.forEach(item => {
        // Update count
        if (Object.keys(item).includes(id)) {
            console.log('Update item count')
            item[id] = count
        }
    })

    // New item
    if (!store.find(item => Object.keys(item).includes(id))) {
        count !== 0 ? store.push(Object.fromEntries([[id, count]])) : console.log('NO new item')
    }

    return store
}

export const addQtyAndGetReadyStore = (id, store, count) => {
    store = addOrUpdate(id, store, count)
    const storeOut = [...store]
    console.log('storeOut>>', storeOut)

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