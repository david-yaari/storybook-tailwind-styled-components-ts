import React from 'react';
import StyledEmoji from './styles';

export interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string; // optional
  symbol: string; // required
}

export const Emoji: React.FC<EmojiProps> = ({ label, symbol, ...props }) => {
  return (
    <StyledEmoji {...props}>
      <span
        className='emoji'
        role='img'
        aria-label={label ? label : ''}
        aria-hidden={label ? 'false' : 'true'}
      >
        {symbol}
      </span>
    </StyledEmoji>
  );
};
