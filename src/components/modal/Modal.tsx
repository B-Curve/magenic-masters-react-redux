import * as React from 'react';
import { connect } from 'react-redux';

import { ModalShadow, ModalFrame, ModalBanner, ModalBody, ModalFooter } from './Modal.styles';
import { ModalState } from '../../state/modal-state';
import { ActionFn } from '../../actions';
import { ActionType, ActionSubtype } from '../../constants/action-types';

class Modal extends React.Component<any, any> {

  private frameRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.frameRef = React.createRef();
  }

  getProps(): ModalState {
    return this.props as ModalState;
  }

  closeModal(event: React.MouseEvent<HTMLDivElement>): void {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.getProps().open
          &&
          <ModalShadow onClick={(e: React.MouseEvent<HTMLDivElement>) => this.closeModal(e)}>
            <ModalFrame ref={this.frameRef} size={this.getProps().size}>
              <ModalBanner onClose={() => this.props.closeModal()}>{this.getProps().title}</ModalBanner>
              <ModalBody>{this.getProps().body || this.getProps().render}</ModalBody>
              <ModalFooter></ModalFooter>
            </ModalFrame>
          </ModalShadow>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state.modal as ModalState,
});

const mapDispatchToProps = (dispatch: ActionFn<any>) => ({
  closeModal: () => dispatch({ type: ActionType.CLOSE, subtype: ActionSubtype.MODAL }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);