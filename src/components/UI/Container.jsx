import styled from 'styled-components';

const Container = ({ className, children }) => {
  const classes = className ? `container ${className}` : '';
  return <StyledContainer className={classes}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Container;
