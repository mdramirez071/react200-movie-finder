const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

const testLink = 'http://localhost:8888/#/movie/tt0133093'

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('Unit Tests', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

    it('should contain a search input for movies', () => 
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('input');
      })
  );

  it('should contain a button element', () => 
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('button');
    })
  );

  it('should contain the correct movie release date', () => 
    nightmare
      .goto(testLink)
      .evaluate(() => document.getElementById('date').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Release Date');
    })
  ).timeout(5000);
  
  it('should contain a link to return to the search container', () => 
    nightmare
      .goto(testLink)
      .evaluate(() => document.getElementById('link').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Return to Search');
    })
  ).timeout(5000);

  it('should contain movie poster image', () => 
    nightmare
      .goto(testLink)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('img');
      })
  ).timeout(5000);

  it('should contain the correct movie synopsis', () => 
    nightmare
      .goto(testLink)
      .evaluate(() => document.getElementById('plot').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Synopsis');
    })
  ).timeout(5000);

  it('should contain the correct movie rating', () => 
    nightmare
      .goto(testLink)
      .evaluate(() => document.getElementById('rated').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Rated');
    })
  ).timeout(5000);

  it('should contain the correct the movie cast', () => 
  nightmare
    .goto(testLink)
    .evaluate(() => document.getElementById('cast').innerHTML)
    .end()
    .then((text) => {
      expect(text).to.contain('Cast');
  })
).timeout(5000);

it('should contain the correct metaScore for the movie', () => 
nightmare
  .goto(testLink)
  .evaluate(() => document.getElementById('metascore').innerHTML)
  .end()
  .then((text) => {
    expect(text).to.contain('Metascore');
})
).timeout(5000);

it('should contain the correct IMDB rating', () => 
nightmare
  .goto(testLink)
  .evaluate(() => document.getElementById('imdbRating').innerHTML)
  .end()
  .then((text) => {
    expect(text).to.contain('IMDB Rating');
})
).timeout(5000);
});