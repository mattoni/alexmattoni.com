import { combineReducers } from "redux";
import { routerReducer as router, RouterState } from "common/router";
import { appReducer as app, AppState } from "modules/app/redux";

export interface RootState {
    router: RouterState;
    app: AppState;
}

export const rootReducer = combineReducers<RootState>({
    app,
    router,
} as any) // TODO FIX HACK