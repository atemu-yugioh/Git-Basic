import './App.css'
import { MyApp } from './component/useContext/MyApp'
import Theme from './component/useContext/Theme'

function App() {
  return (
    <div className='App'>
      {/* <RefComponent/> */}
      {/* <ForwardRefComponent /> */}
      {/* <Counter /> */}
      <Theme>
        <MyApp />
      </Theme>
    </div>
  )
}

export default App
