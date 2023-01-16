import React from 'react'
import { Character } from '@shared/types'


interface ListCharacterProps  {
  character: Array<Character>
  error: string
}

const CharacterCard = ({ character, error }: ListCharacterProps) => {

  return (
    <>
      {error && <p>{error}</p>}
      {character.map((item) => (
        <div className="card" key={item.id}>
          <img
            className={`card__image ${item?.status === 'Dead' ? 'dead' : ''}`}
            src={item.image}
            alt={item.name}
          />
          <div className="card__body">
            <h5 className="card__title">{item.name}</h5>
            <p className="card__text">
              <span>Species</span>
              {item.species}
            </p>

            <p className="card__text">
              <span>Gender</span>
              {item.gender}
            </p>

            <p className="card__text">
              <span>Status</span>
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CharacterCard
