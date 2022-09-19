import styled from "styled-components";



export const PageFoooter = styled.h2 `
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
font-size: 3rem;
width: 100%;
height: 50px;
background-color: #2d1301;
background-color: ${props => props.variant === 'secondary' ? '#508aff' : '#2d1301'};
`

