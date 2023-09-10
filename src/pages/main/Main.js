import React, { useEffect, useState } from "react";
import Layout from "../../layout/Index";
import { getUser } from "../../api/Auth";

import {  useDispatch } from 'react-redux';
import { auth } from "../../state/userSlice";
import { styled } from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`







function Main(){
    const [userAuth, setAuth] = useState(false);
    const dispatch = useDispatch();

    // const Auth = async() => {
    //     const user = await getUser()
    //     if(user){
    //         console.log("사용자인증:::", JSON.stringify(user))
    //         dispatch(auth({auth: user}))
    //         setTimeout(() => {
    //             //테스트를 위한 timeout
    //             setAuth(true)
    //         }, 2000)
    //     }
    // }

    // useEffect(() => {
    //     Auth()
    // },[])

    return(
        <Container>
            {/* {userAuth ? <Layout />  : <>인증중</>} */}
            <Layout />
        </Container>
    )
}

export default Main;