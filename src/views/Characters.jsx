import { useEffect, useState } from 'react';

export default function Characters() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const characterList = characters;

  useEffect(() => {
    const getTheOfficeCharacters = async () => {
      const res = await fetch('https://www.officeapi.dev/api/characters');
      const data = await res.json();

      setCharacters(data);
      setIsLoading(false);
    }
  })

  return (
    <>
    {
      isLoading ? (
        <p>Loading...</p>
      ) : (

        <ul>
          {
            characterList.map((character) => {
              <div key={character.id}>
                <li>
                  <Character character={character}/>
                </li>
              </div>
            })
          }
      </ul>
      )
    }
    </>

  )
}