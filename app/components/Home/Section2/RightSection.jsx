import VerticalCard from "../../VerticalCard";

const RightSection = ({ cards }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
      {cards?.map((card, index) => (
        <VerticalCard
          key={index}
          discount={card.discount}
          img={card.img}
          title={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default RightSection;
