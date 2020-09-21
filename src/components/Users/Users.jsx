import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={classes.pages}>
                    {pages.map(p => {
                        return <button className={this.props.currentPage === p && classes.selectedPage}
                                       onClick={() => this.onPageChanged(p)}>{p}</button>
                    })}
                </div>
                <div>
                    {this.props.users.map(u => <User key={u.id}
                                                     name={u.name}
                                                     id={u.id}
                                                     photo={u.photos.small}
                                                     status={u.status}
                                                     followed={u.followed}
                                                     follow={this.props.follow}
                                                     unfollow={this.props.unfollow}/>)}
                </div>
            </div>
        )
    }
}

export default Users;