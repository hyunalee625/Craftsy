# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'open-uri'

User.destroy_all
Product.destroy_all
Review.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

user1 = User.create(username: 'DemoUser', password: 'password', email: 'DemoUser@craftsy.com')
user2 = User.create(username: 'iSellArt', password: 'iSellArt', email: 'iSellArt@craftsy.com')
user3 = User.create(username: 'iSellBags', password: 'iSellBags', email: 'iSellBags@craftsy.com')
user4 = User.create(username: 'iSellFunGifts', password: 'iSellFunGifts', email: 'iSellFunGifts@craftsy.com')
user5 = User.create(username: 'iSellFurniture', password: 'iSellFurniture', email: 'iSellFurniture@craftsy.com')
user6 = User.create(username: 'iSellHomeDecor', password: 'iSellHomeDecor', email: 'iSellHomeDecor@craftsy.com')
user7 = User.create(username: 'iSellKitchenware', password: 'iSellKitchenware', email: 'iSellKitchenware@craftsy.com')
user8 = User.create(username: 'iSellPlants', password: 'iSellPlants', email: 'iSellPlants@craftsy.com')

user1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/cute.png"), filename: "cute-emoji.png")
user2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/wink.png"), filename: "wink-emoji.png")
user3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/cool.png"), filename: "cool-emoji.png")
user4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/happy.png"), filename: "happy-emoji.png")
user5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/suspicious.png"), filename: "suspicious-emoji.png")
user6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/nerd.png"), filename: "nerd-emoji.png")
user7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/tongue.png"), filename: "tongue-emoji.png")
user8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/v1545072750/Profile-Pics/laughing.png"), filename: "laughing-emoji.png")

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!

#Art
art1 = Product.create(product_name: 'Golden Waves', description: 'This abstract geometric gold acrylic painting is the perfect center piece to any living space.', price: 299.99, user_id: 1)

art2 = Product.create(product_name: 'All the Colors', description: 'This is an original painting, 100% hand painted on canvas, and coated with a layer of semi gloss varnish. Thick paints , skilled palette knife work, expressionist impasto style, and delicate color tones all come together to create a deep, thoughtful surreal image.', price: 249.99, user_id: 2)

art3 = Product.create(product_name: 'Tranquility', description: 'Find inspiration and peace with this beautiful acrylic painting of mountains in the distance.', price: 179.99, user_id: 2)

art4 = Product.create(product_name: 'Green & White', description: 'This artwork consists of 3 pieces. Dipslay them in any order you prefer. My art process is intuitive, like a conversation I am having with the canvas. I hope this piece brings as much joy the viewer as it has me.', price: 149.99, user_id: 2)

art5 = Product.create(product_name: 'Panda Chillin', description: 'What would you do if you saw a panda in the wild listening to music through headphones? Probably think back to this painting, huh?', price: 119.99, user_id: 2)

art6 = Product.create(product_name: 'Gold Leaf Waterfalls', description: 'This artwork consists of 3 pieces. Each displaying a golden waterfall. A beautiful, versatile piece that can finish off any room.', price: 239.99, user_id: 2)

art7 = Product.create(product_name: 'Abstraction', description: 'Hand-painted black white abstract painting on canvas. The painting will not come framed. It will be rolled and shipped in a PVC tube to protect from damage during transit.', price: 329.99, user_id: 2)

art8 = Product.create(product_name: 'Into the Night', description: 'This one of a kind wall hanging is hand embroidered over a 7" wooden embroidery hoop. The well arranged house and the silver trees are shrouded in sparkling stars. Light up the night sky with the flick of a switch on the back!', price: 69.99, user_id: 2)

art9 = Product.create(product_name: 'Geometric Wood', description: 'Reclaimed wood wall decor panel will be an excellent gift for holidays! Professionally made reclaimed wood wall art will make a stunning focal point in your home!', price: 349.99, user_id: 2)

art10 = Product.create(product_name: 'Pebble Family', description: 'New parents gift, pebble art family, rock art family, new baby congratulations, baby shower gift, pebble art picture, new family art.', price: 39.99, user_id: 2)

