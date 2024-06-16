// src/hooks/useUserInfo.js
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (auth.currentUser) {
                const docRef = doc(db, 'usuarios', auth.currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserInfo(docSnap.data());
                } else {
                    console.log("documento no encontrado!");
                }
            }
        };
        fetchUserInfo();
    }, []);

    return userInfo;
};

