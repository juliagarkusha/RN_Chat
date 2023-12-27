import {
    makeObservable,
    observable,
    action,
} from "mobx";

import mockMessagesData from "../mocks/messages.json";

class MessagesStore {
    @observable messages;
    @observable sendMessageBody;

    constructor() {
        this.messages = [];
        this.sendMessageBody = '';
        makeObservable(this);
    }

    @action setMessages(chatId) {
        this.messages = mockMessagesData.filter(message => message.chatId === chatId);
    }

    @action setSendMessageBody(text) {
        this.sendMessageBody = text;
    }

    @action sendMessage(chatId) {
        this.messages = [
            {
                "id": Date.now(),
                "chatId": chatId,
                "body": this.sendMessageBody || '',
                "date": Date.now(),
                "sender": {
                    "id": 1701330503359,
                    "name": "magna",
                    "isOnline": true
                }
            },
            ...this.messages,
        ]
        this.sendMessageBody = '';
    }
}

const messagesStore = new MessagesStore();
export default messagesStore;
