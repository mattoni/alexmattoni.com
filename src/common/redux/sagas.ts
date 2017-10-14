import createSagaMiddleware, { effects } from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield effects.all([

    ]);
}

export function runSagas() {
    sagaMiddleware.run(rootSaga);
}