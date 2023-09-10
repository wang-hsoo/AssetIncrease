import { Suspense, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "../component/loading/Loading";
import Left from "./Left";
import DomNavigation from "../navigation/DomNavigation";
import { styled } from "styled-components";
import Right from "./RIght";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    & > nav{
        width: 100%;
        height: 100%;
        display: flex;
    }
`

function Layout(){
    const [ MenuOn, SetMenuOn] = useState( false );

    


    return(
        <Container>
            <Header onClick={SetMenuOn} />
            <nav>
                <Suspense fallback={<Loading />}>
                    <Left />
                    <DomNavigation />
                    <Right show={MenuOn} SetMenuOn={SetMenuOn} />
                </Suspense>
            </nav>
            <Footer />
        </Container>
    )

}


export default Layout;