export enum HeaderType {
  DEFAULT,
  SEARCH_BAR,
  WITH_INFO,
  BACK,
}

export type HeaderProps = {
  type?: keyof typeof HeaderType;
};

export type SearchText = {
  text: string;
};
