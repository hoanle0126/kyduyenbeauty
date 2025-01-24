import React from "react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Grid2, Typography } from "@mui/material";

const EmblaCarousel = (props) => {
    const { slides, options, spacing, height, numImage, dots, arrows } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
            }}
        >
            <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
                <Box sx={{ display: "flex" }}>
                    {slides.map((slideItem, slideIndex) => (
                        <Box
                            key={slideIndex}
                            sx={{
                                flex: `0 0 ${numImage ? 100 / numImage : 100}%`,
                                img: {
                                    height: height,
                                    aspectRatio: height || "1 / 1",
                                },
                                marginRight: spacing,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img src={slideItem.href} alt="" className="w-full h-full"/>
                            {slideItem.title && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        overflowWrap: "break-word",
                                        width: 200,
                                    }}
                                >
                                    {slideItem.title}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* <div className="embla__controls">
                {arrows && (
                    <div className="embla__buttons">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                )}
            </div> */}
        </Box>
    );
};

export default EmblaCarousel;
