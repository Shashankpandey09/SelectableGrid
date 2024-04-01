import SelectableGrid from './Components/SelectableGrid'
import './App.css'

function App() {
 

  return (
    <>
    <h1 style={{textAlign:"center"}}>Selectable Grid</h1>
    <SelectableGrid rows={15} cols={10} />
    </>
  )
}

export default App
