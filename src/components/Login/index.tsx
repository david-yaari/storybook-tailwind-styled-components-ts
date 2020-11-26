import React from 'react';
import StyledForm from './styles';

export interface FormProps {
  /**
   * Is this the principal call to action on the page?
   */
  //primary?: boolean;
  /**
   * What background color to use
   */
  //backgroundColor?: string;
  /**
   * How large should the button be?
   */
  //size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  //label: string;
  /**
   * Optional click handler
   */
  //onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Login: React.FC<FormProps> = ({
  //primary = false,
  //size = 'medium',
  //backgroundColor,
  //label,
  ...props
}) => {
  //const mode = primary
  //  ? 'storybook-button--primary'
  //  : 'storybook-button--secondary';
  return (
    <StyledForm>
      <form>
        <input type='text' placeholder='Full name' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <button>Sign In</button>
      </form>
    </StyledForm>
  );
};
