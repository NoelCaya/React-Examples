function Button(){

  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

    const name ="Save Changes"

    const handleClick = () =>{
      alert("Button Clicked");
    };

  return (
    <>
      <button onClick={handleClick} style ={mystyles}>{name}</button>
    </>
  )
}


function App() {

  return (
    <>
     <Button /> 

    </>
  )
}

export default App
