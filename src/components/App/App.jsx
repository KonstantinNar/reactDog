import React, { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';
import data from '../../data/data.json'


function App() {

  const [search, setSearch] = useState('')
  const [cards, setCards] = useState(data)

  useEffect(() => {

    const newState = data.filter((e) => ((e.name.toLowerCase()).includes(search.toLowerCase())))
    setCards(newState)
  }, [search])

  return (
    <div className='app'>
      <Header setSearch={setSearch} />
      <Main cards={cards} />
      <Footer />
    </div>
  )
}

export default App;
