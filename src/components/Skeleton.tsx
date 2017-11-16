import * as React from 'react';

const styles = {
  maxWidth: 480,
  width: '100%',
  display: 'block',
  margin: 'auto',
  height: '100%',
}

export interface SkeletonProps {
  some: string
}

export default class Skeleton extends React.Component <SkeletonProps, {}> {
  render() {
    return(
      <div>Hello Skeleton</div>
    )
  }
}