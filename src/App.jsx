import './App.css'
import FromTo from './components/FromTo'
import GsapScrollTrigger from './components/GsapScrollTrigger'
import GsapStagger from './components/GsapStagger'
import GsapTimeline from './components/GsapTimeline'

function App() {

  return (
    <>
      <h1>React + GSAP</h1>
      <FromTo />
      {/* <GsapTimeline /> */}
      <GsapStagger />
      <GsapScrollTrigger />
    </>
  )
}

export default App
