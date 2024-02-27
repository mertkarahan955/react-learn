// propTypes: a mechanism that ensures that the passed value is of the
// correct data type. age:  PropTypes.number
import PropTypes from 'prop-types';
function Student(props){

    return(
        <div className = "student">
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? (props.name + " ogrenci") : (props.name + " ogrenci degil")  }</p>
        </div>
    );
}

// sets values to the properties of the component
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}
Student.defaultProps = {
    name: "No name",
    age: 0,
    isStudent: false
}
export default Student;