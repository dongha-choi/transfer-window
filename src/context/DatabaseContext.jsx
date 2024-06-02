import React, { createContext, useContext } from 'react';
// import { db } from '../config/firebase';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { useAuth } from './AuthContext';

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }) {
  const { uid } = useAuth();
  // const userRef = db.ref(`users/${uid}`);
  let db;
  try {
    db = getDatabase();
  } catch (error) {
    throw error;
  }
  const getRosterData = async (path) => {
    try {
      const snapshot = await get(ref(db, `users/${uid}/roster`));
      return snapshot.val();
    } catch (error) {
      throw error;
    }
  };
  const getScoutData = async (path) => {
    try {
      const snapshot = await get(ref(db, `users/${uid}/scout`));
      return snapshot.val();
    } catch (error) {
      throw error;
    }
  };
  const addToRoster = async (key, data) => {
    try {
      const rosterData = await getRosterData();
      for (const existingKey in rosterData) {
        if (existingKey === key) {
          throw new Error(`${data.player.name} is already in your roster!`);
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
      const scoutData = await getScoutData();
      for (const existingKey in scoutData) {
        if (existingKey === key) {
          throw new Error(
            `You've already sent a scout offer to ${data.player.name}!`
          );
        }
      }

      const userScoutRef = ref(db, `users/${uid}/scout/${key}`);
      await set(userScoutRef, data);
    } catch (error) {
      throw error;
    }
  };
  // type = roster | scout
  const deletePlayer = async (key, type) => {
    try {
      const userRosterRef = ref(db, `users/${uid}/${type}/${key}`);
      await remove(userRosterRef);
    } catch (error) {
      throw error;
    }
  };
  const value = {
    getRosterData,
    getScoutData,
    addToRoster,
    addToScout,
    deletePlayer,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
