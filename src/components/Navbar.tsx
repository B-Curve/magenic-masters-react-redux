import * as React from 'react';
import { connect } from 'react-redux';

import { AppStyles } from '../App.styles';
import { ModalSize, ModalState } from '../state/modal-state';
import { ActionFn } from '../actions';
import { ActionType, ActionSubtype } from '../constants/action-types';
import LoginForm from './forms/LoginForm';

class Navbar extends React.Component<any, any> {

  private loginFormRef: React.RefObject<React.Component> = React.createRef();

  render() {
    setTimeout(() => console.log(this.loginFormRef), 2000);
    return (
      <AppStyles.Navigation>
        <h3>Facebook 2</h3>
        {
          this.props.user
            ? <NavTabsLoggedIn />
            : <NavTabsLoggedOut loginClick={
              (action: ActionType, state: ModalState) => this.props.triggerModal(action, state)
            } loginRef={this.loginFormRef} />
        }
      </AppStyles.Navigation>
    );
  }
}

const NavTabsLoggedIn = (props: any) => (
  <AppStyles.NavTabs>
    <AppStyles.NavLink to="/feed" activeClassName="active-link">
      <span>Feed</span>
      <i className="fas fa-newspaper"></i>
    </AppStyles.NavLink>
    <AppStyles.NavLink to="/profile" activeClassName="active-link">
      <span>Profile</span>
      <i className="fas fa-user-circle"></i>
    </AppStyles.NavLink>
    <AppStyles.NavLink to="/dms" activeClassName="active-link">
      <span>DMs</span>
      <i className="fas fa-envelope"></i>
    </AppStyles.NavLink>
  </AppStyles.NavTabs>
);

const NavTabsLoggedOut = ({ loginClick, loginRef }: any) => (
  <AppStyles.NavTabs>
    <AppStyles.NavTab onClick={() => loginClick(ActionType.OPEN, {
      title: 'Log in',
      body: null,
      render: <LoginForm ref={loginRef} /> as any,
      size: ModalSize.MEDIUM,
    } as ModalState)}>
      <span>Log in</span>
      <i className="fas fa-user-circle"></i>
    </AppStyles.NavTab>
    <AppStyles.NavTab>
      <span>Sign up</span>
      <i className="fas fa-user-plus"></i>
    </AppStyles.NavTab>
  </AppStyles.NavTabs>
);

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: ActionFn<ModalState>) => ({
  triggerModal: (actionType: ActionType, modalState: ModalState) => dispatch({
    type: actionType,
    subtype: ActionSubtype.MODAL,
    payload: modalState,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);