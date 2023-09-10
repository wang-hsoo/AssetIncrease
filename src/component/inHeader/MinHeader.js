import { styled } from "styled-components";

const Header = styled.div`
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 3px;
`

const Title = styled.div`
    font-weight: 800;
    color: #1e2329;
    font-size: 1.5em;
    margin-bottom: 10px;
`
const Description = styled.div`
    font-size: 0.7em;
`

function MinHeader(props){
    const { pageInfo } = props;

    return (
        <Header>
            <Title>{pageInfo.title}</Title>
            <Description>* {pageInfo.description}</Description>
        </Header>
    )
}

export default MinHeader