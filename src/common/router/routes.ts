import { RouteProps } from "react-router";
import { Store } from "react-redux";
import { RootState } from "common/redux"

import { homeRoute } from "modules/home/routes";


export interface StaticRoute extends RouteProps {
    onEnter?: (s: Store<RootState>) => Promise<any>;
}

export const routes = [
    homeRoute,
]