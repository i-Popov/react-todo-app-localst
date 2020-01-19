import React, { Fragment } from 'react';

import ToDo from './containers/Todo/Todo';
import Title from './components/Title/Title';

const App = () => (
    <Fragment>
      <Title title="ToDo App" />
      <ToDo />
    </Fragment>
);

export default App;