art1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988769/Art/gold-waves.jpg"), filename: "golden-waves.jpg")
art2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988769/Art/palette-knife-abstract.jpg"), filename: "all-the-colors.jpg")
art3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988769/Art/chinese-inpsired-abstract.jpg"), filename: "tranquility.jpg")
art4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988769/Art/green-white-stripe-acrylic-painting.jpg"), filename: "green-white.jpg")
art5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/panda-with-headphones.jpg"), filename: "panda-chillin.jpg")
art6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/gold-leaf-waterfalls.jpg"), filename: "gold-leaf-waterfalls.jpg")
art7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/abstract.jpg"), filename: "abstraction.jpg")
art8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/wall-hanging-hoop-art-with-leds.jpg"), filename: "into-the-night.jpg")
art9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/wood-wall-hanging.jpg"), filename: "geometric-wood.jpg")
art10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544988768/Art/pebble-art.jpg"), filename: "pebble-family.jpg")

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

bag1 = Product.create(product_name: 'Personalized Wallet', description: "You'll love our engraved men's wallets! Each of our custom wallets is custom laser engraved to your specifications with initials, names or monograms. Personalized wallets make excellent Christmas gifts!", price: 39.99, user_id: 1)

bag2 = Product.create(product_name: 'Canvas Backpack', description: 'This unique backpack is big and roomy. Great for carrying all your gear whether at school, on the trail or running around town. Its main compartment fits most laptops. A snap closure ensures the main compartment is secure.', price: 79.99, user_id: 3)

bag3 = Product.create(product_name: 'Waxed Canvas Leather Duffel', description: 'The Humber waxed canvas holdall leather bag is a durable multi-purpose holdall, book bag, laptop bag and tech bag. Available in Moss and Camel colours, our unisex waxed cotton bag with brown leather is perfect for the daily commute, afternoon exploration and weekend adventure.', price: 79.99, user_id: 3)

bag4 = Product.create(product_name: 'Leather iPad Case', description: "Give your iPad the love and affection it deserves with this premium leather case. We know your're a stylish person, so why not make sure your iPad is just as stylish?", price: 49.99, user_id: 3)

bag5 = Product.create(product_name: 'Dinosaur Clutch Handbag', description: 'There is nothing impressive than this 3D dinosaur purse and somebody in your life would love this for Christmas! Can be worn as a crossbody bag or over the shoulder.', price: 44.99, user_id: 3)

bag6 = Product.create(product_name: 'Personalized Toiletry Bag', description: 'This toiletry bag is the perfect go-to item for any time you travel. Keep everything you need organized and safe.', price: 19.99, user_id: 3)

bag7 = Product.create(product_name: 'Grooming Gift Set', description: 'These leather grooming kits are every bit as great as you could think they are. These bags are cut and sewn from the very scratch. You receive an object made with warmth and personal care, coming from a small studio, where people laugh, joke, and listen to the good music.', price: 49.99, user_id: 3)

bag8 = Product.create(product_name: 'Leather Passport Cover', description: 'Getting ready to travel? Grab some must-have inspiration for friends, family and yourself! Go classy with a plain leather and monogram/name, or add some wanderlust vibes with a beautifully stamped quote.', price: 39.99, user_id: 3)

bag9 = Product.create(product_name: 'Pastel Pink Cross Body Purse', description: 'This bag is made with our famous full grain leather that was hand tanned Etruscan style in Santa Croce to soften, patina, and develop a silky touch. Only vegetable extracts and natural oils were used to create rich and supple leather.', price: 84.99, user_id: 3)

bag10 = Product.create(product_name: 'Genuine Leather Backpack', description: 'Our Classic Backpack design is handmade to order with full grain leather, virgin cotton linings and solid brass fittings.', price: 99.99, user_id: 3)

bag1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989009/Bags-Accessories/custom-wallets.jpg"), filename: "personalized-wallet.jpg")
bag2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989009/Bags-Accessories/canvas-backpack.jpg"), filename: "canvas-backpack.jpg")
bag3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989007/Bags-Accessories/waxed-canvas-leather-bag.jpg"), filename: "waxed-canvas-leather-bag.jpg")
bag4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989007/Bags-Accessories/leather-ipad-case.jpg"), filename: "leather-ipad-case.jpg")
bag5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989007/Bags-Accessories/dinosaur-clutch-hangbags.jpg"), filename: "dinosaur-clutch-handbag.jpg")
bag6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989007/Bags-Accessories/toiletry-bag.jpg"), filename: "personalized-toiletry-bag.jpg")
bag7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989006/Bags-Accessories/grooming-gift-set.jpg"), filename: "grooming-gift-set.jpg")
bag8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989006/Bags-Accessories/leather-passport-cover.jpg"), filename: "leather-passport-cover")
bag9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989006/Bags-Accessories/cross-body-purse.jpg"), filename: "pastel-pink-cross-body-purse.jpg")
bag10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989006/Bags-Accessories/leather-backpack.jpg"), filename: "genuine-leather-backpack.jpg")

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

