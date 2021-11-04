import Link from 'next/link';
import { FiArrowLeft, FiSearch, FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import {
  Container,
  Wrapper,
  RescrictButton,
  ActionBar,
  SearchInput,
  InfoContainer,
  BackButton,
} from '../styles/components/Header';

import Logo from '../assets/logo.svg';
import { useSearch } from '../hooks/useSearch';

type HeaderProps = {
  hasBorder?: boolean;
  hasActionBar?: boolean;
  actionType?: 'searchBar' | 'default';
};

interface SearchText {
  text: string;
}

export function Header({
  hasBorder = true,
  hasActionBar = true,
  actionType = 'default',
}: HeaderProps): JSX.Element {
  const { register, watch, reset } = useForm<SearchText>();

  const { changeSearchText } = useSearch();

  const { text } = watch();

  useEffect(() => {
    changeSearchText(text);
  }, [text]);

  return (
    <Container hasBorder={hasBorder}>
      <Wrapper>
        <Logo />

        {hasActionBar ? (
          <ActionBar>
            {actionType === 'searchBar' ? (
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
                <BackButton>
                  <FiArrowLeft />
                </BackButton>

                <span>Salvador</span>
              </>
            )}
          </ActionBar>
        ) : (
          <></>
        )}

        <Link href="/login" passHref>
          <RescrictButton>Acesso Restrito</RescrictButton>
        </Link>
      </Wrapper>
    </Container>
  );
}
