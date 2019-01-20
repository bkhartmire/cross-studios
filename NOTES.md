users
users have a schedule on profile page. Calendar?? Maybe that's too complex. But should be able to add to schedule and list on profile. Persist data...favorite an instructor?
Instructor page will show number of favorites from previous students. (more friendly, anonymous, less awkward version of reviewing)
Users maintain an array of favorited instructors.

there should NOT be a link for TBA/changes instructor classes!

XStudio: name, address_id, classes, website
XAddress: line_1, line_2
Instructor: name, classes

DanceClasses:
-name
-studio_id
-instructor_id
-day
-time

To Do List:
-sort dance classes chronologically
-create users sign up/login
-can only navigate if logged in
-user profile with their own schedules
-can delete classes from your schedules
-each dance class listing has button to add to schedule. (danceclasses and instructor/:id routes)
-alert if user tries to add class that conflicts with schedule
-Filter dance_classes by day or studio?
