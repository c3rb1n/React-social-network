import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api/api";

const User = props => {
    return (
        <div>
            <div className={classes.userPhoto}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photo != null ? props.photo : userPhoto} alt="user"/>
                </NavLink>
            </div>
            <div>{props.followed ?
                <button onClick={() => {
                    followAPI.deleteFollow(props.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(props.id)
                        }
                    });
                }}>Unfollow</button> :
                <button onClick={() => {
                    followAPI.createFollow(props.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(props.id)
                        }
                    });
                }}>Follow</button>
            }
            </div>
            <div>{props.name}</div>
            <div>{props.status}</div>
            <div>{"props.country"}</div>
            <div>{"props.city"}</div>
        </div>
    );
};

export default User;