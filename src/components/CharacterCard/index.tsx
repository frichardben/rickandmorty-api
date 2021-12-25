import React, { useEffect, useState } from 'react'
import { api } from '../../services'

interface Character {
  id: number
  image: string
  name: string
}

enum Species {
  Alie = 'Alien',
  Human = 'Human',
  Unknown = 'Unknown',
  Poopybutthole = 'Poopybutthole'
}

const CharacterCard = () => {
  const [characterList, setCharacterList] = useState([])
  const [error, setError] = useState('')

  const fetchData = () => {
    api
      .get('character')
      .then((res) => {
        setCharacterList(res.data.results)
        //console.log(res.data.results)
      })
      .catch((err) => {
        setError(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {error && (
        <p>{error}</p>
      )}
      {characterList.map((item: Character) => (
       <div className="card" key={item.id}>
         <img className='card__image' src={item.image} alt={item.name} />
       <div className="card__body">
         <h5 className="card__title">{item.name}</h5>
         <p className="card__text">
           <span>Species</span>
           Human
         </p>
         <p className="card__text">
           <span>Origin</span>
           Terra
         </p>
         <a href="#" className="btn btn-primary">
           Go somewhere
         </a>
       </div>
     </div>
      ))}
    </>
  )
}

export default CharacterCard
