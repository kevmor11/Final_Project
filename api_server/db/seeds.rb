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
                        gender: "n/a",
                        email: Faker::Internet.email,
                        password_digest: Faker::Internet.password,
                        remote_avatar_url: "http://www.stottpilates.com/studio/images/instructors/person-placeholder.png"
                      })
  room = Room.new({ name: Faker::Team.creature })
  room.userrooms << Userroom.new({ user: user, admin: true })
  room.save!
  2.times do
    post = room.posts.create!({ user_id: user.id,
                                room_id: room.id,
                                title: Faker::Hipster.word,
                                description: Faker::Lorem.sentence,
                                seen: false,
                                category: "note"
                              })
  end
  2.times do
    post = room.posts.create!({ user_id: user.id,
                                room_id: room.id,
                                remote_content_url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg",
                                title: Faker::Hipster.word,
                                description: Faker::Lorem.sentence,
                                seen: false,
                                category: "image"
                              })
  end
  2.times do
    post = room.posts.create!({ user_id: user.id,
                                room_id: room.id,
                                link: "https://www.google.ca/",
                                title: Faker::Hipster.word,
                                description: Faker::Lorem.sentence,
                                seen: false,
                                category: "link"
                              })
  end

end

