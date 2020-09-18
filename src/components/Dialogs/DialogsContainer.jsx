import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = props => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage;
                    let updateNewMessageText = (text, id) => {
                        let action = updateNewMessageTextActionCreator(text, id);
                        store.dispatch(action);
                    };
                    let sendMessage = id => {
                        let action = sendMessageActionCreator(id);
                        store.dispatch(action);
                    };

                    return <Dialogs dialogs={state.dialogs}
                                    messages={state.messages}
                                    updateNewMessageText={updateNewMessageText}
                                    sendMessage={sendMessage}/>;
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;