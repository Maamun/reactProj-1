const root = document.querySelector("#root");
function Message ({message}) {
  return (
    <div>
    {
      message ? <div>{message}</div>
                : <div>No Message</div> 
    }
    </div>
              )
}


ReactDOM.render(<Message message={null} />, root);
