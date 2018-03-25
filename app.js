const root = document.querySelector("#root");
const Message = props => <div>{props.msg}</div>;

class SayHello extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }
   render () {
     const {firstName, lastName} = this.props
    return (
      <div>
        Hello {firstName} {lastName}
      </div>
    )
   }
}

// SayHello.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired
// }

ReactDOM.render(<SayHello firstName={true} />, root);
