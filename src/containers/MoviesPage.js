import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchMovies} from '../actions'

import MoviesList from '../components/MoviesList';
import MovieShow from './MoviesShow';

const MoviesPage = ({match, movies}) =>
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} component={MovieShow} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a movie from the list.</h3>
    )} />
  </div>;

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);
