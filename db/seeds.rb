# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'open-uri'

User.destroy_all
Product.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')

user1 = User.create(username: 'DemoUser', password: 'password', email: 'DemoUser@craftsy.com')
user2 = User.create(username: 'iSellArt', password: 'iSellArt', email: 'iSellArt@craftsy.com')
user3 = User.create(username: 'iSellBags', password: 'iSellBags', email: 'iSellBags@craftsy.com')
user4 = User.create(username: 'iSellFunGifts', password: 'iSellFunGifts', email: 'iSellFunGifts@craftsy.com')
user5 = User.create(username: 'iSellFurniture', password: 'iSellFurniture', email: 'iSellFurniture@craftsy.com')
user6 = User.create(username: 'iSellHomeDecor', password: 'iSellHomeDecor', email: 'iSellHomeDecor@craftsy.com')
user7 = User.create(username: 'iSellKitchenware', password: 'iSellKitchenware', email: 'iSellKitchenware@craftsy.com')
user8 = User.create(username: 'iSellPlants', password: 'iSellPlants', email: 'iSellPlants@craftsy.com')

#Art
art1 = Product.create(product_name: 'Golden Waves', description: 'Golden Waves', price: 299.99, user_id: 2)
art2 = Product.create(product_name: 'All the Colors', description: 'All the Colors', price: 249.99, user_id: 2)
art3 = Product.create(product_name: 'Tranquility', description: 'Tranquility', price: 179.99, user_id: 2)
art4 = Product.create(product_name: 'Green & White', description: 'Green & White', price: 149.99, user_id: 2)
art5 = Product.create(product_name: 'Panda Chillin', description: 'Panda Chillin', price: 119.99, user_id: 2)
art6 = Product.create(product_name: 'Gold Leaf Waterfalls', description: 'Gold Leaf Waterfalls', price: 239.99, user_id: 2)
art7 = Product.create(product_name: 'Abstraction', description: 'Abstraction', price: 329.99, user_id: 2)
art8 = Product.create(product_name: 'Into the Night', description: 'Into the Night', price: 69.99, user_id: 2)
art9 = Product.create(product_name: 'Geometric Wood', description: 'Geometric Wood', price: 349.99, user_id: 2)
art10 = Product.create(product_name: 'Pebble Family', description: 'Pebble Family', price: 39.99, user_id: 2)

art1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988769/Art/gold-waves.jpg"), filename: "golden-waves.jpg")
art2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988769/Art/palette-knife-abstract.jpg"), filename: "all-the-colors.jpg")
art3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988769/Art/chinese-inpsired-abstract.jpg"), filename: "tranquility.jpg")
art4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988769/Art/green-white-stripe-acrylic-painting.jpg"), filename: "green-white.jpg")
art5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/panda-with-headphones.jpg"), filename: "panda-chillin.jpg")
art6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/gold-leaf-waterfalls.jpg"), filename: "gold-leaf-waterfalls.jpg")
art7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/abstract.jpg"), filename: "abstraction.jpg")
art8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/wall-hanging-hoop-art-with-leds.jpg"), filename: "into-the-night")
art9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/wood-wall-hanging.jpg"), filename: "geometric-wood.jpg")
art10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544988768/Art/pebble-art.jpg"), filename: "pebble-family.jpg")

art1.save!
art2.save!
art3.save!
art4.save!
art5.save!
art6.save!
art7.save!
art8.save!
art9.save!
art10.save!

#Bags & Accessories

