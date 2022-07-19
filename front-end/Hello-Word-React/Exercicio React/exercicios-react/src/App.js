import './App.css';
import Header from './header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['take care', 'feed', 'take a shower'];

function App() {
  return (
    <div>
      <Header/>
         <ol>
          {tasks.map((taskss) =>{
            return (
              Task(taskss)
              );
          })}
        </ol>
          <Content/>
      <Footer/>
    </div>
  );
}

export default App;