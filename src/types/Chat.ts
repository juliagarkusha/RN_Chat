export type ChatType = {
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

export type MessageType = {
    id: number,
    chatId: string,
    body: string,
    date: string,
    senderName: string,
}
