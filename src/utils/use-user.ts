import { useEffect, useState } from 'react';
import firebase, { auth } from '../services/firebase';

const useUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => auth.onAuthStateChanged(user => setUser(user)), []);

  return user;
};

export default useUser;
