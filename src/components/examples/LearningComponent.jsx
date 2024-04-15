import FirstComponent from './FirstComponent';
import { FifthComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import ForthComponent from './ForthComponent';
import LearningJs from './LearningJs';

export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent/>
        <ForthComponent/>
        <FifthComponent/>
        <LearningJs/>
      </div>
    );
  }
  