import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    height: 5em;
    width: 100%;
    background-color: #111;
`

const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #eee;
`

const Exercise = ({ name, weight, reps }) =>
    <Wrapper>
        <Name>{name}</Name>
        <div>{weight}</div>
        <div>{reps}</div>
    </Wrapper>

export default Exercise
