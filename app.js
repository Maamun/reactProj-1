const root = document.querySelector("#root");
const Message = props => <div>{props.msg}</div>;

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}
    </div>
  );
}
const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Hey, you should pass a string for ${propName} in ${componentName}  but you passed a ${typeof props[propName]} !`)
    }
  }
}
SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}
// SayHello.propTypes = {
//   firstName(props, propName, componentName) {
//     if (typeof props[propName] !== 'string') {
//       return new Error(`Hey, you should pass a string for ${propName} in ${componentName}  but you passed a ${typeof props[propName]} !`)
//     }
//   }
// }
ReactDOM.render(<SayHello firstName={true} />, root);
