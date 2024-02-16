import img1 from './assets/0801.png'
import img2 from './assets/0802.png'
import img3 from './assets/0803.png'
import img4 from './assets/0804.png'


function App() {
  return (
    <div style={{ width: '100vw', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <img src={img1} alt="Example" style={{ height: "100%", width: "100%" }} />
      <img src={img2} alt="Example" style={{ height: "100%", width: "100%" }} />
      <img src={img3} alt="Example" style={{ height: "100%", width: "100%" }} />
      <img src={img4} alt="Example" style={{ height: "100%", width: "100%" }} />
    </div>
  )
}

export default App
