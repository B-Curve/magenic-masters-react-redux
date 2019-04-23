import * as React from 'react';
import styled from 'styled-components';
import { ModalSize } from '../../state/modal-state';

export const ModalShadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(10, 10, 10, 0.7);
  display: flex;
  align-items: center;
`;

export const ModalFrame = styled.div`
  width: ${({size}: any) => {
    const s = size && size.toLowerCase() || '';
    return s === ModalSize.SMALL && '20%'
      || s === ModalSize.MEDIUM && '40%'
      || '75%';
  }}

  height: ${({size}: any) => {
    const s = size && size.toLowerCase() || '';
    return s === ModalSize.SMALL && '30%'
      || s === ModalSize.MEDIUM && '50%'
      || '90%';
  }}

  margin: 0 auto;
  margin-bottom: 100px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
` as React.FunctionComponent<{ size: string, ref?: any }>;

const ModalTop = styled.div`
  width: 100%;
  flex-basis: 15%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const ModalTitle = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const ModalBanner = (props: {
  children?: any,
  onClose: () => void
}) => (
  <ModalTop>
    <ModalTitle>{props.children}</ModalTitle>
    <i style={{cursor: 'pointer'}} onClick={() => props.onClose()} className="fas fa-times"></i>
  </ModalTop>
);

export const ModalBody = styled.div`
  flex-basis: 70%;
  overflow-y: auto;
  margin: 10px 0;
`;

export const ModalFooter = styled.div`
  flex-basis: 15%;
`;