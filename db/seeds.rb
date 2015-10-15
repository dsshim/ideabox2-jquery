100.times do
  Idea.create(title: Faker::Company.name, body: Faker::Lorem.sentence(20))
end
