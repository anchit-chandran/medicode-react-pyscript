
import './resources/css/App.css'

import HeroHead from './components/HeroHead.jsx';
import Cells from './components/Cells';

import content from './content';
import LearningObjectives from './components/LearningObjectives';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task0 from './components/Task0';

function App() {
  return (

    <div class="container">

      <HeroHead />

      <Cells content={content.LearningObjectives} toShow={<LearningObjectives content={content.LearningObjectives} />} sectionName='LearningObjectives' />
      <Cells content={content.Task0} toShow={<Task0 />} sectionName='Task0' />
      <Cells content={content.Task1} toShow={<Task1 />} sectionName='Task1' />
      <Cells content={content.Task2} toShow={<Task2 />} sectionName='Task2' />



    </div >

  );
}

export default App;
