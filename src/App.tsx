import useFetchRepositories from './hooks/useRepos';
import CardComponent from './components/cardComponent';
import useFavoriteReposeStore from './store/favoriteRepos';

const App = () => {
  const { data, isLoading } = useFetchRepositories('vendjin');
  const favoriteReposIds = useFavoriteReposeStore(state => state.favoriteReposIds)

  if (isLoading) return <h3>Загрузка</h3>

  console.log(data)
  return (
    <>
      {data?.map(repository => (
        <CardComponent repository={repository}
          key={repository.id}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </>
  )
}

export default App