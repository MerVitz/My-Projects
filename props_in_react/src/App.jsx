// PROPS --These are the read- only properties that are  are available 
// A paraent Component will be able to send data to other child components because of the PROPS.
//
import Student from "./Student.jsx";

function App (){

  return(
    <>
    <Student name= "Amakalu Vitalis" age={20} isStudent={true}/>
    <Student name= "Victor Arnold" age={30} isStudent={false}/>
    <Student></Student>
    </>
  );
}

export default App