import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { auth } from '../firebase/firebase.utils';
import  CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selector';

//import {ReactComponent as Logo} from '../../assets/crown.svg';
//import logo from '../../assets/my-logo.jpg';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, MyLogo} from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer> 
      <LogoContainer to='/'>
        <MyLogo alt='Logo'></MyLogo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
            </OptionLink>
        ) : (
            <OptionLink to='/signin'>
            SIGN IN
            </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);