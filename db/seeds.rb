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
