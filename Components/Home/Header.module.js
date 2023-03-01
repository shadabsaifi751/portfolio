const { default: styled } = require("styled-components")


// .brandLogo{
//     height: 60px;
// }


export default HeaderWrap = styled.header`
    background-color: ${(props) => props.theme.backgroundColor};
`