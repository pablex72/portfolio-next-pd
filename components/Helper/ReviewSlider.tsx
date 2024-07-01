import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      itemClass="item"
    >
      <ClientReviewCard
        image="/images/user1.jpg"
        user="Sajal Talukder"
        role="Web Developer"
      />
      <ClientReviewCard
        image="/images/user2.jpg"
        user="Hange Zpr"
        role="Java Developer"
      />
      <ClientReviewCard
        image="/images/user3.jpg"
        user="Dev fir"
        role="Web Developer"
      />
      <ClientReviewCard
        image="/images/user4.jpg"
        user="Jon trew"
        role="DBA Developer"
      />
      <ClientReviewCard
        image="/images/user1.jpg"
        user="Werty port"
        role="Scrum Master"
      />
    </Carousel>
  );
};

export default ReviewSlider;
