const Mylist = () =>{
    const lists = ['Car', 'Airplane'];
    const style = {'font-size': '20px', 'background': 'yellow'}

return (<ul style={style}>
    <li style={style}>{lists[0]}</li>
    <li style={style}>{lists[1]}</li>
</ul>);
};
export default Mylist;
