import React from 'react';
import StyledHref from './styles';

export interface HrefProps {
  href?: string;
  em?: string;
}

export const HrefEm: React.FC<HrefProps> = ({
  href = '#',
  em = 'em em-grinning',
  ...props
}) => {
  return (
    <StyledHref {...props}>
      <a href={href}>
        <span>
          <i className={em}></i>
        </span>
      </a>
    </StyledHref>
  );
};
