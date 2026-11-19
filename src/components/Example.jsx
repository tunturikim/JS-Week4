import {useEffect, useState, useRef} from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  /* Tämä ei triggeröi uudellen renderöintiä
  let traditionalCount = 0;
  const addWithoutState = () => {
    traditionalCount++;
    console.log(traditionalCount);
  }
  */

  const addWithState = () => {
    setCount(count + 1);
    console.log(count);
  };

  // 1. Ilman riippuvuustaulukkoa
  // useEffect(fn)
  useEffect(() => {
    console.log('UseEffect triggered');
  });

  // 2. Komponentin mount vaiheessa
  // useEffect(fn, [])
  useEffect(() => {
    console.log('UseEffect mount triggered');
  }, []);

  // 3. Mount vaiheessa sekä count - arvon muuttuessa
  // useEffect(fn, [count])
  useEffect(() => {
    console.log('UseEffect count triggered');
  }, [count]);

  // Käytetään useRef hookkia, jotta voidaan viitata DOM elementtiin
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={addWithState}>Add</button>
      <h3>useRef demo</h3>
      <input type="text" name="name" id="name" ref={inputRef} />
      <br />
      <button onClick={handleFocus}>focus button </button>
    </div>
  );
};

export default Example;
