users
users have a schedule on profile page. Calendar?? Maybe that's too complex. But should be able to add to schedule and list on profile. Persist data...favorite an instructor?
Instructor page will show number of favorites from previous students. (more friendly, anonymous, less awkward version of reviewing)
Users maintain an array of favorited instructors.


XStudio: name, address_id, classes, website
XAddress: line_1, line_2
Instructor: name, classes

DanceClasses:
-name
-studio_id
-instructor_id
-day
-time

Dance Classes are scraped from Nokogiri.
Millennium Dance Complex: http://millenniumdancecomplex.com/schedule/
Movement Lifestyle: https://www.themovementlifestyle.com/
Playground: https://www.playgroundla.dance/schedule/

UH-OH: turns out movement and playground render schedule elements with JS. can't scrape with nokogiri :(
Can I use jquery selectors and JS constructor syntax to create new danceclass objects??
