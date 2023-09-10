

function UseSetObj(){
    
    const setUseObj = ({onChange, value, id}) => {
        onChange( pre => {
            return {
                ...pre,
                [id]: value
            }
        })
    }
    
    return {setUseObj};

}

export default UseSetObj;