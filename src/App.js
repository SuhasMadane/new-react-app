function sum(){
 let style = {background:"blue",color:"orange"}

 return (
      <>
      <h4>Good Night</h4>
      <h4>{rst}</h4>
      <h4>10</h4>
      <h4>{value}</h4>
      {condn ? <h4>Good Night</h4> : <h4>Good Morning</h4>}
      <h4>{pi}</h4>
      <h4> ID: {user.id} , Name: {user.name}</h4>
      <h1 id="id1">Hello World</h1>
      <h1 id={"id1"}>Hello World</h1>
      <h1 id={`id1`}>Hello World</h1>
      <h1 id={id}>Hello World</h1>
      </>
  )
}
export default sum;