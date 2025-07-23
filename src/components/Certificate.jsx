import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="section-container relative z-10"
      data-aos="fade-up">
      {" "}
      <h2 className="text-3xl mb-8 text-sky-400">Certificate</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop>
        <SwiperSlide>
          <img src="/certificates/certificate1.png" alt="Certificat 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/certificates/certificate2.png" alt="Certificat 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/certificates/certificate3.png" alt="Certificat 3" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
