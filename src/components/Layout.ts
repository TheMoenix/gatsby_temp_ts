import styled from "styled-components";

export const Content = styled.div<{
  background?: string;
}>`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) =>
    props.background ? props.background : "#f6f6f9"};
  height: 100%;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const FlexEndColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const FlexEndDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FlexStartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FlexCenterLine = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const FlexCenterRow = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const FlexSpaceAroundRow = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`;

export const FlexCenterColumnAndRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

export const FlexStartColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const FlexSpaceBetween = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const FlexSpaceBetweenDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FlexSpaceBetweenColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Space = styled.div<{
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const FlexContainer = styled.div<{
  flex: number;
}>`
  flex: ${(props) => props.flex};
`;

export const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
