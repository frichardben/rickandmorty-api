import React from 'react'

interface ISearchProps {
  Onsearch: (e: string) => void
  search: string
}

const Search = ({ Onsearch, search }: ISearchProps): JSX.Element => {

  return (
    <header className="header">
      <form className="search" aria-labelledby="search">
        <label>
          <h1 className="search__title">Rick and Morty</h1>
          <input
            className="search__input"
            type="search"
            placeholder="Search by characteres"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={e => Onsearch(e.target.value) }
            value={search}
          />
        </label>
      </form>
    </header>
  )
}

export default Search
