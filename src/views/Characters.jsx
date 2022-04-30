import { useEffect, useState } from 'react';
import Character from '../components/Character';

export default function Characters() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setIsResults] = useState([]);

  const isSearching = !!search;
  const characterList = isSearching ? results : characters;
  const noResults = !results.length && isSearching;

  useEffect(() => {
    const getTheOfficeCharacters = async () => {
      const res = await fetch('https://www.officeapi.dev/api/characters');
      const data = await res.json();
      setCharacters(data.data);
      setIsLoading(false);
    }
    getTheOfficeCharacters();
  }, [])

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const filteredCharacters = characters.filter((character) => {
      return (
        character.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        character.lastname.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
    console.log(filteredCharacters);
    setIsResults(filteredCharacters);
  }

  return (
    <>
    <h1>The Office Characters</h1>
    {
      isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <input
        placeholder="Find a character"
        value={search}
        onChange={(e) => handleSearch(e)}
        />
        <ul>
          {
            characterList.map((character) => {
              return (
              <div key={character._id}>
                  <Character character={character}/>
              </div>
              )
            })
          }
      </ul>
      </>
      )
    }
    {noResults && <p>No results</p>}
    </>
  )
}