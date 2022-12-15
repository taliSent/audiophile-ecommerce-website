import "./App.scss";
import Input from "./components/Input";
import { INPUT_TYPES } from "./model/enums";

const App = () => {
  const onClick = () => {};
  return (
    <div className='App'>
      <Input
        title='Name'
        type={INPUT_TYPES.TEXT}
        errorMessage={"true"}
        onClick={onClick}
      />
      <Input title='Name' type={INPUT_TYPES.TEXT} onClick={onClick} />
      <Input title='e-commerce' type={INPUT_TYPES.RADIO} onClick={onClick} />
    </div>
  );
};

export default App;
