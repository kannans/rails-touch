rails-touch
===========

A simple example of using Ruby on Rails, MySQL, and Sencha Touch together.

Requirements
============

### Ruby and Rails

For this example, I used Ruby 1.9.2 and Rails 3.2.6 because that was my current setup for another concurrent project. :)

### MySQL

Yep, it's needed. The database config assumes a localhost with "root" user and empty password.

### WebKit

Sencha Touch requires a WebKit-compatible browser such as Chrome or Safari.

Getting Started
===============

Clone it.

Create the DB, load the schema, and seed it...
  
    rake db:setup

cd into the directory and...

    rails s

Go to localhost:3000 and enjoy.

Usage
=====

This was a quickie to get me started, so it's simple. I stuck a "+1" button in the top toolbar that will increment the "update_count" for user id=1.

I also created a series of tests (found in tests.js) that are run by default via "onReady" in app.js. These tests will test each function in the Rails users_controller.rb and output the result to the browser console.
