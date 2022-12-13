import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: max-content;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 8px;

  @media (max-width: 1024px) {
    bottom: unset;
    flex-direction: row;
    width: 100%;
  }
`

export const SwitchButton = styled.button<{ bg?: string; active?: boolean }>`
  width: 24px;
  height: 24px;
  background: ${props => props.bg};
  border: ${props => (props.active ? `2px solid ${props.theme.dark}` : 'none')};
  border-radius: 50%;
`

export const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    inset: 0;
    margin: auto;
    pointer-events: none;
  }
`

export const Input = styled(SwitchButton)`
  -webkit-appearance: none;
  z-index: 1;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
  }
`
