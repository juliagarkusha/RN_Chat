import {
    makeObservable,
    observable,
    action,
    computed,
} from "mobx";
import mockChatsData from "../mocks/chats.json";

class ChatsStore {
    @observable chats;
    @observable newChatInfo;
    @observable currentChatId;

    constructor() {
        this.chats = mockChatsData;
        this.currentChatId = null;
        this.newChatInfo = {
            chatName: '',
            isChannel: false,
        };
        makeObservable(this);
    }

    @action setChats(chatItem) {
        this.chats = [chatItem, ...this.chats];
        this.resetNewChatInfo();
    }

    @action setNewChatInfo(name, isChannel = false) {
        this.newChatInfo.chatName = name;

        if (!!isChannel) {
            this.newChatInfo.isChannel = isChannel;
        }
    }

    @action resetNewChatInfo() {
        this.newChatInfo.chatName = '';
        this.newChatInfo.isChannel = false;
    }

    @action setCurrentChatId (id) {
        this.currentChatId = id;
    }

    @computed get getChatById() {
        const foundChat = this.chats.find(chat => chat.id === this.currentChatId);

        if (!foundChat) {
            return null;
        }

        return foundChat;
    }

    @action deleteChatById(id) {
        this.chats = this.chats.filter(chat => chat.id !== id);
    }
}

const chatsStore = new ChatsStore();
export default chatsStore;
