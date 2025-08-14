import Header from "./header";
import { Star } from "lucide-react";
import { useState } from "react";

interface mvType {
  title: string;
  thumbnail: string;
  rating: number;
  description: string;
  year: number;
  category: string;
}
const HeroMovie = () => {
  const movies: mvType[] = [
    {
      title: "Classic Odyssey",
      thumbnail:
        "https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534",
      rating: 8.9,
      description:
        "An epic journey through space and time as humanity discovers ancient alien technology that could save or destroy civilization  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia.",
      year: 2024,
      category: "Sci-Fi",
    },
    {
      title: "Midnight Racer",
      thumbnail:
        "https://s3-eu-west-1.amazonaws.com/entertainmentie/uploads/2016/04/03142753/PW51827-Joker-Why-So-Serious.jpg",
      rating: 7.5,
      description:
        "A street racer gets entangled in a high-stakes heist that pushes his skills to the limit.",
      year: 2023,
      category: "Action",
    },
    {
      title: "The Last Monarch",
      thumbnail: "https://cdn.mos.cms.futurecdn.net/jfbEDVsS9JM4CtP8hdVDtC.jpg",
      rating: 8.1,
      description:
        "A fallen king must reclaim his throne in a war-torn kingdom filled with betrayal and magic\\  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2024,
      category: "Fantasy",
    },
    {
      title: "Neon Shadows",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      rating: 6.8,
      description:
        "A cyberpunk detective hunts a rogue AI through a dystopian megacity.",
      year: 2023,
      category: "Sci-Fi",
    },
    {
      title: "Frozen Inferno",
      thumbnail:
        "https://creativereview.imgix.net/content/uploads/2024/12/Challengers.jpg?auto=compress,format&q=60&w=1728&h=2560",
      rating: 7.9,
      description:
        "A team of firefighters battles an unprecedented wildfire in the Arctic  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2024,
      category: "Thriller",
    },
    {
      title: "Whispering Pines",
      thumbnail:
        "https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=1728&h=2560",
      rating: 5.7,
      description:
        "A family uncovers dark secrets in their ancestral home haunted by vengeful spirits.",
      year: 2023,
      category: "Horror",
    },
    {
      title: "Crimson Heist",
      thumbnail:
        "https://go.rappler.com/images/bestmovieposters-cloudatlas-20121221-03.jpg",
      rating: 8.4,
      description:
        "Thieves plan an impossible robbery during a solar eclipse in this adrenaline-fueled caper  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2024,
      category: "Action",
    },
    {
      title: "Luna's Dream",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
      rating: 9.0,
      description:
        "An astronaut stranded on the moon fights to survive while Earth watches helplessly  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2024,
      category: "Drama",
    },
    {
      title: "The Iron Badge",
      thumbnail:
        "https://compote.slate.com/images/1c5bdbe0-03a0-4331-806c-63a1ef71d844.jpeg?crop=700%2C700%2Cx0%2Cy0",
      rating: 6.5,
      description:
        "A retired sheriff returns to duty to confront an old enemy in a lawless frontier town  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2023,
      category: "Western",
    },
    {
      title: "Pixel Warriors",
      thumbnail:
        "https://parade.com/.image/w_3840,q_auto:good,c_limit/MjEwNjUzODQ5NTMzODE4NzA1/best-movie-posters-platoon.jpg",
      rating: 7.2,
      description:
        "Gamers are transported into a virtual world where their skills determine their survival  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet aliquid dignissimos dolor sapiente repellendus deleniti a voluptate laborum mollitia, et, nisi fuga velit ipsum nostrum rem exercitationem voluptas vitae.",
      year: 2024,
      category: "Adventure",
    },
  ];
  const [next, setNext] = useState<number>(0);
  
  const handleSwitchMovie = () => {
    setNext((prev) => (prev >= movies.length - 1 ? 0 : prev + 1));
  };

  setTimeout(handleSwitchMovie, 6000);

  return (
    <div
      style={{ backgroundImage: `url(${movies[next].thumbnail})` }}
      className="hero"
    >
      <Header />
      <ActiveMovieInfo {...movies[next]} />
     
    </div>
  );
};

export default HeroMovie;

function ActiveMovieInfo({
  title,
  category,
  year,
  description,
  rating,
}: mvType) {
  return (
    <div className="hero-container">
      <span>{category}</span>
      <h1>{title}</h1>
      <div className="rating-info">
        <span>
          <Star size={15} /> {rating}
        </span>
        <span>{year}</span>
      </div>
      <p>{description}</p>
      <div className="action-btns">
        <button className="main-btn">Play</button>
        <button className="secondary-btn">more Info</button>
      </div>
    </div>
  );
}
