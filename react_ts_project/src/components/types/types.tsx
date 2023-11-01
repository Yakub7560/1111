export type Info = {
  count: number;
  pages: string;
  next: string;
  prev: string | null;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export interface IResponceData {
  info: Info;
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: Origin;
      location: Location;
      image: string;
      episode: [string];
      url: string;
      created: string;
    },
  ];
}

export interface IResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: [string];
  url: string;
  created: string;
  style: string;
}

export interface IPropsLS {
  SearchText?: string | undefined;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  hasError: boolean;
}
