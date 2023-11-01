import React from 'react';
import './SearchBlock.css';
import CardsList from './CardsList';
import { IPropsLS } from './types/types';

class SearchBlock extends React.Component<IPropsLS, { SearchValue: string }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      SearchValue: localStorage.getItem('inputValue') || '',
    };
  }

  handleSubmit = () => {
    localStorage.setItem('inputValue', this.state.SearchValue);
  };

  render(): React.ReactNode {
    return (
      <div>
        <div className="search_block_wrapper">
          <form onSubmit={this.handleSubmit} className="search_block_wrapper">
            <input
              type="search"
              className="input_search"
              defaultValue={localStorage.getItem('inputValue') || ''}
              onChange={(e) =>
                this.setState({
                  SearchValue: e.target.value.split(' ').join(''),
                })
              }
            ></input>
            <button className="btn_search">Search</button>
          </form>
        </div>
        <div>
          <CardsList
            SearchText={localStorage.getItem('inputValue') || ''}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default SearchBlock;
