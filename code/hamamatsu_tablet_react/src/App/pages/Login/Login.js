import React, { useEffect, useState } from 'react'
import { String, NamePages } from '../../constants'
import { Form } from './element'
import { Styled, Title, Text, InputText, ButtonType1 } from './../../components'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from './../../utils/validations'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSQLiteMutation_Login } from './../../../SQLite'

// constants
const TEXT_ERROR_COLOR = 'var(--color-13)'
const INPUT_TEXT_STYLES = {
  minWidth: '40vw',
  padding: 'calc(var(--padding-1) * 0.75)'
}

// main
const Login = () => {
  // constants
  const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaLogin)
  })
  const [isInvalid, setIsInvalid] = useState(undefined)

  // query - mutation
  const mutationLogin = useSQLiteMutation_Login({
    onSuccess: data => {
      const { isSuccess } = data

      if (isSuccess) {
        history.push(NamePages.Menu)
        return
      }

      reset()
      setIsInvalid(prev => (prev = true))
    }
  })

  // handles
  const onSubmitLogin = data => mutationLogin.mutate(data)

  // effects

  // render
  return (
    <Styled.Container
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Form onSubmit={handleSubmit(onSubmitLogin)}>
        <Title style={{ alignSelf: 'center' }}>{String.login}</Title>

        <Styled.ContentCol>
          <InputText
            {...register('username')}
            placeholder={String.user}
            style={INPUT_TEXT_STYLES}
          />
          {errors.username && (
            <Text style={{ color: TEXT_ERROR_COLOR }}>
              {errors.username.message}
            </Text>
          )}

          <InputText
            {...register('password')}
            placeholder={String.password}
            type='password'
            style={INPUT_TEXT_STYLES}
          />
          {errors.password && (
            <Text style={{ color: TEXT_ERROR_COLOR }}>
              {errors.password.message}
            </Text>
          )}
          {isInvalid && (
            <Text style={{ color: TEXT_ERROR_COLOR, alignSelf: 'center' }}>
              {String.E0002}
            </Text>
          )}
        </Styled.ContentCol>

        <ButtonType1 title={String.login} type='submit' />
      </Form>
    </Styled.Container>
  )
}

export default Login
