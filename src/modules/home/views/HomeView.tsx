import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { Colors } from "common/styles";
import { Helmet } from "react-helmet";
import { ProfileImage, BackgroundImage } from "assets/images";
import { SocialMedia } from "../components/SocialMedia";

interface HomeProps {

}

const Styles = {
    background: style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `black`,
        height: "100vh",
        background: `url(${BackgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
    }),
    panel: style({
        background: "inherit",
        width: "75vw",
        height: "75vh",
        position: "absolute",
        overflow: "hidden",
        $nest: {
            "&:before": {
                content: `""`,
                background: "inherit",
                position: "absolute",
                left: "-2.5rem",
                right: 0,
                top: "-2.5rem",
                bottom: 0,
                boxShadow: "inset 0 0 0 3000px rgba(255,255,255,0.3)",
                filter: "blur(10px)",
            },
            "&>div": {
                position: "absolute",
                display: "flex",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }
        }
    }),
    col2: style({
        width: "50%",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",

    }),
    profileImg: style({
        display: "flex",
        // flexGrow: 1,
        backgroundImage: `url(${ProfileImage})`,
        backgroundSize: "contain",
        backgroundPosition: "35%",
        borderRadius: "1%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }),
    header: style({
        textAlign: "center",
        color: `${Colors.text}`,
        fontSize: "2rem"
    })
}

export const HomeView: SFC<HomeProps> = () => (
    <div className={Styles.background}>
        <Helmet>
            <title>Alexander Mattoni</title>
        </Helmet>
        <div className={Styles.panel}>
            <div>
                <div className={Styles.col2}>
                    <div className={Styles.profileImg} />
                </div>
                <div className={Styles.col2}>
                    <div className={Styles.header}>
                        <h1>Alexander Mattoni</h1>
                        <div>
                            CTO/Co-Founder @ <a href="https://petrichor.io">Petrichor, Inc.</a>
                        </div>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
)