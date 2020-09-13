import React, { useEffect, useState } from 'react'

import { Form, Shape } from 'react-forms'
import { Input } from './components'

const App = () => {
  const [email, setEmail] = useState('gu.boas13@gmail.com')

  useEffect(function () {
    setTimeout(function () {
      setEmail('agathaemm@gmail.com')
    }, 1000)
  }, [])

  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Shape path='user'>
        <Input name='email' initialValue={email} />
        <Input name='password' />
      </Shape>
      <button>Submit</button>
    </Form>
  )
}

export default App
