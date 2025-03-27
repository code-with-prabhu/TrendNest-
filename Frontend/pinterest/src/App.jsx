import './app.css'
import Gallery from './Components/gallery/Gallery'
import LeftBar from './Components/leftbar/LeftBar'
import TopBar from './Components/topbar/TopBar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App