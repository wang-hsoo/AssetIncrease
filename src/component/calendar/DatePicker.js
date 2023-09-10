import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseSetObj from "../../hook/setObject";
import "../Input/input.css"

function SelectDate({startDate, onChange, id, label}){
    const {setUseObj} = UseSetObj();
    
    return(
        <div className="box">
            {/* <span>{label}</span> */}
            <DatePicker
                dateFormat={"yyyy-MM-dd"}
                selected={startDate} 
                onChange={(value) => {setUseObj({onChange, value, id})}} 
                className="inputField"
            />
        </div>
    )
}

export default SelectDate;