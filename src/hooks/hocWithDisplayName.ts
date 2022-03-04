import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
const hocWithDisplayName =
  (
    hoc: (WrappedComponent: React.ComponentType<any>) => React.FC<any>,
    hocDisplayName?: string
  ): ((WrappedComponent: React.ComponentType<any>, displayName?: string) => React.FC<any>) =>
  (WrappedComponent, displayName) => {
    const component = hoc(WrappedComponent);
    const wrappedComponentDisplayName =
      displayName ?? WrappedComponent.displayName ?? WrappedComponent.name ?? 'anonymous';
    component.displayName = `${hocDisplayName ?? hoc.name}(${wrappedComponentDisplayName})`;
    return component;
  };

export default hocWithDisplayName;
