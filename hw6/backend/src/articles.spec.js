/*
 * Test suite for articles.js
 */
const expect = require('chai').expect
const fetch = require('isomorphic-fetch')
var post = {method: 'POST'}

const url = path => `http://localhost:3000${path}`

describe('Validate Article functionality', () => {

	it('should give me thee or more articles', (done) => {
		// IMPLEMENT ME
		fetch(url("/articles"))
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
				expect(body.length).not.toBeLessThan(3)
		})
		.then(done)
		.catch(done)
	}, 500)

	it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		// verify you get the article back with an id
		// verify the content of the article
		// add a second article
		// verify the article id increases by one
		// verify the second artice has the correct content
		fetch(url("/article"), post)
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
				expect(body.id).to.eql(4)
		})
		.then(done)
		.catch(done)


	fetch(url("/article"), post)
	.then(res => {
			expect(res.status).to.eql(200)
			return res.text()
	})
	.then(body =>{
			expect(body.id).to.eql(5)
	})
	.then(done)
	.catch(done)
}, 500)

	it('should return an article with a specified id', (done) => {
		// call GET /articles first to find an id, perhaps one at random
		// then call GET /articles/id with the chosen id
		// validate that only one article is returned
		// IMPLEMENT ME
		fetch(url("/articles/3"))
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
				expect(body.author).to.eql('Scottie')
		})
		.then(done)
		.catch(done)
	}, 500)

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id, perhaps 0
		// confirm that you get no results
		fetch(url("/articles/85948"))
		.then(res => {
				expect(res.status).to.eql(200)
				return res.text()
		})
		.then(body =>{
				expect(body.author).to.eql(undefined)
		})
		.then(done)
		.catch(done)
	}, 500)

});
