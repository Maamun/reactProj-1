const root = document.querySelector("#root");
function tick () {
  const time = new Date().toLocaleTimeString()
const element = <div>IT is 
  <input value={time} />
  <input value={time} />
</div>
ReactDOM.render(element, root);
}


// DOM version 
// function tick () {
//   const time = new Date().toLocaleTimeString()
// const element = (
//   `<div>IT is 
//   <input value=${time} />
//   <input value=${time} />
// </div>`
// )
// root.innerHTML = element 
// }


 setInterval(tick, 1000);