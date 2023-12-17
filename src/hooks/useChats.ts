import { useContext } from "react";
import { ChatsContext } from "../contexts/Chats";

const useChats = () => useContext(ChatsContext);

export default useChats;
