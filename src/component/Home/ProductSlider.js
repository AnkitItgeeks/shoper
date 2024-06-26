import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductSlider = ({productsData}) => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {productsData.isLoading
                ? <div></div>
                : productsData?.data?.products?.map((product, index) => {
                    return (
                        <div className='w-full flex flex-col gap-[5px] items-center justify-center font-bodyFont text-[14px] text-textColour' key={index}>
                            <div><img className='' src={product.images[0].src} alt='Not Found' /></div>
                            <div><p>{product.vendor}</p></div>
                            <div><p>{product.title}</p></div>
                            <div><p>$ {product.variants[0].price}</p></div>
                        </div>
                    )
                })}
        </Carousel>
    )
}

export default ProductSlider