function sum(){
 let rst = "Good Night";
 let value = 10;
 let pi = 3.14;
 let condn = true;
 let user = {id:105,name:"Suhas"};
 let id = "id1";

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
      <h1 id={`id1`}></h1>
      <h1 id></h1>
      
      
      
      </>
  )
}
export default sum;