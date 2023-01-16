import React, { lazy, Suspense, useEffect, useState } from 'react'

import Search from '@module/CharacterList/components/Search'
import { LoadingSkeleton } from '@module/CharacterList/components/LoadingSkeleton'
import { Character } from '@shared/types'
import { CharacterService } from '@module/CharacterList/services'


export const CharacterCard = lazy(
  () => import('../../components/CharacterCard')
)
const renderLoader = () => <LoadingSkeleton />

export const Main = () => {

  const [characterList, setCharacterList] = useState<Character[]>([])
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')


  const fetchData = () => {
    CharacterService.getAllCharacter().then((res: any) => {
      setLoading(!loading)
      setCharacterList(res.data.results)
      setLoading(!loading)
    }).catch((err: Error) => {
      setError("Algo deu errado!")
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredCharacter = search.length > 0
    ? characterList.filter(character => character.name.includes(search))
    : []

  return (
    <>
      <Search Onsearch={setSearch} search={search}/>
      <main>
        <section>
          <Suspense fallback={renderLoader()}>
            {search.length > 0 ? (
              <CharacterCard character={filteredCharacter} error={error}/>
            ): (
              <CharacterCard character={characterList} error={error}/>
            )}

          </Suspense>
        </section>
      </main>
    </>
  )
}
