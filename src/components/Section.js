import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div `
    ${'' /* background: url(${props => props.image}); */}
    background: rgba(241,240,240,1)
    height: 500px;
    ${'' /* background-size: cover; */}
    display: grid;
    grid-template-rows: 100px 0 200px 0;
    grid-gap: 20px;
`

const SectionLogo = styled.img`
    align-self: end;
    width: 100px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    ${'' /* grid-template-columns:500px auto; */}
    grid-template-columns: 1fr;
    padding: 0 200px;
    margin: 0 40px;
    text-align: center;
    grid-gap: 10px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    font-size: 40px;
    margin: 0;
    line-height: 1.2;
`

const SectionText = styled.p`
    color: rgba(78, 78, 78, .6);
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
`

// const SectionButton = styled.div`
//     width: 175px;
//     font-size: 16px;
//     font-weight: 500;
//     color: white;
//     text-align: center;
//     text-transform: capitalize;
//     background: rgba(90, 105, 220, 1);
//     padding: 20px 50px;
//     border-radius: 30px;
//     box-shadow: 0px 8px 20px rgba(5, 10, 39, .1);
//     transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1.0);
// `

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
            {/* <SectionButton>{props.button}</SectionButton> */}
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section