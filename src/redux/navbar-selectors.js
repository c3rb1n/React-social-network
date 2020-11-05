import React from "react";
import ProfileIcon from "../components/common/Icons/ProfileIcon/ProfileIcon";
import DialogsIcon from "../components/common/Icons/DialogsIcon/DialogsIcon";
import UsersIcon from "../components/common/Icons/UsersIcon/UsersIcon";
import NewsIcon from "../components/common/Icons/NewsIcon/NewsIcon";
import MusicIcon from "../components/common/Icons/MusicIcon/MusicIcon";
import SettingsIcon from "../components/common/Icons/SettingsIcon/SettingsIcon";

export const getIconSelector = id => id === 1 ? <ProfileIcon/> :
                                     id === 2 ? <DialogsIcon/> :
                                     id === 3 ? <UsersIcon/> :
                                     id === 4 ? <NewsIcon/> :
                                     id === 5 ? <MusicIcon/> : <SettingsIcon/>;