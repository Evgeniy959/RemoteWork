const MyInput = () => {
    const placeHold = 'Title';
    const style = {'font-size': '36px', 'font-color': "white", 'background': 'green'}
    return (
        <input style={style} type="text" placeholder={placeHold} value=""/>
    );
};
export default MyInput;
