// # Local import
import { FileView } from '../components'
import { initialFileStructure } from '../utils'

// # assets import
import '../assets/css/App.css'
import 'react-ui-tree/dist/react-ui-tree.css'

function App() {
  return (
    <div>
      <FileView initialFileTree={initialFileStructure} />
    </div>
  )
}

export default App
