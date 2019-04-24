import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Social Card!</h3>
      {/* <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
@@ -16,7 +18,9 @@ const App = () => {
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      </p> */}
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};
