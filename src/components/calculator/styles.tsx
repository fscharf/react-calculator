import styled from 'styled-components'

const baseFontSize = '3rem'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  background: rgba(22, 22, 22, 0.8);
  backdrop-filter: blur(12px);
  max-width: 350px;
  justify-content: center;
  gap: 16px;
  height: max-content;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const Grid = styled.div<{
  cols?: number
  templateCols?: string
}>`
  display: grid;
  gap: 8px;
  grid-template-columns: ${props =>
    props.templateCols || `repeat(${props.cols || 1}, 1fr)`};
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: auto;
  gap: 16px;
  overflow: auto;
  border-bottom: 2px solid #aeaeae;
  padding-bottom: 8px;
  text-align: end;
  margin-top: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  border-radius: 8px;
  height: 200px;
  padding: 16px;
  color: #f9f9f9;
  font-size: ${baseFontSize};
  background: #535353;
`

export const Input = styled.input`
  padding-top: 16px;
  text-align: end;
  display: flex;
  color: #f9f9f9;
  outline: none;
  border: none;
  background: #535353;
  width: 100%;
  font-size: ${baseFontSize};
`

export const Text = styled.span`
  width: 100%;
  font-size: ${baseFontSize};
`
