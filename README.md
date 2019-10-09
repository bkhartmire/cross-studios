# Cross Studios

[Demo](https://www.youtube.com/watch?v=6jpSIkgXY4E&feature=youtu.be)

Cross Studios is a Ruby on Rails & React JS web application built to serve dancers in Los Angeles. Using data scraped from studio websites with the Nokogiri gem, dancers can view the dance class schedules at various top studios and from their favorite instructors for the week. Users can track their favorite instructors, leave reviews for instructors, and manage their personal class schedule for the week on their private profile.

##To run this app on your local machine:

## 1. Clone repository

`git clone https://github.com/bkhartmire/cross-studios.git`

`cd cross-studios`

## 2. Install Rails dependencies

`bundle install`

## 3. Set up DB

`rake db:schema:load`

`rake db:seed`

## 4. Start backend server

`bundle exec rails s -p 3001`

## 5. Install Node.js dependencies

`cd client`

`npm install`

## 6. Launch frontend development server

`npm start`