bag1 = Product.create(product_name: 'Personalized Wallet', description: 'Personalized Wallet', price: 39.99, user_id: 3)
bag2 = Product.create(product_name: 'Canvas Backpack', description: 'Canvas Backpack', price: 79.99, user_id: 3)
bag3 = Product.create(product_name: 'Waxed Canvas Leather Duffel', description: 'Waxed Canvas Leather Duffel', price: 79.99, user_id: 3)
bag4 = Product.create(product_name: 'Leather iPad Case', description: 'Retro Post Mail Candy Box', price: 49.99, user_id: 3)
bag5 = Product.create(product_name: 'Dinosaur Clutch Handbag', description: 'Dinosaur Clutch Handbag', price: 44.99, user_id: 3)
bag6 = Product.create(product_name: 'Personalized Toiletry Bag', description: 'Personalized Toiletry Bag', price: 19.99, user_id: 3)
bag7 = Product.create(product_name: 'Grooming Gift Set', description: 'Grooming Gift Set', price: 49.99, user_id: 3)
bag8 = Product.create(product_name: 'Leather Passport Cover', description: 'Leather Passport Cover', price: 39.99, user_id: 3)
bag9 = Product.create(product_name: 'Pastel Pink Cross Body Purse', description: 'Pastel Pink Cross Body Purse', price: 84.99, user_id: 3)
bag10 = Product.create(product_name: 'Genuine Leather Backpack', description: 'Genuine Leather Backpack', price: 99.99, user_id: 3)

bag1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989009/Bags-Accessories/custom-wallets.jpg"), filename: "personalized-wallet.jpg")
bag2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989009/Bags-Accessories/canvas-backpack.jpg"), filename: "canvas-backpack.jpg")
bag3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989007/Bags-Accessories/waxed-canvas-leather-bag.jpg"), filename: "waxed-canvas-leather-bag.jpg")
bag4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989007/Bags-Accessories/leather-ipad-case.jpg"), filename: "leather-ipad-case.jpg")
bag5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989007/Bags-Accessories/dinosaur-clutch-hangbags.jpg"), filename: "dinosaur-clutch-handbag.jpg")
bag6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989007/Bags-Accessories/toiletry-bag.jpg"), filename: "personalized-toiletry-bag.jpg")
bag7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989006/Bags-Accessories/grooming-gift-set.jpg"), filename: "grooming-gift-set.jpg")
bag8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989006/Bags-Accessories/leather-passport-cover.jpg"), filename: "leather-passport-cover")
bag9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989006/Bags-Accessories/cross-body-purse.jpg"), filename: "pastel-pink-cross-body-purse.jpg")
bag10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989006/Bags-Accessories/leather-backpack.jpg"), filename: "genuine-leather-backpack.jpg")

bag1.save!
bag2.save!
bag3.save!
bag4.save!
bag5.save!
bag6.save!
bag7.save!
bag8.save!
bag9.save!
bag10.save!

#Fun Gift Ideas

gift1 = Product.create(product_name: 'Pikachu PokeBall Sushi Terrarium', description: 'Pikachu PokeBall Sushi Terrarium', price: 31.99, user_id: 4)
gift2 = Product.create(product_name: 'Colorful Party Hats', description: 'Colorful Party Hats', price: 12.99, user_id: 4)
gift3 = Product.create(product_name: 'Peas In a Pod', description: 'Peas In a Pod', price: 39.99, user_id: 4)
gift4 = Product.create(product_name: 'Retro Post Mail Candy Box', description: 'Retro Post Mail Candy Box', price: 3.49, user_id: 4)
gift5 = Product.create(product_name: 'Programmer Problem T-Shirt', description: 'Programmer Problem T-Shirt', price: 21.99, user_id: 4)
gift6 = Product.create(product_name: 'Maple Gift Boxes', description: 'Maple Gift Boxes', price: 9.99, user_id: 4)
gift7 = Product.create(product_name: 'Handmade Brooches', description: 'Handmade Brooches', price: 13.99, user_id: 4)
gift8 = Product.create(product_name: 'Hanging Monkey Ornament', description: 'Hanging Monkey Ornament', price: 10.99, user_id: 4)
gift9 = Product.create(product_name: 'Minon Pincushion', description: 'Minon Pincushion', price: 12.99, user_id: 4)
gift10 = Product.create(product_name: 'Reindeer Paper Cups', description: 'Reindeer Paper Cups', price: 9.99, user_id: 4)

