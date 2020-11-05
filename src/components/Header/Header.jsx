import React from "react";
import classes from "./Header.module.scss";
import song from "../../assets/music/Three Chain Links - Hot Nights in Los Angeles.mp3";
import AudioPlayer, {RHAP_UI} from "react-h5-audio-player";
import LoginBlock from "./LoginBlock/LoginBlock";
import HeaderLogo from "../common/Icons/HeaderLogo/HeaderLogo";

const Header = props => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <HeaderLogo/>
                {props.isAuth && <AudioPlayer autoPlay loop src={song} volume={0.1} layout="horizontal-reverse"
                                              customProgressBarSection={[]} showJumpControls={false}
                                              customControlsSection={
                    [
                        RHAP_UI.MAIN_CONTROLS,
                        <div className={classes.audioPlayer__songName}>
                            Three Chain Links - Hot Nights in Los Angeles
                        </div>,
                        RHAP_UI.VOLUME_CONTROLS
                    ]}/>}
                {props.isAuth && <LoginBlock fullName={props.profile.fullName}
                                             photo={props.profile.photos.small}
                                             logout={props.logout}/>}
            </div>
        </header>
    );
};

export default Header;