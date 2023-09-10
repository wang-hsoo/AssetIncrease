import { useEffect, useState } from "react";
import Text from "../../component/Input/text/Text";
import SelectDate from "../../component/calendar/DatePicker";
import Number from "../../component/Input/number/Number";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../state/userSlice";
import MinHeader from "../../component/inHeader/MinHeader";
import { pageInfo } from "../../constant/constant";
import Sussecc_icon from "../../asset/Success_icon";
import UseWidhtEvent from "../../hook/setWidthEvent";



const InputGroup = styled.div`
    width: 80%;
    height: 50%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    margin-left: 10px;
    border: 1px solid #000000;
    border-radius: 15px;
`

const BTN = styled.div`
    border: 1px solid #333333;
    padding: 10px 100px;
    border-radius: 10px;
    font-weight: 800;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        transition: all ease-in-out 0.1s;
        outline: none!important;
        border: 1px solid #ffffff;
        background-color: #1976d2;
        color: #ffffff;
    }
`

const Layout = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & > svg{
        width: 10%;
        height: 10%;
    }
`
const Success = styled.div`
    margin-top: 10px;
    font-size: 25px;
    font-weight: 700;
`

const Hello = styled.div`
    font-size: 30px;
    font-weight: bolder;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Info = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1{
        font-size: 17px;
        font-weight: 600;
    }

    & > div{
        margin-top: 30px;
        width: 200%;
        height: ${(prop) => (prop.width  ? "300px" : "100px")};
        background-color: #445483;
        color: #ffffff;
        border-radius: 15px;
        display: flex;
        flex-direction: ${(prop) => (prop.width  ? "column" : "row")};
        align-items: center;
        justify-content: space-around;

        & > div{
            width:${(prop) => (prop.width  ? "100%" : "33.3333%")};
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px
        }

    }
`

const Error = styled.div`
    color: red;
    font-weight: 700;
    margin-top: 10px;
`

function User(){
    const [userInfo, setUserInfo] = useState({
        "name": null,
        "started_at": new Date(),
        "start_price": null,
        "targetPer": null
    }) 
    const current = useSelector(( state ) => state.user.info);
    const dispatch = useDispatch()
    const { onOff } = UseWidhtEvent(735)
    const [error, setError] = useState(false)

    
    const onClick = () => {
        if(userInfo){
            let errorCount = 0
            Object.keys(userInfo).map((data) => {
                if(userInfo[data] === null || userInfo[data] === "" ){
                    errorCount += 1
                }
            })


            
            if(errorCount > 0){
                setError(true)
            }else{
                localStorage.setItem("userInfo", JSON.stringify(userInfo))
                dispatch(info({info: userInfo}))
                setError(false)
            }
        }
    }

    useEffect(() => {
        const getUser = localStorage.getItem("userInfo")
        if(getUser){
            dispatch(info({info: JSON.parse(getUser)}))
        }
    },[])

  
    
    
    return(
        <>
            {current.name === null ? 
            <>
                <MinHeader pageInfo={pageInfo.userInfo}/>
                <InputGroup>
                    {error && <Error>유효하지 않는 값이 있습니다.</Error>}
                    <Text value={userInfo?.name} id={"name"} onChange={setUserInfo} label={"Name"} />
                    <SelectDate  onChange={setUserInfo}  startDate={userInfo?.started_at} id={"started_at"} label={"Start Date"}/>
                    <Number value={userInfo?.start_price} id={"start_price"} onChange={setUserInfo} label={"Start Asset" }/>
                    <Number value={userInfo?.targetPer} id={"targetPer"} onChange={setUserInfo} label={"Target Rate"}/>
                    <BTN onClick={() => onClick()}>등록</BTN> 

                </InputGroup>
            </>: 
            <>
                <MinHeader pageInfo={pageInfo.createUser}/>
                <Layout>

                    <Sussecc_icon />
                    <Success>등록 완료</Success>
                    <Hello>{current.name}님 환영합니다.</Hello>
                    <Info  width={onOff}> 
                        <h1>자산 현황</h1>
                        <div>
                            <div>
                                <div>초기 자본금</div>
                                <div>{current?.start_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                            <div>
                                <div>시작 날짜</div>
                                <div>{JSON.stringify(current?.started_at).split("T")[0].replace("\"","")}</div>
                            </div>
                            <div>
                                <div>목표 수익률( 일 )</div>
                                <div>{current?.targetPer}%</div>
                            </div>
                        </div>
                    </Info>
                    <BTN onClick={() => {
                        localStorage.removeItem("userInfo")
                        dispatch(info({info:{
                            "name": null,
                            "started_at": new Date(),
                            "start_price": null,
                            "targetPer": null
                        }}))
                    }}>초기화</BTN>
                </Layout>
            </>}
        </>
    )
}

export default User;