gift1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989030/Fun%20Gift%20Ideas/pikachu-pokeball-sushi-terrarium.jpg"), filename: "pikachu-terrarium.jpg")
gift2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989030/Fun%20Gift%20Ideas/colorful-party-hats.jpg"), filename: "party-hats.jpg")
gift3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989030/Fun%20Gift%20Ideas/pea-pods.jpg"), filename: "peas-in-a-pod.jpg")
gift4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989030/Fun%20Gift%20Ideas/retro-postal-candy-box.jpg"), filename: "post-mail-candy-box.jpg")
gift5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989030/Fun%20Gift%20Ideas/coding-humor.jpg"), filename: "programmer-tshirt.jpg")
gift6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989029/Fun%20Gift%20Ideas/maple-paper-gift-boxes.jpg"), filename: "maple-gift-boxes.jpg")
gift7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989029/Fun%20Gift%20Ideas/hand-made-brooches.jpg"), filename: "handmade-brooches.jpg")
gift8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989029/Fun%20Gift%20Ideas/monkey-christmas-ornament.jpg"), filename: "monkey-ornament.jpg")
gift9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989028/Fun%20Gift%20Ideas/minion-pincushion.png"), filename: "minion-pincushion.jpg")
gift10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989028/Fun%20Gift%20Ideas/reindeer-paper-cups.jpg"), filename: "reindeer-paper-cups.jpg")

gift1.save!
gift2.save!
gift3.save!
gift4.save!
gift5.save!
gift6.save!
gift7.save!
gift8.save!
gift9.save!
gift10.save!

#Furniture

furniture1 = Product.create(product_name: 'Spacious Organizational Bookshelf', description: 'Spacious Organizational Bookshelf', price: 239.99, user_id: 5)
furniture2 = Product.create(product_name: 'Industrial Wooden Bench', description: 'Industrial Wooden Bench', price: 199.99, user_id: 5)
furniture3 = Product.create(product_name: 'Elegant Dining Table', description: 'Elegant Dining Table', price: 399.99, user_id: 5)
furniture4 = Product.create(product_name: 'Hammock Swing Chair', description: 'Hammock Swing Chair', price: 79.99, user_id: 5)
furniture5 = Product.create(product_name: 'Gold Trim Sofa', description: 'Gold Trim Sofa', price: 1299.99, user_id: 5)
furniture6 = Product.create(product_name: 'Minimalist Office Desk', description: 'Minimalist Office Desk', price: 499.99, user_id: 5)
furniture7 = Product.create(product_name: 'Comfy Gray Sofa', description: 'Comfy Gray Sofa', price: 599.99, user_id: 5)
furniture8 = Product.create(product_name: 'Coffee Table', description: 'Coffee Table', price: 269.99, user_id: 5)
furniture9 = Product.create(product_name: 'Relaxation Chair', description: 'Relaxation Chair', price: 299.99, user_id: 5)
furniture10 = Product.create(product_name: 'Velvet Ottoman', description: 'Velvet Ottoman', price: 189.99, user_id: 5)

furniture1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989050/Furniture/bookshelf.jpg"), filename: "bookshelf.jpg")
furniture2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989050/Furniture/industrial-wooden-bench.jpg"), filename: "wooden-bench.jpg")
furniture3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989050/Furniture/dining-table.jpg"), filename: "dining-table.jpg")
furniture4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989049/Furniture/hammock-swing-chair.jpg"), filename: "hammock-swing-chair.jpg")
furniture5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989049/Furniture/fancy-sofa.jpg"), filename: "gold-trim-sofa.jpg")
furniture6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989049/Furniture/modern-office-desk.jpg"), filename: "office-desk.jpg")
furniture7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989048/Furniture/gray-sofa.jpg"), filename: "gray-sofa.jpg")
furniture8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989048/Furniture/coffee_-table.jpg"), filename: "coffee-table.jpg")
furniture9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989048/Furniture/carpet-chair.jpg"), filename: "relaxation-chair.jpg")
furniture10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989048/Furniture/ottoman.jpg"), filename: "ottoman.jpg")

furniture1.save!
furniture2.save!
furniture3.save!
furniture4.save!
furniture5.save!
furniture6.save!
furniture7.save!
furniture8.save!
furniture9.save!
furniture10.save!

#Home Decor

