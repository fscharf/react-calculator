/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-eval */
/* eslint-disable no-useless-escape */
import { useCallback, useState } from 'react'

export const useCalc = () => {
  const [currentValue, setCurrentValue] = useState<string>('')
  const [valueHistory, setValueHistory] = useState<string[]>([])

  const onlyNumbersAndParens = /[^0-9)(\-]/gi
  const onlyNumbersAndOperators = /[^0-9.+\- *\/)(÷×,]/gi

  const formatValueOperators = (value: string) => {
    if (!value) return ''
    return value
      .replaceAll('*', '×')
      .replaceAll('/', '÷')
      .replaceAll('.', ',')
      .replaceAll(onlyNumbersAndOperators, '')
  }

  const hasInvalidFirstValue = (value: string) =>
    currentValue.length === 0 && value.match(onlyNumbersAndParens)

  const hasInvalidOperators = (value: string) =>
    value.match(onlyNumbersAndOperators)

  const handleResult = useCallback(() => {
    const value = currentValue
      .replaceAll('×', '*')
      .replaceAll('÷', '/')
      .replaceAll(',', '.')

    if (hasInvalidOperators(value)) return

    const finalResult = String(eval(value))
    const formattedValue = formatValueOperators(value)

    setCurrentValue(formatValueOperators(finalResult))

    valueHistory.push(formattedValue)
    setValueHistory(valueHistory)
  }, [currentValue])

  const handleAdd = useCallback(
    (value: string) => {
      if (hasInvalidFirstValue(value)) return

      setCurrentValue(`${currentValue}${value}`)
    },
    [currentValue]
  )

  const handleRemove = useCallback(() => {
    const value = String(currentValue).slice(0, -1)

    setCurrentValue(value)
  }, [currentValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatValueOperators(event.target.value)

    if (hasInvalidFirstValue(value)) return

    setCurrentValue(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === '=') {
      handleResult()
    }
  }

  const handleClear = () => {
    setCurrentValue('')
    setValueHistory([])
  }

  return {
    setCurrentValue,
    handleClear,
    handleChange,
    handleRemove,
    handleAdd,
    handleResult,
    currentValue,
    handleKeyDown,
    valueHistory
  }
}
