// External deps
import React, {FC, ReactElement} from "react";
import { StyleSheet, View, Dimensions } from "react-native";

// Internal deps
import { CONSTANTS } from "../../../../utils/constants";
import membersData from "../../../../mocks/members.json";
import Card from "../../../ui/Card";
import Avatar from "../../../ui/Avatar/Avatar";
import LockIcon from "../../../../assets/icons/LockIcon";
import MessageCircleIcon from "../../../../assets/icons/MessageCircleIcon";
import Date from "../../../ui/Date/Date";
import Badge from "../../../ui/Badge";
import PreviewMessageBody from "../../Message/PreviewMessageBody";
import ChatName from "../ChatName";

type ChatCardProps = {
    id: string,
    name: string,
    members: number[],
    isPrivate: boolean,
    isChannel: boolean,
    unreadMessagesCount: number,
    lastMessageBody: string,
    lastMessageDate: string,
    removed: boolean,
}

const ChatCard: FC<ChatCardProps> = (props) => {
    const {
        id,
        name,
        members,
        isPrivate,
        isChannel,
        unreadMessagesCount,
        lastMessageBody,
        lastMessageDate,
        removed = false,
    } = props;

    const styles = StyleSheet.create({
        column: {
            display: "flex",
            flexDirection: "column",
        },
        row: {
            width: Dimensions.get('window').width - CONSTANTS.CHAT_AVATAR_SIZE - CONSTANTS.GAP*3,
        },
        textRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        dateRow: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
        },
    });

    const onlinePrivateChatMember = !isChannel && isPrivate
        ? membersData.find((member) => member.id === members[0] && member.isOnline && member.id !== CONSTANTS.SELF_ID)
        : null;

    const getChatAvatar = (): ReactElement => {
        if (!isChannel) {
            return;
        }

        return isPrivate ? <LockIcon /> : <MessageCircleIcon />
    }

    return (
        <Card id={id}>
            <Avatar icon={getChatAvatar()} name={name} isOnline={onlinePrivateChatMember ? onlinePrivateChatMember.isOnline : false}/>
            <View style={styles.column}>
                <View style={[styles.textRow, styles.row]}>
                    <ChatName name={name} removed={removed} />
                    <Date date={lastMessageDate} />
                </View>
                <View style={[styles.dateRow, styles.row]}>
                    <PreviewMessageBody message={lastMessageBody} />
                    {!!unreadMessagesCount && (
                        <Badge text={String(unreadMessagesCount)} />
                    )}
                </View>
            </View>
        </Card>
    )
}

export default ChatCard;
