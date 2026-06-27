import './App.css'
import Card from './Components/Card'

function App() {

  let myObj = {
    username: "Babar",
    age: 31,
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='mb-5 font-bold bg-purple-400 text-black p-4 rounded-xl'> Test Tailwind </h1>

      <Card channel = "Babar" someObj = {myObj} btn = "Read More"/>
      <Card channel = "Amir" some = {newArr}/>
    </>
  )
}

export default App
