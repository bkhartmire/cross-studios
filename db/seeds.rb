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

instructors = Instructor.find_or_create_by([
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
  {name: , studio_id: , instructor_id:, day: ,time: },
])
