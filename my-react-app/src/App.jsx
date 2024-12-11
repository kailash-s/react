// NOTES
 // Code below can be used with interpolation
 const name = 'Harry';
 const x = 10;
 const y = 20;
 const names = ['Pi', 'Bi', 'Fi', 'Di'];
 const loggedIn = false;

// The below code goes in the return
<>
  <div classNameName="text-5xl">App</div>
  {/* Inline styling can be used as well like below */}
  <p style={{ color: 'red' }}>Hello { name }</p>
  <p>
    The sum of {x} and {y} is {x+y}
  </p>
  <ul>
    { names.map((name, index) => (
      <li key={index}>{ name }</li>
    )) }
  </ul>
  {loggedIn ? <h1>Hello member</h1> : <h1>Hello guest</h1>}
</>

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Header from "./components/Header";

// components can also be on same page like below but first word needs to be in caps so it differs from a function
export const InternalComponent = () => {
  return <p>text</p>
}

const Menu = ({
  name
}) => {
  return <div className="bg-red-500">
    <span>This menu is for {name}</span>
    <ul>
      <li>Home</li>
      <li>Profile</li>
    </ul>
  </div>
};

function App() {

  return (
    <>
    <Navbar/>
    {/* <!-- Hero --> */}
    <Hero title="Test Title" subtitle="Subtitle"/>
    <Header>
      {/* children helps compose components by embedding other components inside elements within a parent component */}
      <Menu {...{ name: "Harry" }}/>
    </Header>
    <InternalComponent/>
    </>
  );
}

export default App
