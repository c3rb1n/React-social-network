import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";

const DialogsContainer = props => {
    let state = props.store.getState().dialogsPage;

    let updateNewMessageText = (text, id) => {
        let action = updateNewMessageTextActionCreator(text, id);
        props.store.dispatch(action);
    };

    let sendMessage = id => {
        let action = sendMessageActionCreator(id);
        props.store.dispatch(action);
    };

    return <Dialogs dialogs={state.dialogs}
                    messages={state.messages}
                    updateNewMessageText={updateNewMessageText}
                    sendMessage={sendMessage}/>;
};

export default DialogsContainer;