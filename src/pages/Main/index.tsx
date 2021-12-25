import React from 'react'
import CharacterCard from '../../components/CharacterCard'
import Search from '../../components/Search'

export const Main = () => {
  return (
    <>
      <Search />
      <main>
        <section>
          <CharacterCard />
        </section>
      </main>
    </>
  )
}
