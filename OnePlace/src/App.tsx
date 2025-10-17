import './App.css'
import Home from './pages/home'
import CreateYourStyle from './components/CreateYourStyle'
import NewItems from './components/NewItems'
import CategoryCardProps from './components/CategoriesGrid'
import Categories from "./components/CategoriesGrid"


function App() {

  return (
    <>
      < Home />
      <NewItems/>
      <CreateYourStyle />
      <CategoryCardProps/>
      <Categories />


    </>
  )
}

export default App
