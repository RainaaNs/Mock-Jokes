import Emoji from "../../assets/Emoji-removebg-preview.png";

const likeImages = [
  "https://imgs.search.brave.com/b49ILTkvIm0D-PltxS-I2EAP-Yw__P3_zSppmAWcVCQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzNmNi9sYXVn/aC0xMzc3ODk0Lmpw/Zz9mbXQ",
  "https://imgs.search.brave.com/m0kv4govM-fhiyGqx6s7w0Nw1oxXT2dsit6e6_efMp4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktbWl4ZWQt/cmFjZS1mZW1hbGUt/bW9kZWwtbGF1Z2hz/LWhhcHBpbHlfMjcz/NjA5LTI4NTIxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  "https://imgs.search.brave.com/X0BnpZ95CIBSMQC5nZsdb84iz8-KXgMYtntcu675siM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1USXhPVFE1/TWpnd05WNUJNbDVC/YW5CblhrRnRaVFl3/TnpBd05ETTIuX1Yx/X1FMNzVfVVg4MjBf/LmpwZw",
];

const getRandomImage = (images: string[]) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const LikesCard = ({ text }: any) => {
  return (
    <div className="flex items-center p-2 justify-between w-full text-white">
      <div className="flex gap-4 items-center">
        <img
          src={getRandomImage(likeImages)}
          alt="Jokes img"
          className="w-10 h-10 md:w-20 md:h-20"
        />
        <p className="text-[13px] md:text-base">{text}</p>
      </div>
      <img src={Emoji} alt="Jokes img" className="w-8 h-8 md:w-16 md:h-16" />
    </div>
  );
};

export default LikesCard;
