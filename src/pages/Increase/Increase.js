import { useSelector } from "react-redux";
import MinHeader from "../../component/inHeader/MinHeader";
import { pageInfo } from "../../constant/constant";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import SmallCalendar from "../../component/calendar/Calendar";


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin-top: 20px;
    margin-left: 25px;
    font-size: 0.8em;
    
    & > div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        justify-content: center;
    }
`
const Title = styled.h1`
    font-size: 17px;
    font-weight: 600;
    margin-left: 20px;
`

function Increase(){
    const current = useSelector(( state ) => state.user.info);
    const [targetDay, setTargetDay] = useState();
    const [assetDay, setAssetDay] = useState();
    const [assetYes, setAssetYes] = useState();

    const today = new Date()

    const TargetAsset = () =>{
        setAssetDay(Math.round(current.start_price * Math.pow(1 + (current.targetPer/100) / 1, 1 * targetDay)))
        setAssetYes(Math.round(current.start_price * Math.pow(1 + (current.targetPer/100) / 1, 1 * targetDay - 1)))
    }

    useEffect(() => {
        const start = JSON.stringify(current?.started_at).split("T")[0].replace("\"","")
        const Today = JSON.stringify(today).split("T")[0].replace("\"","")
  
        
        // console.log( Math.round(1600000 * Math.pow(1 + 0.01 / 1, 1 * 10)))
        setTargetDay(Math.ceil(Math.abs(new Date(Today) - new Date(start)) / (24 * 60 * 60 * 1000)) + 1)
    },[])

    useEffect(() => {
        TargetAsset()
    },[targetDay])

    return(
        <>
            <MinHeader pageInfo={pageInfo.IncreaseMain}/>
            <Title>오늘의 목표</Title>
            <Container>
                <div>
                    <div>회 차</div>
                    <div>{targetDay}일</div>
                </div>
                <div>
                    <div>수익률</div>
                    <div>{current.targetPer}%</div>
                </div>
                <div>
                    <div>수익금</div>
                    <div style={{"color":"#b30000", "fontWeight": "800"}}>\{(assetDay - assetYes).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </div>
                <div>
                    <div>USDT</div>
                    <div style={{"color":"#b30000", "fontWeight": "800"}}>${parseFloat((assetDay - assetYes)/1336.04).toFixed(2)}</div>
                </div>
                <div>
                    <div>누적 금액</div>
                    <div>\{assetDay?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </div>
            </Container>

            <Title style={{"marginTop":"25px"}}>수익 스케줄</Title>
            <div style={{"width":"80%"}}> 
                <SmallCalendar value={current}/>
            </div>
        </>
    )
}

export default Increase;