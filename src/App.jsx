
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'

function App() {

  function handleClick() {
    alert('Button clicked')
  }

  const handleClick2 = () => {
    alert('clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>


      {/* <Users></Users> */}

      {/* <Team></Team> */}

      <Counter></Counter>

  
      <button onClick={handleClick} >handleClick</button>  {/* normal function */}

      <button onClick={handleClick2}>handleClick2</button>  {/* arrow  function */}

      <button onClick={() => { alert('Clicked on 3') }}>ClickedOn3</button> {/* inline arrow  function */}

      <button onClick={() => addToFive(3)}>Add Five</button> {/* addToFive function has been called in inline arrow  function */}
      
    </>
  )
}

export default App
