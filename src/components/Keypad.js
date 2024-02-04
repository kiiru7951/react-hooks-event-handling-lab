// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
    event.preventDefault();
    console.log("Entering password...")
2      }
    return (
        <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..."
        />
    )
}

export default Keypad;