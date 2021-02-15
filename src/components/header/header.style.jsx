import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/my-logo.jpg';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
      width: 70px;
    
      @media (max-width: 800px) {
        width: 50px;
        padding: 0;
  }
`;

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 800px) {
        width: 80%;
  }
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

    @media screen and (max-width: 800px) {
      height:60px;
      width:60px;
  }
`;

MyLogo.defaultProps = {
    src:logo,
};