import React from 'react'
import css from "./Testimonals.module.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials"
import { Swiper, SwiperSlide } from "swiper/react"
const Testimonals = () => {
    return (
        <div className={css.testimonals}>
            <div className={css.wrapper}>
                <div className={css.container}>

                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man childer  rejoiced</span>
                </div>
                <img src={Hero} alt="" />
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>
            <div className={css.reviews}>
                Reviews
            </div>
            <div className={css.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    breakpoints={{
                        856: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testmonial, index) => (
                            <SwiperSlide>
                                <div className={css.testimonal}>
                                    <img src={testmonial.image} alt="" />
                                    <span>{testmonial.comment}</span>
                                    <hr />
                                    <span>{testmonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonals