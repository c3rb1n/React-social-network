import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessage} from "../../redux/dialogsPage-reducer";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    };
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withRouter,
    withAuthRedirect
)(Dialogs);