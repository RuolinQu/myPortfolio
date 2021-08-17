import React,{useState,useEffect} from 'react'

const Child1 = (props) => {
    
    console.log('ChildrenComponent rending');
    return <div onClick={props.handleChildren}>ChildrenComponent </div>;
}

export default Child1