gift1 = Product.create(product_name: 'Pikachu PokeBall Sushi Terrarium', description: 'These Pokemon Terrarium / Diorama Pokeballs make an excellent gift for your loved ones. Perfectly fit into the palms of your hands, you can show these off to your friends and family. The Pokeball is a great decorative item to display literally anywhere!', price: 31.99, user_id: 1)

gift2 = Product.create(product_name: 'Colorful Party Hats', description: "Whether you're celebrating a birthday or an anniversary, these fun and colourful party hats are the perfect addition to your occasion.", price: 12.99, user_id: 4)

gift3 = Product.create(product_name: 'Peas In a Pod', description: "If you’re looking for a great unique gift for your kids, here is one of the cutest stuffed veggies around. Peas can be popped out of their pod!", price: 39.99, user_id: 4)

gift4 = Product.create(product_name: 'Retro Post Mail Candy Box', description: 'Unique party favor boxes that your guests will be sure to find adorable. Fill these up with candy, or whatever you like!', price: 3.49, user_id: 4)

gift5 = Product.create(product_name: 'Programmer Problem T-Shirt', description: 'Grab this shirt as a gift for your husband, wife, girlfriend, boyfriend, teacher, professor,  or anyone else you know who is a programmer and loves coding!', price: 21.99, user_id: 4)

gift6 = Product.create(product_name: 'Maple Gift Boxes', description: 'Gold and silver gift boxes with maple leave cutouts. Adds a fantastic touch to the already amazing gifts you have picked out!', price: 9.99, user_id: 4)

gift7 = Product.create(product_name: 'Handmade Brooches', description: 'These can be used for cute decorations on your tote bags, jacket, t-shirt, or backpack, you name it!. The back is secured with a silver coloured metal brooch!', price: 13.99, user_id: 4)

gift8 = Product.create(product_name: 'Hanging Monkey Ornament', description: 'The monkey decoration is made from felt and has a hand knitted curly tail. He is hand finished with a red glitter bowtie for extra sparkle.', price: 10.99, user_id: 4)

gift9 = Product.create(product_name: 'Minon Pincushion', description: 'This little minion will help you keep all of those pins in place. As you add more pins, the minion gets more hair!', price: 12.99, user_id: 4)

gift10 = Product.create(product_name: 'Reindeer Paper Cups', description: 'Add some seasonal cheer to your Christmas party with these fun and festive Reindeer cups, perfect for kids and adults alike!', price: 9.99, user_id: 4)

gift1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989030/Fun%20Gift%20Ideas/pikachu-pokeball-sushi-terrarium.jpg"), filename: "pikachu-terrarium.jpg")
gift2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989030/Fun%20Gift%20Ideas/colorful-party-hats.jpg"), filename: "party-hats.jpg")
gift3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989030/Fun%20Gift%20Ideas/pea-pods.jpg"), filename: "peas-in-a-pod.jpg")
gift4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989030/Fun%20Gift%20Ideas/retro-postal-candy-box.jpg"), filename: "post-mail-candy-box.jpg")
gift5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989030/Fun%20Gift%20Ideas/coding-humor.jpg"), filename: "programmer-tshirt.jpg")
gift6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989029/Fun%20Gift%20Ideas/maple-paper-gift-boxes.jpg"), filename: "maple-gift-boxes.jpg")
gift7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989029/Fun%20Gift%20Ideas/hand-made-brooches.jpg"), filename: "handmade-brooches.jpg")
gift8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989029/Fun%20Gift%20Ideas/monkey-christmas-ornament.jpg"), filename: "monkey-ornament.jpg")
gift9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989028/Fun%20Gift%20Ideas/minion-pincushion.png"), filename: "minion-pincushion.jpg")
gift10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989028/Fun%20Gift%20Ideas/reindeer-paper-cups.jpg"), filename: "reindeer-paper-cups.jpg")

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

