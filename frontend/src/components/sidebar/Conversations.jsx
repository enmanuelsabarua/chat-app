import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    console.log("Conversations: ", conversations);
    
    return (
        <div className="flex flex-col py-2 overflow-auto">
            {loading && <span className="loading loading-spinner"></span>}
            {conversations.map((conversation, index) => (
                <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={index === conversations.length - 1} />
            ))}
        </div>
    )
}

export default Conversations;