import chats from "./db/chats.json";

interface Chat {
    id: string;
    name: string;
    isChannel: boolean;
    isPrivate: boolean;
    isMuted: boolean;
    lastMessage: { date: number; body: string };
    unreadMessagesCount: number;
    removed: boolean;
    members: string[];
}

export function getChats(token: string): Chat[] {
    return chats.filter(chat => chat.members.includes(token));
}
