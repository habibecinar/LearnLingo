import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // User değiştiğinde favorileri localStorage'dan yükle
  useEffect(() => {
    const loadFavorites = () => {
      if (user) {
        const storedFavorites = localStorage.getItem(`favorites_${user.uid}`);
        const loadedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        setFavorites(loadedFavorites);
      } else {
        setFavorites([]);
      }
    };
    
    loadFavorites();
  }, [user]);

  // Favorileri localStorage'a kaydet
  const saveFavorites = (newFavorites) => {
    if (user) {
      localStorage.setItem(
        `favorites_${user.uid}`,
        JSON.stringify(newFavorites)
      );
      setFavorites(newFavorites);
    }
  };

  const addToFavorites = (teacher) => {
    const newFavorites = [...favorites, teacher];
    saveFavorites(newFavorites);
  };

  const removeFromFavorites = (teacherId) => {
    const newFavorites = favorites.filter((t) => t.id !== teacherId);
    saveFavorites(newFavorites);
  };

  const isFavorite = (teacherId) => {
    return favorites.some((t) => t.id === teacherId);
  };

  const toggleFavorite = (teacher) => {
    if (isFavorite(teacher.id)) {
      removeFromFavorites(teacher.id);
    } else {
      addToFavorites(teacher);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
