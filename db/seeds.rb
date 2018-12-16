# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'open-uri'

User.destroy_all
Product.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')

user1 = User.create(username: 'DemoUser', password: 'password', email: 'DemoUser@demo.com')

product1 = Product.create(product_name: 'Product1', description: 'Description1', price: 7.99, user_id: 1)
product1.photo.attach(io: open("https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"), filename: "testing.jpg")

product2 = Product.create(product_name: 'Product2', description: 'Description2', price: 7.99, user_id: 1)

product3 = Product.create(product_name: 'Product3', description: 'Description3', price: 7.99, user_id: 1)

product4 = Product.create(product_name: 'Product4', description: 'Description4', price: 7.99, user_id: 1)

product5 = Product.create(product_name: 'Product5', description: 'Description5', price: 7.99, user_id: 1)

product6 = Product.create(product_name: 'Product6', description: 'Description6', price: 7.99, user_id: 1)

product7 = Product.create(product_name: 'Product7', description: 'Description7', price: 7.99, user_id: 1)

product8 = Product.create(product_name: 'Product8', description: 'Description8', price: 7.99, user_id: 1)

product9 = Product.create(product_name: 'Product9', description: 'Description9', price: 7.99, user_id: 1)

product10 = Product.create(product_name: 'Product10', description: 'Description10', price: 7.99, user_id: 1)

product1.save!
product2.save!
product3.save!
product4.save!
product5.save!
product6.save!
product7.save!
product8.save!
product9.save!
product10.save!
