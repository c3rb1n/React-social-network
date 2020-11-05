import {compose} from "redux";
import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = state => {
    return {
        elements: state.navbar.elements
    };
};

export default compose(
    connect(mapStateToProps, null)
)(Navbar);