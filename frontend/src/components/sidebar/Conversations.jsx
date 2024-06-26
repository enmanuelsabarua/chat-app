import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import AnimatedConversationLoading from "./AnimatedConversationLoading";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    return (
        <div className="flex flex-col py-2 overflow-auto">
            {loading &&
                <>
                    <AnimatedConversationLoading />
                    <AnimatedConversationLoading />
                    <AnimatedConversationLoading />
                    <AnimatedConversationLoading />
                    <AnimatedConversationLoading />
                    <AnimatedConversationLoading />
                </>
            }
            {conversations.map((conversation, index) => (
                <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={index === conversations.length - 1} />
            ))}
        </div>
    )
}

export default Conversations;