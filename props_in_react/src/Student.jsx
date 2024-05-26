//Using PropTypes--- This will be helping fro debugging.
//Default Props ; Helps in showing default data if 
//component is added and does not contain any data

import PropTypes from "prop-types";

function Student (PROPS){

    return(

        <div className="student">
            <p>Name : {PROPS.name}</p>
            <p>Age: {PROPS.age}</p>
            <p>Student: {PROPS.isStudent ? "YES" : "NO" }</p>
        </div>
    );
}
Student.PropTypes ={
    name: PropTypes.string,
    age:PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,

}
export default Student