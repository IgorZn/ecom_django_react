// import {configureStore, combineReducers} from '@reduxjs/toolkit'
// import productListReducer from './productList'
//
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
//
// // combineReducers -- чтобы использовать несколько Reducers
// const rootReducer = combineReducers({
//     productList: productListReducer
// })
//
// // persistConfig -- пойдет в persistReducer
// const persistConfig = {
//     key: 'root',
//     storage,
// }
//
// // создаем persistedReducer, который заменит productListReducer и будет включать доступ
// // к localStorage
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
// const store = configureStore({
//     reducer: {
//         // тут был 'productListReducer', а мы его заменяем на 'persistedReducer'
//         productList: persistedReducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })
//
// // persistor -- должен знать о нашем store, чтобы в конечном счете складывать всё в localStorage
// export const persistor = persistStore(store)
// export default store;