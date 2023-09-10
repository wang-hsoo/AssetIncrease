
import { useDispatch, useSelector } from 'react-redux';
import { path } from '../state/commonSlice';
import { styled } from 'styled-components';
import User_icon from '../asset/User_icon';
import Money_icon from '../asset/Money_icon';
import UseWidhtEvent from '../hook/setWidthEvent';

const Container = styled.ul`
    width: 15vw;
    min-width: 150px;
    height: 100%;
    background-color: #ffffff;
    border-right: 2px solid #e0e0e0;
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.8);
`
const Li = styled.li`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&display=swap');
        width: 100%;
        height: 40px;
        color: #1e2329;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 3px double white;
        background-color:  ${(props) => (props.path ? "rgba(49,105,255,.1)" : "#ffffff")};
        
        cursor: pointer;
        & > div{
            font-family: 'Open Sans', sans-serif !important;
            font-size: 14px;
            color: ${(props) => (props.path ? "#3169ff" : "#333333")};
            font-weight: ${(props) => (props.path ? "600" : "100")};
        }

        & > svg{
            width: 20px;
            height: 20px;
            margin: 0 25px 0 20px;
            
        }
`

function Left(){
    const Menu = [
        {
            "path": "/user",
            "route" : "MY INFO",
            "icon" : <User_icon />
        },
        {
            "path":"/increase",
            "route": "inCrease",
            "icon" : <Money_icon />
        }
        // {
        //     "path" : "/menu1",
        //     "route" : "menu1"
        // },
        // {
        //     "path": "/menu2",
        //     "route" : "menu2"
        // }
    ];

    const dispatch = useDispatch();
    const current = useSelector(( state ) => state.common.path);
    const { onOff } = UseWidhtEvent(735)
   
    const onClick = (data) => {
        //console.log("경로:::",JSON.stringify( data))
        dispatch(path({ path: data.path}))
    }
   
    return(
        !onOff ? <Container>
            {Menu?.map(( data ) => (
                <Li key={data.route} onClick={() => onClick(data)} path={current === data.path ? true : false}>
                    {data.icon}
                    <div>
                        {data.route}
                    </div>
                </Li>
            ))}
        </Container> : null
    )
}


export default Left;