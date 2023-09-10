import { styled } from "styled-components";
import User from "../pages/UserInfo/User";
import Sample2 from "../pages/sample/Sample2";
import Sample1 from "../pages/sample/Smaple1";
import { useSelector } from 'react-redux';
import Increase from "../pages/Increase/Increase";
import Alert from "../component/Alert/Alert";

const DomPath = [
    {"path": "/menu1","dom": <Sample1 />},
    {"path": "/menu2","dom": <Sample2 />},
    {"path": "/AssetIncrease/user", "dom" : <User />},
    {"path": "/AssetIncrease/increase", "dom" : <Increase />},
    {"path": "/AssetIncrease/Download", "dom" : <Alert />}
]

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #f2f3f8;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Layout = styled.div`
    width: 95%;
    height: 95%;
    border-radius: 15px;
    background-color: #ffffff;

    
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.4);
`
const DomNavigation = () => {

    const current = useSelector(( state ) => state.common.path);


    try{
        const matchItem = DomPath.find((itme) => itme.path === current ? itme.dom : null)
        
        if(matchItem){
            return (
                <Container>
                    <Layout>
                        {matchItem.dom}
                    </Layout>
                </Container>
            )
        }else{
            return <>Not Found</>
        }
    }catch{
        <>에러</>
    }

}


export default DomNavigation;