import { useState } from 'react'
import styled from 'styled-components'
import { media, radius } from '../utils/constants'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

const CarouselWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 415px;
  margin: 20px 0 24px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: ${radius.large};
  ${media.laptop} {
    height: 255px;
  }
  ${media.tablet} {
    margin: 27px 0 15px;
    border-radius: ${radius.medium};
  }
`

const Counter = styled.span`
  position: absolute;
  color: white;
  width: 40px;
  left: calc(50% - 20px);
  bottom: 25px;
  text-align: center;
  ${media.mobile} {
    display: none;
  }
`

const Button = styled.a`
  padding: 23px;
  ${media.laptop} {
    padding: 15px;
  }
  ${media.mobile} {
    padding: 6px;
  }
`

const Arrow = styled.img`
  height: 79px;
  ${media.laptop} {
    height: 50px;
  }
  ${media.mobile} {
    height: 20px;
  }
`

export default function Carousel({ pictures }) {
  const [imageIndex, updateImage] = useState(0)

  return (
    <CarouselWrapper img={pictures[imageIndex]}>
      {pictures.length > 1 ? (
        <>
          <Counter>
            {imageIndex + 1}/{pictures.length}
          </Counter>
          <Button
            href="#"
            onClick={() =>
              imageIndex === 0
                ? updateImage(pictures.length - 1)
                : updateImage(imageIndex - 1)
            }
          >
            <Arrow src={arrowLeft} alt="left arrow" />
          </Button>
          <Button
            href="#"
            onClick={() =>
              imageIndex === pictures.length - 1
                ? updateImage(0)
                : updateImage(imageIndex + 1)
            }
          >
            <Arrow src={arrowRight} alt="right arrow" />
          </Button>
        </>
      ) : null}
    </CarouselWrapper>
  )
}
