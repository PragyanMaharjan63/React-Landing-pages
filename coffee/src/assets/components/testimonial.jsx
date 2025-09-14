export default function Testimonial() {
  const review = [
    {
      id: 1,
      pfp: "/images/reviews/person1.jpg",
      name: "Sam Williams",
      post: "Enterpreneur",
      stars: "⭐⭐⭐⭐⭐",
      rev: "I've been ordering beans from you for ten years, the quality of the product is consistently high! i'm grateful for the care that is apparently put into the roasts and he excellent customer service. Your beans give way to the best cups of coffee.",
    },
    {
      id: 2,
      pfp: "/images/reviews/person2.jpg",
      name: "Jane Adams",
      post: "Freelancer",
      stars: "⭐⭐⭐⭐_",
      rev: "I dropped by to have a cappuccino and honestly, after 30 days here we did not have high expectations, but if this cappuccino was served, i would be just as satisfied! great place with perfectly noral prices that i recommend!",
    },
    {
      id: 3,
      pfp: "/images/reviews/person3.jpg",
      name: "Angela Gonzales",
      post: "Manager",
      stars: "⭐⭐⭐⭐⭐",
      rev: "I've been ordering beans from you for ten years, the quality of the product is consistently high! i'm grateful for the care that is apparently put into the roasts and he excellent customer service. Your beans give way to the best cups of coffee.",
    },
  ];
  return (
    <>
      <div
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        className="flex flex-col py-5 justify-center items-center bg-white"
      >
        <div style={{ fontFamily: "'Seaweed Script', 'sans-serif'" }}>
          Come and join
        </div>
        <p>OUR HAPPY CUSTOMERS</p>
        <div className="flex flex-wrap grow justify-evenly">
          {review.map((person) => {
            return (
              <div
                key={person.id}
                className="bg-[#EEEBE6] flex flex-col justify-center items-center  sm:w-96 p-3 rounded-lg shadow-lg m-3"
              >
                <div className="flex items-center w-full">
                  <img
                    src={`${person.pfp}`}
                    className="size-20 m-2 rounded-full"
                    alt="pfp"
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-semibold text-stone-700">
                        {person.name}{" "}
                      </p>
                      <p className="text-sm text-neutral-600">{person.post} </p>
                    </div>
                    <p>{person.stars} </p>
                  </div>
                </div>
                <div className="m-2 text-neutral-600">{person.rev}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
