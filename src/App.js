
import './resources/css/App.css'

import HeroHead from './components/HeroHead.jsx';
import Cells from './components/Cells';

import content from './content';
import LearningObjectives from './components/LearningObjectives';
import Task1 from './components/Task1';

function App() {
  return (

    <div class="container">

      <HeroHead/>

      <Cells content = {content.LearningObjectives} toShow={<LearningObjectives content={content.LearningObjectives}/>} sectionName='LearningObjectives'/>

      <Cells content = {content.Task1} toShow={<Task1/>} sectionName='Task1'/>
      
     
      <section>
        
      </section >
      </div >

  );
}

export default App;
