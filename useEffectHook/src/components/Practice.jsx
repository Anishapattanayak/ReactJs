import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(1)

    //first -> seide-effect function
    //second -> clean-up function
    //Third -> comma separated dependencies list

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])

    //variation:1
    //runs on every render
    // useEffect(()=>{
    //     alert("i will run on each render")
    // })


    //variation:2
    //that runs on only first render
    // useEffect(()=>{
    //     alert("i will run on only 1st render");
    // }, [])


    //variation:3
    // useEffect(()=>{
    //     alert("i will run every time when count is updated")
    // },[count])

    //variation:4
    //Multiple dependencies
    // useEffect(() => {
    //     alert("i will run every time when count/total is updated")
     
    // }, [count, total])


    //variation:5
    //iss bar let's add a cleanup function
    // useEffect(() => {
    //   alert("count is updated")
    
    //   return () => {
    //     alert("count is unmounted from ui");
    //   }
    // }, [count])
    
    



    function handleClick(){
        setCount(count+1);
        
    }
    function handleClickTotal(){
        setTotal(total+1);
    }
    return (
        <div>
            <button onClick={handleClick}>
                update count
            </button>
            <br />
            Count is: {count}
            <br />
             <button onClick={handleClickTotal}>
                update Toal
            </button>
            <br />
            total is: {total}

        </div>
    )
}

export default Practice
