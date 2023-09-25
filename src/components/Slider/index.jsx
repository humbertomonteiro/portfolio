import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

import { notes } from "../../dates/ArrayNotes";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="container-slider">
      <h2>Minhas anotações</h2>

      <Swiper
        slidesPerView={2}
        modules={[EffectCoverflow, Pagination]}
        pagination={true}
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        className="slider"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {notes.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="slider-icon">
              {e.icon}
              <h2>{e.title}</h2>
            </div>

            <div className="slider-text">
              <p>{e.description}</p>
            </div>
            <Link className="slide-btn" to={`/pages-notes/${e.id}`}>
              Ver anotações
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
