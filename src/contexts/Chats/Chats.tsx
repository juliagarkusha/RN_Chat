// External deps
import React, {
    FC,
    createContext,
    PropsWithChildren,
    useState,
    useMemo,
    Dispatch,
    SetStateAction,
} from "react";

// Internal deps
import { ChatType, MessageType } from "../../types/Chat";
import mockChatsData from "../../mocks/chats.json";
import mockMessagesData from "../../mocks/messages.json";

type ChatsPropsType = {
    chatsData: ChatType[],
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    onUpdateDataHandler: () => void,
    getChatById: (chatId: string) => ChatType | null,
    getMessagesByChatId: (chatId: string) => MessageType[],
}

const defaultValue: ChatsPropsType = {
    chatsData: mockChatsData,
    searchValue: '',
    setSearchValue: () => void 0,
    onUpdateDataHandler: () => void 0,
    getChatById: () => null,
    getMessagesByChatId: () => [],
}

export const ChatsContext = createContext<ChatsPropsType>(defaultValue);

const ChatsProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const [ chatsData, setChatsData ] = useState<ChatType[]>(mockChatsData);
    const [ searchValue, setSearchValue ] = useState('');

    const filteredChatsData = useMemo<ChatType[]>(() => {
        return chatsData.filter((chat) =>
            chat.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [chatsData.length, searchValue]);

    const getChatById = (chatId): ChatType => {
        const foundChat = chatsData.find(chat => chat.id === chatId);

        if (!foundChat) {
            return null;
        }

        return foundChat;
    }

    const getMessagesByChatId = (chatId: string): MessageType[] => {
        return mockMessagesData.filter(message => message.chatId === chatId);
    }

    const onUpdateDataHandler = () => {
        setChatsData((prevValue) => {
            return [
                {
                    id: String(Date.now()),
                    name: 'NEW CHAT',
                    isChannel: true,
                    isPrivate: true,
                    isMuted: false,
                    lastMessage: {
                        date: Date.now(),
                        body: 'Чат, який додавсь після рефрешу через 3 сек'
                    },
                    unreadMessagesCount: 1,
                    removed: false,
                    members: [1701630538046, 1701630553224, 1701630563273, 1701330503359]
                },
                ...prevValue,
            ];
        })
    };

    return (
        <ChatsContext.Provider
            value={{
                chatsData: !!searchValue.length ? filteredChatsData : chatsData,
                searchValue,
                setSearchValue,
                onUpdateDataHandler,
                getChatById,
                getMessagesByChatId,
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatsProvider;