home1 = Product.create(product_name: 'Family Tree Portrait', description: 'Family Tree Portrait', price: 39.99, user_id: 6)
home2 = Product.create(product_name: 'Desk Organizer With Lamp', description: 'Desk Organizer With Lamp', price: 49.99, user_id: 6)
home3 = Product.create(product_name: 'Decorative Pillows', description: 'Decorative Pillows', price: 39.99, user_id: 6)
home4 = Product.create(product_name: 'Cute Bear Rug', description: 'Cute Bear Rug', price: 99.99, user_id: 6)
home5 = Product.create(product_name: 'Striking Clock', description: 'Striking Clock', price: 64.99, user_id: 6)
home6 = Product.create(product_name: 'Fig Rosemary Candle', description: 'Fig Rosemary Candle', price: 11.99, user_id: 6)
home7 = Product.create(product_name: 'Decorative Bottle Lights', description: 'Decorative Bottle Lights', price: 29.99, user_id: 6)
home8 = Product.create(product_name: 'Aloha Mahalo Door Mat', description: 'Aloha Mahalo Door Mat', price: 27.99, user_id: 6)
home9 = Product.create(product_name: 'Scratch Off World Map', description: 'Scratch Off World Map', price: 42.99, user_id: 6)
home10 = Product.create(product_name: 'Warmest Of Blankets', description: 'Warmest Of Blankets', price: 30.99, user_id: 6)

home1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989074/Home%20Decor/family-tree.jpg"), filename: "family-tree.jpg")
home2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989074/Home%20Decor/desk-organizer-with-lamp.jpg"), filename: "desk-organizer-with-lamp.jpg")
home3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989074/Home%20Decor/decorative-pillows.jpg"), filename: "decorative-pillows.jpg")
home4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989074/Home%20Decor/bear-rug.jpg"), filename: "cute-bear-rug.jpg")
home5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989073/Home%20Decor/clock.jpg"), filename: "striking-clock.jpg")
home6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989073/Home%20Decor/fig-rosemary-candle.jpg"), filename: "fig-rosemary-candle.jpg")
home7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989073/Home%20Decor/bottle-lights.jpg"), filename: "bottle-lights.jpg")
home8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989072/Home%20Decor/welcome-mat.jpg"), filename: "aloha-mahalo-mat.jpg")
home9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989072/Home%20Decor/scratch-off-map.jpg"), filename: "world-map.jpg")
home10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989072/Home%20Decor/comfy-blanket.jpg"), filename: "warm-blanket.jpg")

home1.save!
home2.save!
home3.save!
home4.save!
home5.save!
home6.save!
home7.save!
home8.save!
home9.save!
home10.save!

#Kitchenware

kitchen1 = Product.create(product_name: 'Ceramic Dinosaur Bowl', description: 'Ceramic Dinosaur Bowl', price: 29.99, user_id: 7)
kitchen2 = Product.create(product_name: 'Gold-Trim Dinnerware Set', description: 'Gold-Trim Dinnerware Set', price: 129.99, user_id: 7)
kitchen3 = Product.create(product_name: 'Rustic Copper Pan', description: 'Rustic Copper Pan', price: 89.99, user_id: 7)
kitchen4 = Product.create(product_name: 'Coffee Pour Over', description: 'Coffee Pour Over', price: 37.99, user_id: 7)
kitchen5 = Product.create(product_name: 'Black and Gold Ceramic Bowl', description: 'Black and Gold Ceramic Bowl', price: 27.99, user_id: 7)
kitchen6 = Product.create(product_name: 'Set of Chef Knifes', description: 'Set of Chef Knifes', price: 82.99, user_id: 7)
kitchen7 = Product.create(product_name: 'Mugs Galore', description: 'Mugs Galore', price: 27.99, user_id: 7)
kitchen8 = Product.create(product_name: 'Laser Cut Coasters', description: 'Laser Cut Coasters', price: 19.99, user_id: 7)
kitchen9 = Product.create(product_name: 'Olive Wood Serving Plate and Cheese Knives', description: 'Olive Wood Serving Plate and Cheese Knives', price: 41.99, user_id: 7)
kitchen10 = Product.create(product_name: 'Slate Serving Board', description: 'Slate Serving Board', price: 32.99, user_id: 7)

