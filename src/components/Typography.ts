import styled from "styled-components";

export const BoldText = styled.span<{
  size: number;
  lineHeight?: number;
  color?: string;
  weight?: number;
}>`
  font-weight: ${(props) => props.weight || "bold"};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props?.lineHeight || 2};
  color: ${(props) => props.color || "#000000"};
`;

export const LightText = styled.span<{ size: number }>`
  font-size: ${(props) => props.size}px;
  line-height: 2;
  color: var(--ion-color-medium-tint);
`;

export const PrimaryText = styled.span<{ size: number; fontWeight?: string }>`
  font-size: ${(props) => props.size}px;
  line-height: 2;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  color: var(--ion-color-primary);
`;

export const BreakWordText = styled.span`
  word-break: break-word;
`;

export const NormalText = styled.span<{
  size: number;
  color?: string;
}>`
  color: ${(props) => props.color || "#000000"};
  line-height: 2;
  font-size: ${(props) => props.size}px;
`;

export const AlignText = styled.span<{
  align: string;
}>`
  text-align: ${(props) => props.align};
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TextTransform = styled.span<{
  transform: string;
}>`
  text-transform: ${(props) => props.transform};
`;
