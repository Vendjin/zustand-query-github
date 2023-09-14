import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';


type favoriteReposIdsState = {
    favoriteReposIds: number[];
    addFavoriteRepo: (id: number) => void;
    removeFavoriteRepo: (id: number) => void;
}

const useFavoriteReposeStore = create<favoriteReposIdsState>()(
    devtools(
        persist(
            (set) => ({
                favoriteReposIds: [],
                addFavoriteRepo: (id: number) => set((state) => ({
                    favoriteReposIds: [...state.favoriteReposIds, id]
                })),
                removeFavoriteRepo: (id: number) => set(state => ({
                    favoriteReposIds: state.favoriteReposIds.filter(repoId => repoId !== id)
                }))
            }), {
                name: 'favorite-repos', // name of the item in the storage (must be unique)
                storage: createJSONStorage(() => sessionStorage),
        }
        )
    )
)


export default useFavoriteReposeStore;