import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.css'
import './MediaStyle.css'
import Search from './Components/Search'
import Science from './Components/Science'
import Art from './Components/Art'
import World from './Components/World'
import Home from './Components/Home'
import Header from './Components/Header'
class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Container fluid>
          <Header/>
          <Switch>
           <Route exact path="daily-focus/" component={Home}/>
           <Route exact path="daily-focus/world" component={World}/>
           <Route exact path="daily-focus/art" component={Art}/>
           <Route exact path="daily-focus/science" component={Science}/>
           <Route exact path="daily-focus/search" component={Search}/>
          </Switch>
        </Container>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
