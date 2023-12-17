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
import mockChatsData from "../../mocks/chats.json";

type ChatType = {
    id: string,
    name: string,
    isChannel: boolean,
    isPrivate: boolean,
    isMuted: boolean,
    lastMessage: {
        date: number,
        body: string
    },
    unreadMessagesCount: number,
    removed: boolean,
    members: number[],
}

type ChatsPropsType = {
    chatsData: ChatType[],
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    onUpdateDataHandler: () => void
}

const defaultValue: ChatsPropsType = {
    chatsData: mockChatsData,
    searchValue: '',
    setSearchValue: () => void 0,
    onUpdateDataHandler: () => void 0,
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
                onUpdateDataHandler
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatsProvider;
