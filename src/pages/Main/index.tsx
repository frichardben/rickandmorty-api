import React, { lazy, Suspense } from 'react'

import Search from '../../components/Search'
import { Loading } from '../../components/Loading'

export const CharacterCard = lazy(
  () => import('../../components/CharacterCard')
)
const renderLoader = () => <Loading />

export const Main = () => {
  return (
    <>
      <Search />
      <main>
        <section>
          <Suspense fallback={renderLoader()}>
            <CharacterCard />
          </Suspense>
        </section>
      </main>
    </>
  )
}
