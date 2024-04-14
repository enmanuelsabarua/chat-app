import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                // Fetch conversations from the server
                const res = await fetch("/api/users");
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || "Failed to fetch conversations");
                }

                setConversations(data);
            } catch (error) {
                toast.error(error.message);
                console.error("Error fetching conversations: ", error);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations;