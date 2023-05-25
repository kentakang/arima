import styled from 'styled-components';

const DraggableArea = styled.div`
  width: 100vw;
  height: 48px;
  -webkit-app-region: drag;
  position: fixed;
  top: 0;
  left: 0;
`;

export default DraggableArea;
