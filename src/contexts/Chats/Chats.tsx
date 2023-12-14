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

//
import chatsData from "../../mocks/chats.json";

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
    setSearchValue: Dispatch<SetStateAction<string>>
}

const defaultValue: ChatsPropsType = {
    chatsData: chatsData,
    searchValue: '',
    setSearchValue: () => void 0,
}

export const ChatsContext = createContext<ChatsPropsType>(defaultValue);

const ChatsProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    const [ searchValue, setSearchValue ] = useState('');

    const filteredChatsData = useMemo<ChatType[]>(() => {
        return chatsData.filter((chat) =>
            chat.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue])

    return (
        <ChatsContext.Provider
            value={{
                chatsData: !!searchValue.length ? filteredChatsData : chatsData,
                searchValue,
                setSearchValue,
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatsProvider;
