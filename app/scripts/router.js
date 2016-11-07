import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import data from './data';
import Card from './components/card';
import Login from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
import CreateCard from './components/create';

const container = document.getElementById('container');

const Router = Backbone.Router.extend({
  routes: {
    '': 'login',
    'signup': 'signup',
    'card/:name': 'card',
    'create': 'create',
    // 'card2': 'card2',
    // 'card3': 'card3',
    // 'card4': 'card4',
    // 'card5': 'card5'
  },
  login(){
    ReactDom.render(<Login/>, container)
  },
  signup(){
    // ReactDom.render(<Nav/>, container)
    ReactDom.render(<Signup/>, container)
  },
  card(name){
    let singleCard = data.filter((card, i, arr) => {
      if(card.name === name){
        return true;
      }
    });
    // ReactDom.render(<Nav/>, container)
    ReactDom.render(<Card data={singleCard[0]}/>, container)
  },
  create(){
    ReactDom.render(<CreateCard/>, container)
  }
});

export default new Router();