furniture1 = Product.create(product_name: 'Spacious Bookshelf', description: 'This bookshelf will provide an easy way to update any wall, whether in a traditional or contemporary setting. A cool and contemporary way to show off souvenirs, small treasures or art, this wall cube creates a dynamic arrangement in a living or dining room.', price: 239.99, user_id: 1)

furniture2 = Product.create(product_name: 'Industrial Wooden Bench', description: 'Made with hand bent steel pipes and recycled wood planks. A great solution for your entryway decor, your dining table seating, or for your stylish outdoor porch.', price: 199.99, user_id: 5)

furniture3 = Product.create(product_name: 'Elegant Dining Table', description: 'Rustic Dining Table with Hairpin Legs. New dining table with metal legs for a rustic modern look.', price: 399.99, user_id: 5)

furniture4 = Product.create(product_name: 'Hammock Swing Chair', description: 'Lay back and relax as you enjoy this roomy, soft and extra-comfortable hammock swing chair. This solid natural off white color chair is an elegant blissful retreat that matches any decor. The beautiful artisan made macrame - crochet fringe makes this a conversation piece and can be used indoors and outdoors.', price: 79.99, user_id: 5)

furniture5 = Product.create(product_name: 'Gold Trim Chaise Lounge', description: 'Gold Leaf and black lacquer is French along with French craftsmanship. Trim was finished in nail heads. These reproduction chaise lounges are heavy, sturdy, and ready for everyday use.', price: 1299.99, user_id: 5)

furniture6 = Product.create(product_name: 'Minimalist Office Desk', description: "If you're after that simple Scandinavian look with a retro feel look no further! We have combined our best selling hairpin legs with a beautiful Formica coated birch table top to create a range of desks. The Formica finish gives a very hard wearing and wipe clean surface, perfect for working or eating at.", price: 499.99, user_id: 5)

furniture7 = Product.create(product_name: 'Comfy Gray Sofa', description: 'With subtle rolling arms, this sofa features classic styling while still offering a great compact design for smaller homes. The sofa has a choice of materials and beautiful oak feet.', price: 599.99, user_id: 5)

furniture8 = Product.create(product_name: 'Coffee Table', description: 'This is a great flat top industrial coffee table that will go with just about any interior design. It is very sturdy and durable and will last for many, many generations. The metal bands are inlaid so they are flush with the table top.', price: 269.99, user_id: 5)

furniture9 = Product.create(product_name: 'Relaxation Chair', description: 'Sit back and relax with a cup of hot coffee and your favorite book in this gorgeous relaxation chair. So comfortable that you may just fall asleep in minutes.', price: 299.99, user_id: 5)

furniture10 = Product.create(product_name: 'Velvet Ottoman', description: 'This listing is for a single upholstered ottoman artisan made in High Point NC by hand. This piece can be used as either a footstool or as a coffee table with an ottoman tray.', price: 189.99, user_id: 5)

furniture1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989050/Furniture/bookshelf.jpg"), filename: "bookshelf.jpg")
furniture2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989050/Furniture/industrial-wooden-bench.jpg"), filename: "wooden-bench.jpg")
furniture3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989050/Furniture/dining-table.jpg"), filename: "dining-table.jpg")
furniture4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989049/Furniture/hammock-swing-chair.jpg"), filename: "hammock-swing-chair.jpg")
furniture5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989049/Furniture/fancy-sofa.jpg"), filename: "gold-trim-sofa.jpg")
furniture6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989049/Furniture/modern-office-desk.jpg"), filename: "office-desk.jpg")
furniture7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989048/Furniture/gray-sofa.jpg"), filename: "gray-sofa.jpg")
furniture8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989048/Furniture/coffee_-table.jpg"), filename: "coffee-table.jpg")
furniture9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989048/Furniture/carpet-chair.jpg"), filename: "relaxation-chair.jpg")
furniture10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989048/Furniture/ottoman.jpg"), filename: "ottoman.jpg")

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

