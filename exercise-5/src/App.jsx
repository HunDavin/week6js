import Card from "./components/Card";
import { TEACHERS } from "./data";
function App() {
  return <>{/* Your code  here */
    <div className="container d-flex gap-2 my-3">
      {TEACHERS.map((teacher)=>(<Card user={teacher} />))}
    </div>
  }</>;
}

export default App;
