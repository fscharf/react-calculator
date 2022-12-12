import styled from 'styled-components'

export const Wrapper = styled.button<{ active?: boolean }>`
  width: 100%;
  outline: none;
  border: none;
  padding: 12px 16px;
  color: #f9f9f9;
  background: ${props =>
    props.active ? props.theme.primary : props.theme.dark};
  border-radius: 4px;
  font-size: 3rem;
  font-weight: 700;

  &:hover {
    background: ${props =>
      props.active ? props.theme.secondary : props.theme['dark-lighter']};
  }
`
