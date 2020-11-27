import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const StyledEmoji = styled.span`
${tw`text-xl pl-2`}
&:span {
  ${tw`text-lg`}
  &:symbol {
    ${tw`text-lg`}
}`

export default StyledEmoji
