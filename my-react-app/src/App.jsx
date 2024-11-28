// NOTES
 // Code below can be used with interpolation
 const name = 'Harry';
 const x = 10;
 const y = 20;
 const names = ['Pi', 'Bi', 'Fi', 'Di'];
 const loggedIn = false;

// The below code goes in the return
<>
  <div className="text-5xl">App</div>
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


function App() {
 
}

export default App
