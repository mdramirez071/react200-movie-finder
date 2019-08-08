/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8080);

const url = 'http://localhost:8080';


describe('End-To-End', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct header title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Welcome To OMDB Movie Finder');
      })
  ).timeout(5000);
  
  it('returns 200 status code if / route loads successfully', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('returns 404 status code if / route loads unsuccessfully', () => axios.get(url)
    .catch(err => expect(err.status === 404)));
    
  });
