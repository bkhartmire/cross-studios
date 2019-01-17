studios = Studio.create([
    {name: 'Millennium Dance Complex', website: 'http://millenniumdancecomplex.com'},
    {name: 'Movement Lifestyle', website: 'https://www.themovementlifestyle.com'},
    {name: 'The Playground LA', website: 'https://www.playgroundla.dance'}
])

addresses = Address.create([
  {line_1: '11528 Ventura Blvd,', line_2: 'Studio City, CA 91604', studio_id: Studio.find_by(name: 'Millennium Dance Complex').id},
  {line_1: '11105 Weddington St,', line_2: 'North Hollywood, CA 91601', studio_id: Studio.find_by(name: 'Movement Lifestyle').id},
  {line_1: '7375 Melrose Ave,', line_2: 'Los Angeles, CA 90046', studio_id: Studio.find_by(name: 'The Playground LA').id}
])

instructors = Instructor.create([
  {name: 'Margie Dilivio'},
  {name: 'Nick Gilligan'},
  {name: 'Charlie Bartley'},
  {name: 'Kennis Marquis'},
  {name: 'Nicole Kirkland'},
  {name: 'Sam Allen'},
  {name: 'Ava Bernstine-Mitchell'},
  {name: 'Dexter Carr'},
  {name: 'Michelle Janine'},
  {name: 'Marissa Heart'},
  {name: 'Julian Deguzman'},
  {name: 'Phil Wright'},
  {name: 'Rex Kline'},
  {name: 'Shane Bruce'},
  {name: 'Hamilton Evans'},
  {name: 'Kenny Wormald'},
  {name: 'Alexis Beauregard'},
  {name: 'Brinn Nicole'},
  {name: 'Cisco Ruelas'},
  {name: 'JJ Dancer'},
  {name: 'Charlie Bartley'},
  {name: 'Guy Groove'},
  {name: 'Rumer Noel'},
  {name: 'Margie Dilivio'}
])

dance_classes = DanceClass.create([
  #regular schedule from The Playground LA
  {name: 'Booty Bake', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Margie Dilivio').id, day: 'MONDAY',time: '9:15am-10:15am'},
  {name: 'Hip Hope', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Nick Gilligan').id, day: 'MONDAY',time: '4:30pm-5:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Charlie Bartley').id, day: 'MONDAY',time: '5:30pm-7:00pm'},
  {name: 'Grooves', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Kennis Marquis').id, day: 'MONDAY',time: '7:00pm-8:15pm'},
  {name: 'Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Nicole Kirkland').id, day: 'MONDAY',time: '8:30pm-10:00pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Sam Allen').id, day: 'TUESDAY',time: '5:30pm-6:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Ava Bernstine-Mitchell').id, day: 'TUESDAY',time: '7:00pm-8:15pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Dexter Carr').id, day: 'TUESDAY',time: '8:30pm-10:00pm'},
  {name: 'Booty Bake', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Michelle Janine').id, day: 'WEDNESDAY',time: '9:15am-10:15am'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Nick Gilligan').id, day: 'WEDNESDAY',time: '10:30am-11:45am'},
  {name: 'Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Marissa Heart').id, day: 'WEDNESDAY',time: '5:00pm-6:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Julian Deguzman').id, day: 'WEDNESDAY',time: '6:30pm-8:00pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Nicole Kirkland').id, day: 'WEDNESDAY',time: '8:00pm-9:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Phil Wright').id, day: 'WEDNESDAY',time: '9:30pm-11:00pm'},
  {name: 'Contemporary', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Rex Kline').id, day: 'THURSDAY',time: '2:00pm-3:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Shane Bruce').id, day: 'THURSDAY',time: '5:00pm-6:00pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Hamilton Evans').id, day: 'THURSDAY',time: '6:30pm-7:45pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Kenny Wormald').id, day: 'THURSDAY',time: '8:00pm-9:30pm'},
  {name: 'Beginner Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Alexis Beauregard').id, day: 'FRIDAY',time: '5:00pm-6:00pm'},
  {name: 'Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Brinn Nicole').id, day: 'FRIDAY',time: '6:00pm-8:00pm'},
  {name: 'Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Cisco Ruelas').id, day: 'FRIDAY',time: '8:30pm-10:00pm'},
  {name: 'Bangin Body', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'JJ Dancer').id, day: 'SATURDAY',time: '10:30am-11:30am'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Charlie Bartley').id, day: 'SATURDAY', time: '12:00pm-1:15pm'},
  {name: 'Beginner Heels', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Alexis Beauregard').id, day: 'SATURDAY',time: '1:30pm-2:45pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Dexter Carr').id, day: 'SATURDAY',time: '3:00pm-4:30pm'},
  {name: 'Hip Hop', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Guy Groove').id, day: 'SUNDAY',time: '1200pm-1:00pm'},
  {name: 'Jazz Funk', studio_id: Studio.find_by(name: 'The Playground LA').id, instructor_id: Instructor.find_by(name: 'Rumer Noel').id, day: 'SUNDAY',time: '1:00pm-2:15pm'},
  #regular schedule from Movement Lifestyle
  {name: '', studio_id: Studio.find_by(name: 'The Movement Lifestyle').id, instructor_id: Instructor.find_by(name: '').id, day: 'SATURDAY',time: ''},
])
