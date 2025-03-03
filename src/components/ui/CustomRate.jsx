import { Rate } from 'antd';
import styled from 'styled-components';

const StyledRate = styled(Rate)`
  && {
    font-size: 24px; /* Adjust the size */
    color: hsl(32, 100%, 59%); 
  }
`;

export const CustomRate = () => {
  return (
    <StyledRate value={5} />
  )
}
