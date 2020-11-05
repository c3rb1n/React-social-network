import React from "react";
import classes from "./PageNotFound.module.scss";

class PageNotFound extends React.Component {
    componentDidMount() {
        this.props.pageNotFound();
    };

    componentWillUnmount() {
        this.props.pageFound();
    };

    render() {
        return (
            <div className={classes.pageNotFound}>
                <div className={classes.pageNotFound__error}>
                    <span>Oops!</span>
                    <div className={classes.pageNotFound__404}>
                        <span>ERROR</span>
                        <span>404</span>
                    </div>
                    <span className={classes.pageNotFound__text}>Page not found</span>
                </div>
            </div>
        );
    };
}

export default PageNotFound;