import { Component } from 'react';

export interface ModalState <T = unknown> {
  open?: boolean;
  size: ModalSize;
  title: string;
  body?: string | null;
  render?: new(props: T) => React.Component <any, T, any>;
}

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}