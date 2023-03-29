import React, { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';
import { api, } from '../../utils/api';
import { useDebounce } from '../../utils/utils'


function App() {
  const [search, setSearch] = useState('')
  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const hendleSearch = (search) => {
    api.searchProducts(search).then((data) => setCards([...data]))
  }

  const debounceValueInApp = useDebounce(search, 500)

  const hendleProductLike = (product) => {
    const isLike = product.likes.some(id => id === currentUser._id)
    api.changeLikeProductStatus(product._id, !isLike).then((newCard) => {
      const newCards = cards.map((c) => (c._id === newCard._id ? newCard : c))
      setCards(newCards)
    })
  }

  const hendleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData)
    })
  }

  useEffect(() => {
    hendleSearch(debounceValueInApp)
  }, [debounceValueInApp])

  useEffect(() => {
    Promise.all([api.getProductList(), api.getUserInfo()]).then(([productData, userData]) => {
      setCards(productData.products)
      setCurrentUser(userData)
    })
  }, [])

  return (
    <div className='app'>
      <Header setSearch={setSearch} hendleUpdateUser={hendleUpdateUser} />
      <Main cards={cards} currentUser={currentUser} hendleProductLike={hendleProductLike} search={search} />
      <Footer />
    </div>
  )
}

export default App;
