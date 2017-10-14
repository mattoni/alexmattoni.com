import * as React from "react";
import { SFC } from "react";
import { style, classes } from "typestyle";
import { Colors } from "common/styles";
import { Helmet } from "react-helmet";
import { ProfileImage } from "assets/images";

interface HomeProps {

}

const Styles = {
    background: style({
        display: "flex",
        justifyContent: "space-between",
        color: `${Colors.lightGray}`,
        height: "100vh",
        // background: `url(${BackgroundImage}) no-repeat center center fixed`,
        // backgroundSize: "cover",
    }),
    panel: style({
        width: "50vw",
        height: "100vh",
        backgroundColor: `rgba(255, 255, 255, 0.3)`,
        position: "relative",
    }),
    profile: style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        $nest: {
            "& > img": {
                flexShrink: 0,
                minWidth: "100%",
                minHeight: "100%",
            }
        }
    }),
    greeting: style({
        display: "flex",
        justifyContent: "center",
        padding: "2rem"
    })
}

export const HomeView: SFC<HomeProps> = () => (
    <div className={Styles.background}>
        <Helmet>
            <title>Alexander Mattoni</title>
        </Helmet>
        <div className={Styles.panel}>
            <div className={Styles.profile}>
                <img src={ProfileImage} />
            </div>
        </div>
        <div className={classes(Styles.panel, Styles.greeting)}>
            <h1>Alexander Mattoni</h1>
        </div>
    </div>
)