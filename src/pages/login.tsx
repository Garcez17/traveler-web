import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { OrangeButton } from '../components/OrangeButton';
import {
  Container,
  Content,
  Wrapper,
  BackButton,
  Form,
  ContainerInputs,
  SignInInput,
  LabelInput,
  ShowPassword,
  HidePassword,
  Options,
  Checkbox,
  CheckIcon,
  Footer,
  AlertIcon,
} from '../styles/pages/SignIn';

interface SignInCredentials {
  email: string;
  password: string;
}

export default function Login(): JSX.Element {
  const [showEmailLabel, setShowEmailLabel] = useState(false);
  const [showPasswordLabel, setShowPasswordLabel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [test, setIsCheckboxChecked] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<SignInCredentials>();

  const { email: formEmail, password: formPassword } = watch();

  const isButtonActive = useMemo(() => {
    if (!formEmail || !formPassword) {
      return false;
    }

    if (formEmail.trim() !== '' && formPassword.trim() !== '') {
      return true;
    }

    return false;
  }, [formEmail, formPassword]);

  function handleShowEmailLabel(inputValue?: string) {
    if (showEmailLabel) {
      if (inputValue.trim() === '') {
        setShowEmailLabel(false);
      }
    } else {
      setShowEmailLabel(true);
    }
  }

  function handleShowPasswordLabel(inputValue?: string) {
    if (showPasswordLabel) {
      if (inputValue.trim() === '') {
        setShowPasswordLabel(false);
      }
    } else {
      setShowPasswordLabel(true);
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleToogleCheckbox() {
    setIsCheckboxChecked(!test);
  }

  function handleLogin({ email, password }: SignInCredentials) {
    console.log({ email, password });
  }

  return (
    <Container>
      <img src="/login.png" alt="login" />

      <Content>
        <Wrapper>
          <Link href="/">
            <a>
              <BackButton />
            </a>
          </Link>

          <Form onSubmit={handleSubmit(handleLogin)}>
            <h1>Fazer login</h1>

            <ContainerInputs>
              <SignInInput>
                <LabelInput showLabel={showEmailLabel}>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    {...register('email')}
                    onFocus={e => handleShowEmailLabel(e.target.value)}
                    onBlur={e => handleShowEmailLabel(e.target.value)}
                  />
                </LabelInput>
              </SignInInput>
              <SignInInput>
                <LabelInput showLabel={showPasswordLabel}>
                  <label htmlFor="password">Senha</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Senha"
                    onFocus={e => handleShowPasswordLabel(e.target.value)}
                    onBlur={e => handleShowPasswordLabel(e.target.value)}
                  />
                </LabelInput>
                {showPassword ? (
                  <button type="button" onClick={handleShowPassword}>
                    <HidePassword />
                  </button>
                ) : (
                  <button type="button" onClick={handleShowPassword}>
                    <ShowPassword />
                  </button>
                )}
              </SignInInput>
            </ContainerInputs>

            <Options>
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  value="remember"
                  onClick={handleToogleCheckbox}
                />

                <label htmlFor="remember">
                  <Checkbox isCheckboxChecked={test}>
                    <CheckIcon />
                  </Checkbox>
                  Lembrar-me
                </label>
              </div>

              <a href="/">Esqueci minha senha</a>
            </Options>

            <OrangeButton isActive={isButtonActive || false} type="submit">
              Acessar plataforma
            </OrangeButton>
          </Form>

          <Footer>
            <AlertIcon />
            <p>
              Acesso restrito à <br /> sócios e moderadores
            </p>
          </Footer>
        </Wrapper>
      </Content>
    </Container>
  );
}