home1 = Product.create(product_name: 'Family Tree Portrait', description: 'Pictures are mounted on high quality card in a wooden 9×9inch acetate fronted picture frame. These family trees are wooden, and make such a special gift for every occasion.', price: 39.99, user_id: 1)

home2 = Product.create(product_name: 'Desk Organizer With Lamp', description: 'Industrial Rustic desk organizer Edison lamp. This is a fantastic piece! Desk lamp features beautiful brass corner details with 3 spacious compartments. Great functionality with pad and phone charger options! The Edison bulb side pipe lamp adds the perfect Steampunk Industrial feel balanced with the rustic oak finish.', price: 49.99, user_id: 6)

home3 = Product.create(product_name: 'Decorative Pillows', description: 'A touch of texture and an accent of color can change the whole look and feel of a room. These high quality, velvet pillows make it easy to add comfort and elegance to your living spaces. Reversible with the same fabric on both sides, finished with silk piping in gold to add a touch of luxury.', price: 39.99, user_id: 6)

home4 = Product.create(product_name: 'Cute Bear Rug', description: 'Regular Frosted Minky Bear Rug. This Rug is extremely soft and is lined with a brown flannel fabric. All faux fur rug with crochet muzzle and ears', price: 99.99, user_id: 6)

home5 = Product.create(product_name: 'Striking Clock', description: "This timepiece will definitely catch some attention even for those who already knows the exact time. And it's really big.", price: 64.99, user_id: 6)

home6 = Product.create(product_name: 'Fig Rosemary Candle', description: 'Freshly picked rosemary springs are aromatically blended with the perfect touch of ripe fig and fresh jasmine. Our best seller!', price: 11.99, user_id: 6)

home7 = Product.create(product_name: 'Decorative Bottle Lights', description: 'When you have spare bottles, beverage cans, glass bottles, you can install cork lamps, and the light will fill your life.', price: 29.99, user_id: 6)

home8 = Product.create(product_name: 'Aloha Mahalo Door Mat', description: 'Coir doormats are hand-painted, having their own uniqueness and slight imperfections, making them each an original. To extend the life of the mat be sure to protect from extreme weather conditions and direct sunlight.', price: 27.99, user_id: 6)

home9 = Product.create(product_name: 'Scratch Off World Map', description: 'Showcase your adventures and plan your next destination with this luxe Black & Gold Travel Tracker Map. The gold foil easily scratches off to reveal the locations you’ve explored and the exquisite design satisfies the deepest wanderlust.', price: 42.99, user_id: 6)

home10 = Product.create(product_name: 'Warmest Of Blankets', description: 'This cozy throw blanket is hand knit from luxurious wool, measuring approximately 40" x 63". Featured in top magazines and popular as Blogger favorites. Our throws will warm up your heart and home!', price: 30.99, user_id: 6)

home1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989074/Home%20Decor/family-tree.jpg"), filename: "family-tree.jpg")
home2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989074/Home%20Decor/desk-organizer-with-lamp.jpg"), filename: "desk-organizer-with-lamp.jpg")
home3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989074/Home%20Decor/decorative-pillows.jpg"), filename: "decorative-pillows.jpg")
home4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989074/Home%20Decor/bear-rug.jpg"), filename: "cute-bear-rug.jpg")
home5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989073/Home%20Decor/clock.jpg"), filename: "striking-clock.jpg")
home6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989073/Home%20Decor/fig-rosemary-candle.jpg"), filename: "fig-rosemary-candle.jpg")
home7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989073/Home%20Decor/bottle-lights.jpg"), filename: "bottle-lights.jpg")
home8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989072/Home%20Decor/welcome-mat.jpg"), filename: "aloha-mahalo-mat.jpg")
home9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989072/Home%20Decor/scratch-off-map.jpg"), filename: "world-map.jpg")
home10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989072/Home%20Decor/comfy-blanket.jpg"), filename: "warm-blanket.jpg")

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

kitchen1 = Product.create(product_name: 'Ceramic Dinosaur Bowl', description: 'Add a little fun and flair to your kitchen with this beautiful ceramic dinosaur bowl. Use it as a cereal bowl, fill it with little tasty candies, or simply add it as a unique decorative piece around the house!', price: 29.99, user_id: 1)

