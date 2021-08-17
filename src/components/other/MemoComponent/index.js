import React, { useState, useEffect} from 'react';
import Child1 from '../Child1';
// import Child2 from '../Child2 ';

const MemoComponent = () => {
    const [count, setCount] = useState(0);
    const handleChildren = () => {
      console.log('clicked ChildrenComponent');
    };
  
    const handleParent = () => {
      console.log('clicked ParentComponent');
      setCount(preCount => preCount + 1);
    };
  
    return (
      <div>
        <div onClick={handleParent}>ParentComponent --count =={count} </div>
        <Child1  handleChildren={handleChildren} />
      </div>
    );
  };
  
export default MemoComponent;