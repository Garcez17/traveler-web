import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiSearch, FiX } from 'react-icons/fi';

import { useRouter } from 'next/router';
import Logo from '../../assets/logo.svg';
import { useSearch } from '../../hooks/useSearch';
import { HeaderProps, SearchText } from './interface';

import {
  Container,
  Wrapper,
  RescrictButton,
  ActionBar,
  SearchInput,
  BackButton,
} from '../../styles/components/Header';

export function Header({ type = 'DEFAULT' }: HeaderProps): JSX.Element {
  const { register, watch, reset } = useForm<SearchText>();
  const router = useRouter();

  const { changeSearchText } = useSearch();

  const { text } = watch();

  useEffect(() => {
    changeSearchText(text);
  }, [text, changeSearchText]);

  return (
    <Container hasBorder={type !== 'DEFAULT'}>
      <Wrapper>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        {type !== 'DEFAULT' && (
          <ActionBar alignCenter={type !== 'BACK'}>
            {type === 'SEARCH_BAR' ? (
              <SearchInput hasText={!!text}>
                <FiSearch />
                <input
                  type="text"
                  placeholder="Qual cidade você procura?"
                  {...register('text')}
                />

                {!!text && <FiX onClick={() => reset({ text: '' })} />}
              </SearchInput>
            ) : (
              <>
                <BackButton onClick={() => router.back()}>
                  <FiArrowLeft />
                </BackButton>

                {type === 'WITH_INFO' && <span>Salvador</span>}
              </>
            )}
          </ActionBar>
        )}

        {type !== 'BACK' && (
          <Link href="/login" passHref>
            <RescrictButton>Acesso Restrito</RescrictButton>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
}
