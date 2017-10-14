import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { routes } from "common/router";
import { Store } from "react-redux";
import { RootState } from "common/redux";
import { RouteRenderer } from "common/router/components/RouteRenderer";

interface AppProps {
    store: Store<RootState>
}

const Styles = {
    wrapper: style({
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
    }),
}

export const AppView: SFC<AppProps> = (props: AppProps) => (
    <div>
        <main className={Styles.wrapper} role="stage">
            {routes.map(route => (
                <RouteRenderer
                    key={route.path}
                    route={route}
                    store={props.store} />
            ))}
        </main>
    </div>
);
