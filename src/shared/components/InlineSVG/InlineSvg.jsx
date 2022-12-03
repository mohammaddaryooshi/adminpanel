import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';



const SvgContainer = styled.div`
  & svg {
    width: 100%;
    height: 100%;

    & path,
    & g {
      fill: ${(props) => props.svgColor} !important;
    }
  }
`;

const InlineSvg = ({
  src,
  width = 20,
  height = 20,
  color,
  className,
}) => {
  return (
    <SvgContainer style={{ width, height }} svgColor={color}>
      <SVG className={className} src={src} />
    </SvgContainer>
  );
};

export default InlineSvg;
