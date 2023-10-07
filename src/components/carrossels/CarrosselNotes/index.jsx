import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Pagination } from "swiper/modules";

import { notes } from "../../../dates/ArrayNotes";
import { Link } from "react-router-dom";

export default function CarrosselNotes() {
  return (
    <div className="container-slider">
      {/* <h2>Minhas anotações</h2> */}

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="slider"
      >
        {notes.map((e) => (
          <SwiperSlide key={e.id} className="slide">
            <div className="slider-icon">
              {e.icon}
              <h2>{e.title}</h2>
            </div>

            <div className="slider-text">
              <p>{e.description}</p>
            </div>
            <div className="div-button">
              <Link className="slide-btn" to={`/pages-notes/${e.id}`}>
                Ver anotações
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
