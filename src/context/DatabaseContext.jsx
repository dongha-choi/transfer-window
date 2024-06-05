import React, { createContext, useContext } from 'react';
// import { db } from '../config/firebase';
import { getDatabase, ref, set, get, remove, child } from 'firebase/database';
import { useAuth } from './AuthContext';

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export function DatabaseProvider({ children }) {
  const { uid } = useAuth();
  let db;
  try {
    db = getDatabase();
  } catch (error) {
    throw error;
  }
  console.log('DatabaseProvider uid from authcontext: ', uid);

  const addUser = async (newUid, user) => {
    try {
      const { password, ...userInfoWithoutPassword } = user;
      console.log('What is the uid? addUser: uid is ', newUid);
      const userInfoRef = ref(db, `users/${newUid}/userInfo`);
      await set(userInfoRef, userInfoWithoutPassword);
    } catch (error) {
      throw error;
    }
  };
  const getUserInfo = async () => {
    try {
      console.log('What is the uid? getUserInfo: uid is ', uid);
      const snapshot = await get(ref(db, `users/${uid}/userInfo`));
      return snapshot.val();
    } catch (error) {
      throw error;
    }
  };

  const getRosterData = async () => {
    try {
      const snapshot = await get(ref(db, `users/${uid}/roster`));
      return snapshot.val();
    } catch (error) {
      throw error;
    }
  };
  const getScoutData = async () => {
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
  // type = 'roster' | 'scout'
  const deletePlayer = async (key, type) => {
    try {
      const userPlayerRef = ref(db, `users/${uid}/${type}/${key}`);
      await remove(userPlayerRef);
    } catch (error) {
      throw error;
    }
  };
  const enrollPlayer = async (player) => {
    try {
      const playerRef = ref(db, `players/${player.id}`);
      await set(playerRef, player);
    } catch (error) {
      throw error;
    }
  };
  const fetchPlayers = async () => {
    try {
      const playersRef = ref(db, 'players');
      const snapshot = await get(child(playersRef, '/'));
      const players = [];

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          players.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
      }

      return players;
    } catch (error) {
      throw error;
    }
  };
  const value = {
    addUser,
    getUserInfo,
    getRosterData,
    getScoutData,
    addToRoster,
    addToScout,
    deletePlayer,
    enrollPlayer,
    fetchPlayers,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
