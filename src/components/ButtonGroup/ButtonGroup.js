import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { pick, omit } from '../../utils/helpers';

const ButtonGroup = ({ className, fluid, size, style, children, ...otherProps }) => {
  const _parentProps = useMemo(() => pick(otherProps, [
    'glassed',
    'primary',
    'danger',
    'transparent',
    'disabled',
    'color',
    'textColor',
    'outlined'
  ]), [otherProps]);

  const passedProps = useMemo(() => omit(otherProps, [
    'glassed',
    'primary',
    'danger',
    'transparent',
    'disabled',
    'size',
    'color',
    'textColor',
    'outlined',
  ]), [otherProps]);

  return (
    <div
      className={cn(
        'fui-button-group',
        {
          'fui-button-group--fluid': fluid
        },
        className
      )}
      style={{
        fontSize: size,
        ...style
      }}
      {...passedProps}
    >
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          ..._parentProps,
          ...elm.props
        });
      })}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.string,
};
ButtonGroup.defaultProps = {};

export default ButtonGroup;
