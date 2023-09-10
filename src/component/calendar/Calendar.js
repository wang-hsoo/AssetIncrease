import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalender.css'
import UseWidhtEvent from '../../hook/setWidthEvent';

function SmallCalendar({ value }){
    const { onOff } = UseWidhtEvent(500)


    const content = ({ date, view }) => {
        const start = JSON.stringify(value?.started_at).split("T")[0].replace("\"","")
        const Today = JSON.stringify(date).split("T")[0].replace("\"","")
        
        if ( Today >= start ) {
            const DayCount = Math.ceil(Math.abs(new Date(Today) - new Date(start)) / (24 * 60 * 60 * 1000)) + 2

            const assetDay = Math.round(value.start_price * Math.pow(1 + (value.targetPer/100) / 1, 1 * DayCount))
            const assetYes = Math.round(value.start_price * Math.pow(1 + (value.targetPer/100) / 1, 1 * DayCount - 1))
            return (
                !onOff ?
                <p style={{"fontSize": "0.5em"}}>
                    <div>\{(assetDay - assetYes).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div>\{assetDay?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </p> 
                : 
                `수익금 : \\${(assetDay - assetYes).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                \nUSDT : \$${parseFloat((assetDay - assetYes)/1336.04).toFixed(2)}
                \n누적 수익금 : \\${assetDay?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  )
          }
          return null;
    }
 

    return (
            <Calendar 
                onClickDay={(value) => onOff  && alert(content({date:value}))}
                className="calender-container"
                value={value?.started_at} 
                tileContent={({ date, view }) => !onOff  && content({ date, view })}
                />
    )

}

export default SmallCalendar;