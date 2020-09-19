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
            let action = updateNewMessageTextActionCreator(text, id);
            dispatch(action);
        },
        sendMessage: id => {
            let action = sendMessageActionCreator(id);
            dispatch(action);
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;