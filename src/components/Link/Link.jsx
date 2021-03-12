import styled from "styled-components"


const Link = styled.a`
font-weight: 800;
padding:1rem;
display:inline-block;
cursor:pointer;
text-transform: uppercase;
user-select:none;
font-family: Arial, sans-serif;
border: 1px solid #CCC;
border-radius: 8px
background: #B4B8C5;
color:${props => props.disabled? "#999": "#222"};

&:hover{
    background: #E9EBF8
}

&:active{
    background:#EDD4DE;
}
`


export default Link;