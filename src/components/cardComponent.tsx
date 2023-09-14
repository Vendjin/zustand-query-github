import React from 'react'
import { IRepos } from '../hooks/types'
import useFavoriteReposeStore from '../store/favoriteRepos';
type ICardProps = {
    repository: IRepos;
    isFavorite: boolean;
}

const CardComponent = ({ repository, isFavorite }: ICardProps) => {
    const addFavoriteRepo = useFavoriteReposeStore(state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavoriteReposeStore(state => state.removeFavoriteRepo)

    const toggleFavorite =() => {
        if (isFavorite) {
            removeFavoriteRepo(repository.id)
        }
        else {
            addFavoriteRepo(repository.id)
        }
    }

    return (
        <div>
            <h2>{repository.name}</h2>
            <button onClick={toggleFavorite}>
                {isFavorite ? 'dislike' : 'like'}
            </button>
        </div>
    )
}

export default CardComponent