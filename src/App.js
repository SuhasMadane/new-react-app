function sum(){
  let condition = false;
  //meaning of 1st statement is whwn condition is 
  //true then execute the next element if not then 
  //do not execute
  // if yo
  return (
        <>
        {condition && <h1>Hello Suhas</h1>} 
        {condition ? <h3>Welcome to Cdac</h3> : <h3 style={{backgroundColor:"red",color:"white"}}>Welcome to hell</h3>}
        
        </>
  )
}
export default sum;