kitchen2 = Product.create(product_name: 'Gold-Trim Dinnerware Set', description: 'Break these out for those romantic date nights or when you are hosting dinner for a couple of friends. This set of gorgeous gold-trim dinnerware will not fail to impress!', price: 129.99, user_id: 7)

kitchen3 = Product.create(product_name: 'Rustic Copper Pan', description: 'Elegant antique copper pan for a country style kitchen. There is a heavy turned lip and the handles are made of brass. Forged by local craftsmen throughout France in the nineteenth century and the early 1900s.', price: 89.99, user_id: 7)

kitchen4 = Product.create(product_name: 'Coffee Pour Over', description: 'Passionate about coffee and craft coffee brewing? This simple pour over method to make coffee will change the coffee game for you!', price: 37.99, user_id: 7)

kitchen5 = Product.create(product_name: 'Black and Gold Ceramic Bowl', description: 'This matte black ceramic bowl has a layer of gold highlighting the edges. Humble but elegant. Due to hainge a thin metal layer, it is not suitable for use in a microwave.', price: 27.99, user_id: 7)

kitchen6 = Product.create(product_name: 'Set of Chef Knives', description: 'These knives will cut through anything with ease. Take care of them, and they will take care of you for life.', price: 82.99, user_id: 7)

kitchen7 = Product.create(product_name: 'Mugs Galore', description: 'A six-piece set of ceramic mugs. Each uniquely painted, but together make a beautiful, cohesive collection.', price: 47.99, user_id: 7)

kitchen8 = Product.create(product_name: 'Laser Cut Coasters', description: 'Our laser cut coasters will bring that unique twist to any room. Made of Oak Wood and finished with polyurethane for protection against water, humidity, and heat.', price: 24.99, user_id: 7)

kitchen9 = Product.create(product_name: 'Olive Wood Serving Plate and Cheese Knives', description: 'A must have for anyone who calls themselves a cheese-lover! We eat with our eyes before our mouths afterall, right? This cheeseboard and accompanying set of cheese knives are the perfect for breaking out during the holidays.', price: 41.99, user_id: 7)

kitchen10 = Product.create(product_name: 'Slate Serving Board', description: 'One 12"x12" slate etched with a map of the borders and roadways of the great state of New York. Natural edge, striated slates are each a unique piece and completed with 4 cork feet to keep your tabletops safe.', price: 32.99, user_id: 7)

kitchen1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989093/Kitchen/ceramic-dino.jpg"), filename: "dinosaur-bowl.jpg")
kitchen2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989093/Kitchen/dinnware-set.jpg"), filename: "dinnerware-set.jpg")
kitchen3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989093/Kitchen/copper-pan.jpg"), filename: "copper-pan.jpg")
kitchen4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989092/Kitchen/coffee-pour-over_2.jpg"), filename: "coffee-pour-over.jpg")
kitchen5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989092/Kitchen/black-gold-ceramic-bowl.jpg"), filename: "black-gold-ceramic-bowl.jpg")
kitchen6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989092/Kitchen/chef-knives.jpg"), filename: "chef-knives.jpg")
kitchen7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989092/Kitchen/various-mugs.jpg"), filename: "mugs.jpg")
kitchen8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989091/Kitchen/laser-cut-coasters.jpg"), filename: "coasters.jpg")
kitchen9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989091/Kitchen/olive-wood-cheese-knives.jpg"), filename: "cheese-board-and-knives.jpg")
kitchen10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989091/Kitchen/slate-serving-board.jpg"), filename: "slate-serving-board.jpg")

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

plant1 = Product.create(product_name: 'Living Succulent Wall', description: 'This living succulent wall is one-of-a-kind. Impress all of your guests with this stand-out piece. Requires minimal maintenance and looks stunning year-round.', price: 639.99, user_id: 1)

plant2 = Product.create(product_name: 'Concrete Gold-Trim Pots', description: 'No piece of your home should ever just fill a space. It should make the space. EMSAY’s flagship planter can add spunk to a kitchen, living room, bathroom, or really, any other room. This selection comes in our staple EMSAY hues of concrete grey, white or black, and a metallic color trim. Each one is truly unique, hand-crafted with industrial concrete and hand painted.', price: 36.99, user_id: 8)

