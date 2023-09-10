import styled from "styled-components";
import Download_icon from "../../asset/Download_icon";
import { useDispatch } from "react-redux";
import { path } from "../../state/commonSlice";
import UseWidhtEvent from "../../hook/setWidthEvent";
import * as ServiceWorkerRegistration from '../../serviceWorkerRegistration';
import { useEffect, useState } from "react";


const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 10;
    background-color: rgba(0,0,0,0.3);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Box = styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    width: ${(props) => props.onOff ? "80%" : "50%"};
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & > div > svg{
        width: 20px;
        margin-right: 10px;
    }
`

const BTN = styled.div`
    display: flex;
    gap: 20px;

    & > div{
        border: 1px solid #000000;
        border-radius: 10px;
        width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    & > div:nth-child(1){
        background-color:  #17181e;
        color: #ffffff;
    }
`


function Alert(){
    const { onOff } = UseWidhtEvent(735)
    const dispatch = useDispatch();
    const cancel = () => {
        dispatch(path({ "path": "/AssetIncrease/user"}))
    }
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();
        setDeferredPrompt(event);
      };
   
    useEffect(() => {
        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        
        return () => {
          window.removeEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
          );
        };
      }, []);


    const Install = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
        
            deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === "accepted") {
                console.log("사용자가 앱 설치를 동의했습니다.");
              } else {
                console.log("사용자가 앱 설치를 동의하지 않았습니다.");
              }
        
              setDeferredPrompt(null);
            });
          }   
    }
    return(
        <Layout>
            <Container>
                <Box onOff={onOff}>
                    <div><Download_icon />다운로드 하시겠습니까?</div>
                    <BTN>
                        <div onClick={() => Install()}>확인</div>
                        <div onClick={()=> cancel()}>취소</div>
                    </BTN>
                </Box>
            </Container>
        </Layout>
    )
}

export default Alert;

