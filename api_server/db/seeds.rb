# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  user = User.create!({ first_name: Faker::Name.first_name,
                        last_name: Faker::Name.last_name,
                        gender: "no_answer",
                        email: Faker::Internet.email,
                        password_digest: Faker::Internet.password
                      })
  room = Room.new({ name: Faker::Team.creature })
  room.userrooms << Userroom.new({ user: user, admin: true })
  room.save!
  post = room.posts.create!({ user_id: user.id,
                              room_id: room.id,
                              content: Faker::Hipster.word,
                              description: Faker::Lorem.sentence,
                              seen: false,
                              category: "note"
                            })
end

