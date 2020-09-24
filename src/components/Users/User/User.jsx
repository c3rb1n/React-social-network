import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "0ab3992a-e53d-4fa4-b26d-046e5e34ca4f"
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(props.id)
                        }
                    })
                }}>Unfollow</button> :
                <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "0ab3992a-e53d-4fa4-b26d-046e5e34ca4f"
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(props.id)
                        }
                    })
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