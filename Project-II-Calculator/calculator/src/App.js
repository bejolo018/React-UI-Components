import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import OperatorButtons from './components/ButtonComponents/OperatorButton';


const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    <div class='calculator'>
      <CalculatorDisplay />

      <ButtonContainer class='button' >
        <ActionButton text='clear'/>
        <OperatorButtons text='/' />
        <NumberButtons text='7' />
        <NumberButtons text='8'/>
        <NumberButtons text='9' />
        <OperatorButtons text='X' />
      </ButtonContainer>

      <ButtonContainer class='button' >
        <NumberButtons text='4' />
        <NumberButtons text='5'/>
        <NumberButtons text='6' />
        <OperatorButtons text='-' />
      </ButtonContainer>

      <ButtonContainer class='button' >
        <NumberButtons text='3' />
        <NumberButtons text='2'/>
        <NumberButtons text='1' />
        <OperatorButtons text='+' />
        <ActionButton text='0'/>
        <OperatorButtons text='=' />
      </ButtonContainer>
    </div>
  );
};

export default App;
