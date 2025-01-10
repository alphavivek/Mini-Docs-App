import './App.css'
import ForeGround from './component/ForeGround'
import Main_Page_BackGround from './component/Main_Page_BackGround'

function App() {
  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Main_Page_BackGround />
        <ForeGround/>
      </div>
    </>
  )
}

export default App
