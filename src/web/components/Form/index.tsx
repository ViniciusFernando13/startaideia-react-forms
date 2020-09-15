import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { FormProvider, FormContext } from 'packages/core'
import { GlobalStyle } from './styles'

function FormConsumer({ children }) {
  const { handleSubmit } = useContext(FormContext)

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </form>
  )
}

function Form({ onSubmit, children, initialValue = {}, ...props }) {
  return (
    <FormProvider onSubmit={onSubmit} initialValue={initialValue} {...props}>
      <FormConsumer>{children}</FormConsumer>
      <GlobalStyle />
    </FormProvider>
  )
}

Form.Footer = Col
Form.Row = Row
Form.Col = Col

export default Form
