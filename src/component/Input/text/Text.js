import UseSetObj from "../../../hook/setObject";
import "../input.css"


function Text({id, value, onChange, label}){
    const {setUseObj} = UseSetObj();

    const onChangeText = ( value ) => {
        setUseObj({onChange, value, id})
    } 

    return(
        <div className="box">
            <input 
                type="text"
                id={id}
                value={value}
                onChange={(e) => onChangeText(e.target.value)} 
                placeholder=""
                className="inputField"
            />
            {value !== null && value !== "" ? null : <span>{label}</span> }
        </div>
    )
}

export default Text;