kitchen1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989093/Kitchen/ceramic-dino.jpg"), filename: "dinosaur-bowl.jpg")
kitchen2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989093/Kitchen/dinnware-set.jpg"), filename: "dinnerware-set.jpg")
kitchen3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989093/Kitchen/copper-pan.jpg"), filename: "copper-pan.jpg")
kitchen4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989092/Kitchen/coffee-pour-over_2.jpg"), filename: "coffee-pour-over.jpg")
kitchen5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989092/Kitchen/black-gold-ceramic-bowl.jpg"), filename: "black-gold-ceramic-bowl.jpg")
kitchen6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989092/Kitchen/chef-knives.jpg"), filename: "chef-knives.jpg")
kitchen7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989092/Kitchen/various-mugs.jpg"), filename: "mugs.jpg")
kitchen8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989091/Kitchen/laser-cut-coasters.jpg"), filename: "coasters.jpg")
kitchen9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989091/Kitchen/olive-wood-cheese-knives.jpg"), filename: "cheese-board-and-knives.jpg")
kitchen10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989091/Kitchen/slate-serving-board.jpg"), filename: "slate-serving-board.jpg")

kitchen1.save!
kitchen2.save!
kitchen3.save!
kitchen4.save!
kitchen5.save!
kitchen6.save!
kitchen7.save!
kitchen8.save!
kitchen9.save!
kitchen10.save!

#Plants

plant1 = Product.create(product_name: 'Living Succulent Wall', description: 'Living Succulent Wall', price: 639.99, user_id: 8)
plant2 = Product.create(product_name: 'Concrete Gold-Trim Pots', description: 'Concrete Gold-Trim Pots', price: 36.99, user_id: 8)
plant3 = Product.create(product_name: 'Wooden Planter Box', description: 'Wooden Planter Box', price: 23.99, user_id: 8)
plant4 = Product.create(product_name: 'Bonsai Tree', description: 'Bonsai Tree', price: 179.99, user_id: 8)
plant5 = Product.create(product_name: 'Sitting Pot', description: 'Sitting Pot', price: 21.99, user_id: 8)
plant6 = Product.create(product_name: 'Totoro Terrarium', description: 'Totoro Terrarium', price: 27.99, user_id: 8)
plant7 = Product.create(product_name: 'Giraffe Pots', description: 'Giraffe Pots', price: 29.99, user_id: 8)
plant8 = Product.create(product_name: 'Honeycomb Wall Planter', description: 'Honeycomb Wall Planter', price: 32.99, user_id: 8)
plant9 = Product.create(product_name: 'Geometric Vases', description: 'Geometric Vases', price: 24.99, user_id: 8)
plant10 = Product.create(product_name: 'Metal Plant Stand', description: 'Metal Plant Stand', price: 42.99, user_id: 8)

plant1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989112/Plants/succulent-living-wall.jpg"), filename: "succulent-wall.jpg")
plant2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989111/Plants/concrete-gold-pots.jpg"), filename: "concrete-gold-pots.jpg")
plant3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989110/Plants/wood-planter-box.jpg"), filename: "wooden-planter-box.jpg")
plant4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989110/Plants/bonsai-tree.jpg"), filename: "bonsai-tree.jpg")
plant5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989110/Plants/sitting-pot.jpg"), filename: "sitting-pot.jpg")
plant6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989110/Plants/totoro-terraium.jpg"), filename: "totoro-terrarium.jpg")
plant7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989109/Plants/giraffe-pots.jpg"), filename: "giraffe-pots.jpg")
plant8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989109/Plants/honeycomb-wall-planter.jpg"), filename: "honeycomb-wall-planter.jpg")
plant9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989109/Plants/geometric-vase.jpg"), filename: "geometric-vases.jpg")
plant10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1544989109/Plants/metal-plant-stand-with-bowl.jpg"), filename: "metal-plant-stand.jpg")

plant1.save!
plant2.save!
plant3.save!
plant4.save!
plant5.save!
plant6.save!
plant7.save!
plant8.save!
plant9.save!
plant10.save!