plant3 = Product.create(product_name: 'Wooden Planter Box', description: 'This lovely tired wooden planter box is perfect for your first fairy garden! Your small plants will never be unnoticed with this eye-catching pot. The box size is ideal size for succulents, cacti or other plants.', price: 23.99, user_id: 8)

plant4 = Product.create(product_name: 'Bonsai Tree', description: 'Native to China, the ginkgo biloba tree (of the Ginkgoaceae family) is distinguished by its wide, leathery, fan-shaped leaves and sturdy trunk. The name is derived from the Japanese word ginkyo, meaning "silver apricot." Ginkgos are known for their remarkable longevity; some trees growing in China are over 2500 years old. In the United States, they grow in hardiness zones 3 to 9. Unfortunately, these trees are also notorious for the horrid smell--similar to vomit or rotten eggs--produced by seeds that fall and rot. From a distance, though, ginkgo trees are beautiful.', price: 179.99, user_id: 8)

plant5 = Product.create(product_name: 'Sitting Pot', description: 'This little guy will help brighten up any room. He’s the perfect unique gift for yourself or any plant lover!', price: 21.99, user_id: 8)

plant6 = Product.create(product_name: 'Totoro Terrarium', description: 'If you love Totoro and you love terrariums, then this is a no brainer addition to make your lovely home even more special! Figurines are made out of resin.', price: 27.99, user_id: 8)

plant7 = Product.create(product_name: 'Giraffe Pots', description: 'Two beautifully crafted ceramic girraffe flower pots. For all you giraffe lovers out there!', price: 29.99, user_id: 8)

plant8 = Product.create(product_name: 'Honeycomb Wall Planter', description: 'Want something special in your home or garden decoration? Check out this Hexagon Wall Planter! This lovely geometric planter will bring a modern style and classic elegance to your home or patio. Your small potted plants will never be unnoticed with this eye-catching succulent terrarium', price: 32.99, user_id: 8)

plant9 = Product.create(product_name: 'Geometric Vases', description: 'Your beautiful flowers will never be unnoticed with this eye-catching tabletop geometric vase. You can add visual interest and magic to your flowers with these abstract metal vase shape', price: 24.99, user_id: 8)
plant10 = Product.create(product_name: 'Metal Plant Stand', description: 'This lovely artistic metal plant stand will bring a modern style and classic elegance to your home or patio. The pot size is ideal for small and medium plants. Desktop metal stand can be easily placed anywhere indoor', price: 42.99, user_id: 8)

plant1.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989112/Plants/succulent-living-wall.jpg"), filename: "succulent-wall.jpg")
plant2.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989111/Plants/concrete-gold-pots.jpg"), filename: "concrete-gold-pots.jpg")
plant3.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989110/Plants/wood-planter-box.jpg"), filename: "wooden-planter-box.jpg")
plant4.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989110/Plants/bonsai-tree.jpg"), filename: "bonsai-tree.jpg")
plant5.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989110/Plants/sitting-pot.jpg"), filename: "sitting-pot.jpg")
plant6.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989110/Plants/totoro-terraium.jpg"), filename: "totoro-terrarium.jpg")
plant7.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989109/Plants/giraffe-pots.jpg"), filename: "giraffe-pots.jpg")
plant8.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989109/Plants/honeycomb-wall-planter.jpg"), filename: "honeycomb-wall-planter.jpg")
plant9.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989109/Plants/geometric-vase.jpg"), filename: "geometric-vases.jpg")
plant10.photo.attach(io: open("https://res.cloudinary.com/craftsy/image/upload/c_scale,w_500/v1544989109/Plants/metal-plant-stand-with-bowl.jpg"), filename: "metal-plant-stand.jpg")

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

#Reviews

product1review1 = Review.create(body: "Amazing!", rating: 5, user_id: 2, product_id: 1)
product1review2 = Review.create(body: "Much wow!", rating: 5, user_id: 3, product_id: 1)
product1review3 = Review.create(body: "Superb!", rating: 5, user_id: 4, product_id: 1)

product2review1 = Review.create(body: "Amazing!", rating: 5, user_id: 2, product_id: 2)
product2review2 = Review.create(body: "Much wow!", rating: 5, user_id: 3, product_id: 2)
product2review3 = Review.create(body: "Superb!", rating: 5, user_id: 4, product_id: 2)