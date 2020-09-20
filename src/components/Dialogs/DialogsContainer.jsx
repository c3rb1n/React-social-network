import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageText: (text, id) => {
            dispatch(updateNewMessageTextActionCreator(text, id));
        },
        sendMessage: id => {
            dispatch(sendMessageActionCreator(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);