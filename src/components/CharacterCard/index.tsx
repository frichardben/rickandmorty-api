import React, { useEffect, useState, Suspense } from 'react'
import { api } from '../../services'
import { Character } from '../../types'
import { Loading } from '../Loading'

const CharacterCard = () => {
  const [characterList, setCharacterList] = useState<Character[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    api
      .get('character')
      .then((res) => {
        setCharacterList(res.data.results)
        setLoading(false)
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
      {error && <p>{error}</p>}
      {characterList.map((item) => (
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

            {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default CharacterCard
