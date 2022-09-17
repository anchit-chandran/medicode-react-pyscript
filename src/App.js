
import './resources/css/App.css'

import HeroHead from './components/HeroHead.jsx';
import Cells from './components/Cells';

import content from './content';
import LearningObjectives from './components/LearningObjectives';
import Task0 from './components/Task0';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';

function App() {
  return (

    <div class="container">

      <HeroHead />

      <Cells content={content.LearningObjectives} toShow={<LearningObjectives content={content.LearningObjectives} />} sectionName='LearningObjectives' />
      <Cells content={content.Task0} toShow={<Task0 task={content.Task0.title}/>} sectionName='Task0' />
      <Cells content={content.Task1} toShow={<Task1 task={content.Task1.title}/>} sectionName='Task1' />
      <Cells content={content.Task2} toShow={<Task2 task={content.Task2.title}/>} sectionName='Task2' />
      <Cells content={content.Task3} toShow={<Task3 task={content.Task3.title}/>} sectionName='Task3' />
      <Cells content={content.Task4} toShow={<Task4 task={content.Task4.title}/>} sectionName='Task4' />
      <Cells content={content.Task5} toShow={<Task5 task={content.Task5.title}/>} sectionName='Task5' />
      <Cells content={content.Task6} toShow={<Task6 task={content.Task6.title}/>} sectionName='Task6' />


    </div >

  );
}

export default App;
