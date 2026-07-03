const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    category: "nature",
    title: "Mountain Lake",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnibID2pavEV9EeUK6ybeAIA2Rqrs4xQ7ZA&s?w=1200",
    category: "city",
    title: "City Skyline",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200",
    category: "animals",
    title: "Cute Puppy",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    category: "nature",
    title: "Forest Path",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
    category: "city",
    title: "Modern City",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200",
    category: "animals",
    title: "Cat Portrait",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    category: "nature",
    title: "Mountain View",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1508051123996-69f8caf4891d?w=1200",
    category: "city",
    title: "Night Lights",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200",
    category: "animals",
    title: "Wild Tiger",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    category: "nature",
    title: "Ocean Waves",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200",
    category: "city",
    title: "Downtown View",
  },
  {
    id: 12,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3wYpMdSP_6hjS17iCEknea24d12TAh7jIA&s?w=1200",
    category: "animals",
    title: "Sleeping Puppy",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    category: "nature",
    title: "Green Forest",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200",
    category: "city",
    title: "Urban Road",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200",
    category: "animals",
    title: "Fox Portrait",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
    category: "nature",
    title: "Waterfall",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200",
    category: "city",
    title: "Bridge View",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1200",
    category: "animals",
    title: "Horse Running",
  },
  {
    id: 19,
    src: "https://i.natgeofe.com/n/66cf3478-160b-487e-a627-05b012381f0e/liwa-oasis-sand-dunes-dubai-590.jpg?w=1200",
    category: "nature",
    title: "Desert Dunes",
  },
  {
    id: 20,
    src: "https://t3.ftcdn.net/jpg/02/23/23/86/360_F_223238655_t07PxpaSl3RgR58xeJEph8KEbiP0bPWL.jpg?w=1200",
    category: "city",
    title: "Street Night",
  },
  {
    id: 21,
    src: "https://picsum.photos/id/1015/600/400?w=1200",
    title: "Mountain",
    category: "nature",
  },
  {
    id: 22,
    src: "https://picsum.photos/id/1025/600/400?w=1200",
    title: "Dog",
    category: "animals",
  },
  {
    id: 23,
    src: "https://picsum.photos/id/1035/600/400?w=1200",
    title: "WaterFall",
    category: "nature",
  },

  {
    id: 24,
    src: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=1200",
    title: "Zebra",
    category: "animal",
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=1200",
    title: "Bird on Branch",
    category: "birds",
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=1200",
    title: "Parrot",
    category: "birds",
  },
  {
  id: 27,
  src: "https://images.unsplash.com/photo-1501706362039-c06b2d715385",
  title: "Zebra",
  category: "animals"
},
{
  id: 28,
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5q17d5YMVUr7DYAHJtphqFsDQ9wjBdfIbQ&s",
  title: "Flying Bird",
  category: "birds"
},
{
  id: 29,
  src: "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-parrots/everything-you-need-to-know-about-pet-parrots.jpg",
  title: "Pet Parrot",
  category: "birds"
},
{
  id: 30,
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCg3uwgwOESb0yVJ-vuagYlXvynfJLg56Eg&s",
  title: "Eagle",
  category: "birds"
},
{
  id: 31,
  src: "https://t3.ftcdn.net/jpg/05/58/31/48/360_F_558314865_iAyj3IrseAap0QweMMpkEgrDPB25KeIy.jpg",
  title: "Humming Bird",
  category: "birds"
},
{
  id: 32,
  src: "https://manilaoceanpark.com/wp-content/uploads/2024/04/GUIDELINES-e1754301751957-1200x800.png",
  title: "Fantial Pigeon",
  category: "birds"
},
{
  id: 33,
  src: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23",
  title: "Colorful Bird",
  category: "birds"
},
{
  id: 34,
  src: "https://images.stockcake.com/public/6/2/2/622dbf6c-5d71-41b0-83d2-d4a46cc251df_large/sunset-bird-flight-stockcake.jpg",
  title: "Bird Flying Sky",
  category: "birds"
},
{
  id: 35,
  src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41",
  title: "Cafe",
  category: "nature"
},
{
  id: 36,
  src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
  title: "Cute Puppy",
  category: "animals"
},

{
  id: 37,
  src: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=1200",
  title: "Green Leaves",
  category: "plants"
},
{
  id: 38,
  src: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=1200",
  title: "Plant Closeup",
  category: "plants"
},
{
  id: 39,
  src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200",
  title: "Forest Plants",
  category: "plants"
},
{
  id: 40,
  src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200",
  title: "Green Nature Plant",
  category: "plants"
},
{
  id: 41,
  src: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200",
  title: "Plant Leaves Macro",
  category: "plants"
},
{
  id: 42,
  src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200",
  category: "human",
  title: "Smiling Man",
},
{
  id: 43,
  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
  category: "human",
  title: "Friend Smile",
},
{
  id: 44,
  src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200",
  category: "human",
  title: "Portrait Boy",
},
{
  id: 45,
  src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200",
  category: "human",
  title: "Fashion Woman",
},
{
  id: 46,
  src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1200",
  category: "human",
  title: "Young Man",
},
{
  id: 47,
  src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200",
  category: "human",
  title: "Happy Girl",
},
{
  id: 48,
  src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200",
  category: "human",
  title: "Cool Guy",
},
{
  id: 49,
  src: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=1200",
  category: "human",
  title: "Cute Kid",
},
{
  id: 29,
  src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200",
  category: "human",
  title: "Beautiful Woman",
},
{
  id: 30,
  src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1200",
  category: "human",
  title: "Casual Portrait",
}

];

export default images;