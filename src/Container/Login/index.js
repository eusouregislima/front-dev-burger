import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import LoginImg from '../../assets/loginImg.svg'
import Logo from '../../assets/logo.png'
import api from '../../services/api'

import {
  Container,
  LoginImage,
  ContainerItens,
  SignInLink,
  Input,
  Label,
  ErrorMessage,
} from './styles'

function Login() {
  const users = useUser()

  console.log(users)

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 dígitos'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    const response = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando os dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu email e/ou senha',
      },
    )
    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-dev-burger" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.email?.message}>Email</Label>

          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label error={errors.password?.message}>Senha</Label>

          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 55, marginBottom: 15 }}>
            Entrar
          </Button>
        </form>

        <SignInLink>
          Não possui conta? <a>Cadastre-se</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
