import React from 'react';
import MyComponent from './components/myComponent';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Inline from './components/Inline';
import FormComponents from './components/FormComponents';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import RefsDemo from './components/RefsDemo';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">

      {/* <NameList /> */}
      {/* <ParentComponents /> */}
      {/* <UserGreeting /> */}
      {/* <Inline /> */}
      {/* <FormComponents /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <RefsDemo /> */}
      {/* <ErrorBoundary /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      {/* <User render={(isloggedin) => isloggedin ? "Ashish" : "Bye"} /> */}

      <Counter render={(count, IncrementCount) => (
        <ClickCounterTwo count={count} IncrementCount={IncrementCount} />

      )} />

      <Counter render={(count, IncrementCount) => (
        <HoverCounterTwo count={count} IncrementCount={IncrementCount} />

      )} />

    </div>
  );
}

export default App;
