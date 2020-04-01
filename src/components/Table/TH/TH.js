import React from 'react';
import cn from 'classnames';

const TH = ({ className, ...otherProps}) => {
  return (
    <th className={cn('rc-table-th', className)} {...otherProps} />
  )
};

TH.displayName = 'Table.TH';

export default TH;
