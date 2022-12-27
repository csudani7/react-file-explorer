// # Local import
import { FileView } from '../components';
import { initialFileStructure } from '../utils';

function App() {
  return (
    <div>
      <FileView initialFileTree={initialFileStructure} />
    </div>
  );
}

export default App;
