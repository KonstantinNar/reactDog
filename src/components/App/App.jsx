import React, { useContext, useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import './App.css';
import { api, } from '../../utils/api';
import { useDebounce } from '../../utils/utils'
import { Product } from '../Product/Product';
import { Route, Routes, } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { CardsContext } from '../../context/CardsContext';


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

  const setSort = (data) => {
    console.log(data);
    switch (data) {
      case 'Популярные': {
        const newCards = cards.sort((a, b) => b.likes.length - a.likes.length)
        return setCards([...newCards])
      }
      case 'Новинки': {
        const newCards = cards.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        console.log(newCards);
        return setCards([...newCards])
      }
      case "Сначала дорогие": {
        const newCards = cards.sort((a, b) => b.price - a.price)
        return setCards([...newCards])
      }
      case "Сначала дешёвые": {
        const newCards = cards.sort((a, b) => a.price - b.price)
        return setCards([...newCards])
      }
    }
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

  const userContext = { currentUser, hendleProductLike, hendleUpdateUser }
  const cardsContext = { cards, search, setSearch, setSort }

  return (
    <div className='app'>
      <CardsContext.Provider value={cardsContext}>
        <UserContext.Provider value={userContext}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}>
            </Route>
            <Route path='/product/:productId' element={<Product />}>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </CardsContext.Provider>

    </div>
  )
}

export default App;
