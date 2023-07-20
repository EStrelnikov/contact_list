import { makeAutoObservable } from "mobx";
import { ContactDto } from 'src/types/dto/ContactDto';

export const favoritesStore = makeAutoObservable({
    favorites: [] as ContactDto['id'][],
    toggleFavoriteById(id: ContactDto['id']) {
        const hasFavorite = favoritesStore.favorites.includes(id);
        if (hasFavorite) {
            favoritesStore.favorites = favoritesStore.favorites.filter(
                (item) => item !== id,
            )
        } else {
            favoritesStore.favorites = [...favoritesStore.favorites, id]
        }
    },
    hasFavoriteById(id: ContactDto['id']) {
        return favoritesStore.favorites.includes(id);
    }
})