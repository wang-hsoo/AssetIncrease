import { styled } from "styled-components";
import Menu_icon from "../asset/Menu_icon";
import UseWidhtEvent from "../hook/setWidthEvent";

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #17181e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h1 {
        margin-left: 5%;
        color : #ffffff ;
    }
    & > div{
        margin-right: 5%;
    }
    & > div > svg{
        width: 28px;
        color: #ffffff;
        cursor: pointer;
    }
`


function Header({onClick}){
    const { onOff } = UseWidhtEvent(735)

    
    return(
        <Container>
            <h1>asset increase</h1>
            {onOff ? 
                <div onClick={() => onClick(e => !e)}>
                    <Menu_icon /> 
                </div>
            : null}
        </Container>
    )
}

export default Header;