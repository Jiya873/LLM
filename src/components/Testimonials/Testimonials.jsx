import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    title: "Victor",
    description : "Far from perfect, ecommerce consistently overcomes obstacles to maintain its position as the global leader year after year. For a business of its size, one of the most impressive aspects is its ability to adapt quickly while maintaining a high level of service quality and professionalism, even in the face of intense competition. There are occasional minor issues, but overall, ecommerce.com excels in nearly every area important to consumers, including price competitiveness, delivery and returns, customer support, financing, and availability. Overall- highly recommended!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    title: "Satya Nadella",
    description: "Their customer service is great! As someone who works in marketing, I need help that's fast and correct. They always reply quickly, are very helpful, and do more than expected to make sure I'm happy. I've never had a problem with them.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    title: "Virat Kohli",
    description: "ecommerce is the greatest company I've purchased from. They have lowest prices and offer great prime benefits for as low as 6.99 per month. They have the lowest prices on groceries and just about everything. Thanks ecommerce keeping prices lower than anyone.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    title: "Sachin Tendulkar",
    description: "The lack of Customer Service exhibited by eBay lead me to switch the majority of my purchases to ecommerce. I had ordered a couple of things that I found it necessary to return. I dreaded the process from what I had experienced with Ebay. But to my surprise it was so much easier than I could have imagined. I didn't even have to pack the item. I was instructed to take the item to a UPS store and they would pack and ship the item back Free. It was a piece of cake. There was no big process to go through and no million questions or hours on the phone or message board. I was kept updated on the process and the credit went through without a hitch. I am now a ecommerce customer for life. It would do Ebay a great amount of good to take lessons from ecommerce in Customer service. ecommerce gets a A from me. Ebay gets a F minus",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>

          
          
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                    <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light ">
                        {data.title}
                      </h1>
                      <p className="text-xs dark:text-slate-300 text-gray-500 line-clamp-4">
                        {data.description}
                      </p>
                      
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
