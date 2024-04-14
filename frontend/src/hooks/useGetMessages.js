import { useEffect, useState } from 'react';
import useConversations from '../zustand/useConversations';
import { toast } from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const red = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await red.json();

                if (!red.ok) {
                    throw new Error(data.message);
                }

                setMessages(data);
            } catch (error) {
                toast.error(error.message);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages };
}

export default useGetMessages;