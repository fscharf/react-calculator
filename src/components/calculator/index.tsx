import { Button, DeleteIcon } from 'components'
import { useCalc } from 'hooks'
import { memo, useEffect, useRef } from 'react'
import {
  Grid,
  HistoryWrapper,
  Input,
  InputWrapper,
  Text,
  Wrapper
} from './styles'

const Calculator = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',']
  const operators = ['+', '-', '×', '÷']

  const {
    handleClear,
    handleChange,
    handleRemove,
    handleAdd,
    handleResult,
    setCurrentValue,
    currentValue,
    handleKeyDown,
    valueHistory
  } = useCalc()

  const handleFocus = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }

  window.addEventListener('keydown', handleFocus)

  useEffect(() => {
    if (currentValue && historyRef.current !== null) {
      historyRef.current.scrollTo({ top: 5000 })
    }
  }, [currentValue])

  return (
    <Wrapper onClick={handleFocus}>
      <InputWrapper>
        <HistoryWrapper ref={historyRef}>
          {valueHistory &&
            valueHistory.map(history => {
              return (
                <Text
                  key={Math.random()}
                  onClick={() => setCurrentValue(history)}
                >
                  {history}
                </Text>
              )
            })}
        </HistoryWrapper>
        <Input
          ref={inputRef}
          type="text"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>
      <Grid>
        <Grid cols={2}>
          <Button onClick={handleClear}>AC</Button>

          <Button onClick={handleRemove}>
            <DeleteIcon />
          </Button>
        </Grid>
        <Grid templateCols="3fr 1fr">
          <Grid cols={3}>
            {numbers.map(number => {
              return (
                <Button key={number} onClick={() => handleAdd(number)}>
                  {number}
                </Button>
              )
            })}
            <Button onClick={handleResult}>=</Button>
          </Grid>
          <Grid cols={1}>
            {operators.map(operator => {
              return (
                <Button
                  key={operator}
                  active
                  onClick={() => handleAdd(operator)}
                >
                  {operator}
                </Button>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default memo(Calculator)
