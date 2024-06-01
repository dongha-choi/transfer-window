import React, { createContext, useContext } from 'react';
// import { db } from '../config/firebase';
import { getDatabase, ref, set, get } from 'firebase/database';
import { useAuth } from './AuthContext';

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }) {
  const { uid } = useAuth();
  // const userRef = db.ref(`users/${uid}`);
  const addToRoster = async (key, data) => {
    try {
      const db = getDatabase();

      const rosterRef = ref(db, `users/${uid}/roster`);
      const snapshot = await get(rosterRef);
      if (snapshot.exists()) {
        const rosterData = snapshot.val();
        for (const existingKey in rosterData) {
          if (existingKey === key) {
            throw new Error(`${data.player.name} is already in your roster!`);
          }
        }
      }

      const userRosterRef = ref(db, `users/${uid}/roster/${key}`);
      await set(userRosterRef, data);
    } catch (error) {
      throw error;
    }
  };
  const addToScout = async (key, data) => {
    try {
      const db = getDatabase();

      const scoutRef = ref(db, `users/${uid}/scout`);
      const snapshot = await get(scoutRef);
      if (snapshot.exists()) {
        const scoutData = snapshot.val();
        for (const existingKey in scoutData) {
          if (existingKey === key) {
            throw new Error(
              `You've already sent a scout offer to ${data.player.name}!`
            );
          }
        }
      }

      const userScoutRef = ref(db, `users/${uid}/scout/${key}`);
      await set(userScoutRef, data);
    } catch (error) {
      throw error;
    }
  };
  const value = {
    addToRoster,
    addToScout,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
