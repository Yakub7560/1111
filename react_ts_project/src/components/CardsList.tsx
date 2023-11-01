import React from 'react';
import { IResponceData } from './types/types';
import './CardsList.css';
import { IPropsLS } from './types/types';

class CardsList extends React.Component<
  IPropsLS,
  {
    SearchData: IResponceData | null;
    SearchText: string | undefined;
    isLoading: boolean;
  }
> {
  constructor(props: IPropsLS) {
    super(props);
    this.state = { SearchData: null, isLoading: true, SearchText: '' };
  }

  handleSubmit = () => {
    setTimeout(() => {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
          'inputValue'
        )}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error('There are no items');
          }
          return res.json();
        })
        .then((data: IResponceData) => {
          this.setState({ SearchData: data });
          console.log(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  };

  componentDidMount() {
    let request = 'https://rickandmortyapi.com/api/character/';
    if (localStorage.getItem('inputValue')) {
      request = `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
        'inputValue'
      )}`;
    }
    setTimeout(() => {
      fetch(request)
        .then((res) => {
          if (!res.ok) {
            throw Error('There are no items');
          }
          return res.json();
        })
        .then((data: IResponceData) => {
          this.setState({ SearchData: data });
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }

  componentDidUpdate(prevProps: { SearchText: string | undefined }) {
    if (prevProps.SearchText !== this.props.SearchText) {
      console.log(this.props.SearchText);
      this.handleSubmit();
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <div>Loading...</div>}
        <div className="wrapper_cards">
          {this.state.SearchData?.results.map((card) => (
            <div key={`${card.id}`} className="wrapper_card">
              <img src={card.image} className="card_image" alt="card_product" />
              <div>{card.name}</div>
              <div>{card.gender}</div>
              <div>{card.species}</div>
              <div>{card.status}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CardsList;
