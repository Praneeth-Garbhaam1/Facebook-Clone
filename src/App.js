import './App.css';
import Header from './header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? <Login/>:( 
        <div className="app-content">
              <Header />
              <div className="app-body">
                <Sidebar className="sidebar"/>
                 <Feed className="feed"/>
                <Widgets className="widget"/> 
              </div>
        </div>
     )} 
    </div>
  );
}

export default App;
