import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { routes } from "common/router";
import { Store } from "react-redux";
import { RootState } from "common/redux";
import { RouteRenderer } from "common/router/components/RouteRenderer";
import { Helmet } from "react-helmet";
import { Fav196, Fav32 } from "assets/images";

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
        <Helmet>
            <link rel="shortcut icon" type="image/x-icon" href={Fav32} />
            <link rel="icon" sizes="196x196" href={Fav196} />
        </Helmet>
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
