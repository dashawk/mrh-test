import getHomeSlides from '@/services/getHomeSlides'
import { useState } from 'react'

const Slider = () => {
	const [activeSlide, setActiveSlide] = useState(0)
	const slides = getHomeSlides()

	return (
		<div className='slider-1 pos-relative slider-overlay'>
			<div className='bend niceties preview-1'>
				{slides.map((slide, index) => (
					<div className='slides' key={index}>
						<img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
						<div className='slider-direction'>
							<div className='slider-content text-center'>
								<div
									className='wow fadeInUp'
									data-wow-duration='1s'
									data-wow-delay='0.5s'>
									<h4 className='slider-1-title-1'>
										{slide.title && (
											<>
												Welcome to <span>Sheltek</span>
											</>
										)}
									</h4>
								</div>
								<div
									className='wow fadeInUp'
									data-wow-duration='1s'
									data-wow-delay='1s'>
									<h1 className='slider-1-title-2'>{slide.subTitle}</h1>
								</div>
								<div
									className='wow fadeInUp'
									data-wow-duration='1s'
									data-wow-delay='1.5s'>
									<p className='slider-1-desc'>{slide.description}</p>
								</div>
								<div
									className='wow fadeInUp'
									data-wow-duration='1s'
									data-wow-delay='2s'>
									<a className='slider-button mt-40' href='#'>
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
