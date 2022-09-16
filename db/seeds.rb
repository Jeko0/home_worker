# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.first_or_create(username: 'Giorgi',
                            email: 'gafssag@gmail.com',
                            password: 'password',
                            password_confirmation: 'password')

category = Category.first_or_create!(name: "Students",
                                     subject_id: 1
)


subject = Subject.first_or_create!(title: "Math")

writer_info = WritersInfo.first_or_create!(user_id: 1,
                                          rating: 5,
                                          subject_id: 1,
                                           category_id: 1)


task = Task.first_or_create!(title: "Task number 1",
                             description: "it's an examination task",
                             salary: 100,
                             client_id: 1,
                             writer_id: 1,
                             category_id: 1)

review = Review.first_or_create!(title: "My first review",
                                 body: "very good very nicee :))",
                                 user_id: 1,
                                 writers_info_id: 1)

comment = Comment.first_or_create!(body: "it was amazing",
                                   user_id: 1,
                                   review_id: 1
)

