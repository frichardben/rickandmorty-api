import React from 'react'

const Search = (): JSX.Element => {
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
          />
        </label>
      </form>
    </header>
  )
}

export default Search
