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
import { ChatType } from "../../types/Chat";
import mockChatsData from "../../mocks/chats.json";

type ChatsPropsType = {
    chatsData: ChatType[],
    channelsData: ChatType[],
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    onUpdateDataHandler: () => void,
    getChatById: (chatId: string) => ChatType | null,
}

const defaultValue: ChatsPropsType = {
    chatsData: mockChatsData,
    channelsData: mockChatsData,
    searchValue: '11',
    setSearchValue: () => void 0,
    onUpdateDataHandler: () => void 0,
    getChatById: () => null,
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
                channelsData: chatsData.filter(item => item.isChannel),
                searchValue,
                setSearchValue,
                onUpdateDataHandler,
                getChatById,
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatsProvider;
