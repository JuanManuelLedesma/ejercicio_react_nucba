import Search from "../../components/search/Search";
import Loader from "../../components/loader/Loader";
import Pokemon from "../../components/PokemonCard/card/Card";
import { useAxios } from "../../hooks/useAxios"


const PokeApi = () => {
const { data, isLoading, error, handleSubmit } = useAxios();

return (
    <>
      <Search handleSubmit={ handleSubmit } />
      { isLoading && <Loader /> }
      { error && <h2 style={{ color: 'red' }}> { error } </h2> }
      {data && <Pokemon {...data} />}
    </>
);
}

export default PokeApi;
