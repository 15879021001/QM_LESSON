
const user=[{
    name:'Tom',
    type:'cat'
},{
    name:'Jerry',
    type:'mouse'
}]
const element  = (
    <ul>
        { user.map((user,index)=> <li key={index}>{user.name}-{user.type}</li>) }
    </ul>
);
ReactDOM.render(element,document.getElementById('root'));

//--------------------------------------------------------------->
// const element = React.createElement(
//     'h1',{className:'greeting' },'Hello World'
// );
// ReactDOM.render(element,document.getElementById('root'));

// -------------------------------------------------------------->

// function format(user){
//     return user.firstName + ' ' + user.lastName
// }
// const name = 'Josh Perez';
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// }
// const element = (
//     <h1>
//         Hello,{ format(user) }
//     </h1>
// );
// ReactDOM.render(
//     <div>
//         {element}
//     </div>,
//     document.getElementById('root')
// )