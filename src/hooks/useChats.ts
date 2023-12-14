import { useContext } from "react";
import { ChatsContext } from "../contexts/Chats";

const useTheme = () => useContext(ChatsContext);

export default useTheme;
