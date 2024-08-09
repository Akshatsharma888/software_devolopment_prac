import PropTypes from 'prop-types';

// default props used when the value is not assigned to a parameter of function.

function Student({ name = 'xyzx', age = 404 }) {
  return (
    <div className='student'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Proptypes is a mechanism to ensure that the passed value is of correct data type. exa = age = proptypes.number.
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default Student;