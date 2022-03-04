import { FC, InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container, Input, LabelInput, TextError } from './styles'
import { useTheme } from 'styled-components'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
}

const TextInput: FC<TextInputProps> = ({ label, name, id, ...props }) => {
  const inputRef = useRef(null)
  const theme = useTheme()
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      {label && (
        <LabelInput {...(error && { color: theme.red })} htmlFor={id}>
          {label}
          {error && <TextError> - {error}</TextError>}
        </LabelInput>
      )}
      <Input
        {...(error && { borderColor: theme.red })}
        onChange={clearError}
        defaultValue={defaultValue}
        ref={inputRef}
        id={id}
        {...props}
      />
    </Container>
  )
}

export default TextInput
