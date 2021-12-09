import styled from 'styled-components';
import { ContainerCss } from '../global';

export const Container = styled.div`
  ${ContainerCss}
  flex-direction: row;
  align-items: flex-start;
`;

export const Content = styled.section`
  flex: 1;
`;

export const Wrapper = styled.div``;

export const LocalImageContainer = styled.aside`
  flex: 1;
  position: relative;
  height: 100%;
`;
