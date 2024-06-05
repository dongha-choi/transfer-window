import React, { createContext, useContext } from 'react';
import { app } from '../config/firebase';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from 'firebase/storage';

const StorageContext = createContext();

export const useStorage = () => useContext(StorageContext);

export function StorageProvider({ children }) {
  const storage = getStorage(app);

  const uploadProfile = async (id, profile) => {
    try {
      const storageRef = ref(storage, `profiles/${id}`);
      await uploadBytes(storageRef, profile);
    } catch (error) {
      throw error;
    }
  };

  const fetchProfileUrls = async () => {
    try {
      const profilesRef = ref(storage, 'profiles');
      const files = await listAll(profilesRef);
      const profileUrls = [];

      await Promise.all(
        files.items.map(async (fileRef) => {
          const id = fileRef.name;
          const downloadUrl = await getDownloadURL(fileRef);
          profileUrls.push({ id: id, url: downloadUrl });
        })
      );
      return profileUrls;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    uploadProfile,
    fetchProfileUrls,
  };
  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}
