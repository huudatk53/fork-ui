import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Item.scss');

const Item = ({ className, selected, disabled, children, icon, iconOnly, _key, _onItemClick, onItemClick, titleOnly }) => {
  const _onClick = useCallback(() => {
    if (disabled) {
      return;
    }

    if (onItemClick) {
      return onItemClick();
    }

    return _onItemClick(_key);
  }, [_key, disabled, onItemClick]);

  return (
    <li
      className={cn(
        'rc-menu-item',
        {
          '--selected': selected,
          '--disabled': disabled,
          '--icon-only': iconOnly,
          '--title-only': titleOnly,
        },
        className,
      )}
      onClick={_onClick}
    >
      {icon && <Icon name={icon} className="rc-menu-item-title-icon" />}
      {(iconOnly && titleOnly) && <span style={{ textTransform: 'uppercase '}}>{titleOnly[0]}</span>}
      <span className="rc-menu-item-content">{children}</span>
    </li>
  );
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: PropTypes.string,
  _onItemClick: PropTypes.func, // do not set default, this function will be passed throught from parent
  onItemClick: PropTypes.func, // not set default
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.any,
  icon: PropTypes.string,
  titleOnly: PropTypes.string, // when Item in iconOnly mode, titleOnly will overide icon by first lettter of this value
  _key: PropTypes.string.isRequired,
};
Item.defaultProps = {};

export default Item;
