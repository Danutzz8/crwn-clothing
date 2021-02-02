import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/my-logo.jpg';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
      width: 70px;
      // padding: 25px;
      background-color: pink;
`;

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        text-shadow: 3px 3px 2px white;
        letter-spacing: 2px;
    }
`;

export const MyLogo = styled.img`
    height:75px;
    width:75px;
`;

MyLogo.defaultProps = {
    src:logo,
};