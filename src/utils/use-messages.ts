import { useEffect, useState } from 'react';
import { getMessages, subscribeToMessages } from '../services/messages';
import { Message } from '../types';
import useUser from './use-user';

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const user = useUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchMessages = async () => {
      const snapshot = await getMessages();
      setMessages(snapshot.docs.reverse().map(snapshot => snapshot.data() as Message));
    };

    fetchMessages();

    const unsubscribe = subscribeToMessages(snapshot =>
      setMessages(snapshot.docs.reverse().map(snapshot => snapshot.data() as Message)),
    );

    return () => unsubscribe();
  }, [user]);

  return messages;
};

export default useMessages;
