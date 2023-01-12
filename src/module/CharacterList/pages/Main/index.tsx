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


  const fetchData = () => {
    CharacterService.getAllCharacter().then((res: any) => {
      setCharacterList(res.data.results)
      setLoading(!loading)
      console.log(res.data.results)
    }).catch((err: Error) => {
      setError("Algo deu errado!")
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Search />
      <main>
        <section>
          <Suspense fallback={renderLoader()}>
            <CharacterCard character={characterList} error={error}/>
          </Suspense>
        </section>
      </main>
    </>
  )
}
