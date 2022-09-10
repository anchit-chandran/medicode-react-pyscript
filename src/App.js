
import './resources/css/App.css'

import HeroHead from './components/HeroHead.jsx';
import Cells from './components/Cells';

import content from './content';
import LearningObjectives from './components/LearningObjectives';
import Task0 from './components/Task0';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

function App() {
  return (

    <div class="container">

      <HeroHead />

      <Cells content={content.LearningObjectives} toShow={<LearningObjectives content={content.LearningObjectives} />} sectionName='LearningObjectives' />
      <Cells content={content.Task0} toShow={<Task0 task={content.Task0.title}/>} sectionName='Task0' />
      <Cells content={content.Task1} toShow={<Task1 task={content.Task1.title}/>} sectionName='Task1' />
      <Cells content={content.Task2} toShow={<Task2 task={content.Task2.title}/>} sectionName='Task2' />
      <Cells content={content.Task3} toShow={<Task3 task={content.Task3.title}/>} sectionName='Task3' />



    </div >

  );
}

export default App;
