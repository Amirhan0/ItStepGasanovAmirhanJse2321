import { differences } from "./data";
import {DifferencesComponent} from "./Components/DifferencesComponent";
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <div>
        <DifferencesComponent differences={differences} />
      </div>
    </div>
  );
}

export default App;
