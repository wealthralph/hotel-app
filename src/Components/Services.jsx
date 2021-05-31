import React, { Component } from 'react';
import Title from './Title.jsx';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    Services: [
      {
        icons: <FaBeer />,
        title: 'Free Cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis.',
      },

      {
        icons: <FaHiking/>,
        title: 'Endless Hiking ',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis.',
      },

      {
          icons: <FaShuttleVan/>,
          title: 'Free Shuttle',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis.',
      },

      {
          icons:<FaCocktail/>,
          title: 'Free Cock',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis.',
      }
    ]
  };

  render() {
    return (
      <section className='services'>
          
        <Title title='services'></Title>
        <div className="services-center">
            {this.state.Services.map((item, index) => {
                return(
                    <article key={index} className="service">
                        <span>{item.icons}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
      </section >
    );
  }
}
