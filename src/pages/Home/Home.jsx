import Cards from '@/components/common/Cards'
import { Col, Row, Section } from '@/components/common/containers'
import Agents from '@/components/common/containers/Agents'
import FeaturedItems from '@/components/common/containers/FeaturedItems'

import SearchBox from '@/components/common/searchBar/SearchBox'
import getAgents from '@/services/getAgents'
import getProperties from '@/services/getProperties'
import { getServicesCards } from '@/services/getServicesCards'
import { useLoaderData } from 'react-router'

const Home = () => {
	const data = useLoaderData()

	const servicesData = getServicesCards()
	const featuredItems = getProperties()
	const agentsData = getAgents()

	return (
		<>
			<div className='slider-3 bg-3 bg-opacity-black-70 '>
				<div className='slider-content-3 text-center '>
					<div
						className='wow fadeInUp'
						data-wow-duration='1s'
						data-wow-delay='1s'>
						<h1 className='slider-1-title-2 cd-headline clip is-full-width'>
							<span>FIND YOUR</span>
							<span className='cd-words-wrapper text-theme'>
								<b className='is-visible'>Exclusive</b>
								<b>Fantastic</b>
								<b>Awesome</b>
								<b>Butiful</b>
							</span>
							<span>HOUSE</span>
						</h1>
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

			<section id='page-content' className='page-wrapper'>
				{/* <!-- FIND HOME AREA START --> */}
				<SearchBox />
				{/* <!-- FIND HOME AREA END --> */}

				{/* <!-- SERVICES AREA START --> */}
				<Section className='services-area pt-60 pb-60'>
					<Row>
						<Col column='12'>
							<div className='section-title-2 text-center'>
								<h2>OUR SERVICES</h2>
								<p>
									Sheltek is the best theme for elit, sed do eiusmod tempor
									dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et lorna aliquatd minim veniam,
									quis nostrud
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col column={12}>
							<Cards cards={servicesData} />
						</Col>
					</Row>
				</Section>
				{/* <!-- SERVICES AREA END --> */}

				{/* <!-- FEATURED FLAT AREA START --> */}
				<Section className='featured-area pm-80'>
					<Row>
						<Col column={12}>
							<div className='section-title-2 text-center'>
								<h2>Featured PROPERTY</h2>
								<p>
									Sheltek is the best theme for elit, sed do eiusmod tempor
									dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et lorna aliquatd minim veniam,
									quis nostrud
								</p>
							</div>
						</Col>
					</Row>

					<FeaturedItems items={featuredItems} />
				</Section>
				{/* <!-- FEATURED FLAT AREA END --> */}

				{/* <!-- OUR AGENTS AREA START --> */}
				<Section className='our-agents-area pt-50 pb-55'>
					<Row>
						<Col column={12}>
							<div className='section-title-2 text-center'>
								<h2>OUR AGENTS</h2>
								<p>
									Sheltek is the best theme for elit, sed do eiusmod tempor
									dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et lorna aliquatd minim veniam,
									quis nostrud
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col column={12}>
							<Agents agents={agentsData} />
						</Col>
					</Row>
				</Section>

				{/* <!-- BLOG AREA START --> */}
				<Section className='blog-area pb-60'>
					<Row>
						<Col column={12}>
							<div className='section-title-2 text-center'>
								<h2>FROM BLOG</h2>
								<p>
									Sheltek is the best theme for elit, sed do eiusmod tempor
									dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et lorna aliquatd minim veniam,
									quis nostrud
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col column={12}></Col>
					</Row>
				</Section>
				<div className='blog-area pb-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='section-title-2 text-center'>
									<h2>FROM BLOG</h2>
									<p>
										Sheltek is the best theme for elit, sed do eiusmod tempor
										dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et lorna aliquatd minim veniam,
										quis nostrud
									</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-12'>
								<div className='blog-carousel'>
									{/* <!-- blog-item --> */}
									<div className='col'>
										<article className='blog-item bg-gray'>
											<div className='blog-image'>
												<a href='single-blog.html'>
													<img src='images/blog/1.jpg' alt='' />
												</a>
											</div>
											<div className='blog-info'>
												<div className='post-title-time'>
													<h5>
														<a href='single-blog.html'>Maridland de Villa</a>
													</h5>
													<p>July 30, 2017 / 10 am</p>
												</div>
												<p>
													Lorem must explain to you how all this mistaolt
													denouncing pleasure and praising pain wasnad I will
													give you a complete pain was praising
												</p>
												<a className='read-more' href='single-blog.html'>
													Read more
												</a>
											</div>
										</article>
									</div>
									{/* <!-- blog-item --> */}
									<div className='col'>
										<article className='blog-item bg-gray'>
											<div className='blog-image'>
												<a href='single-blog.html'>
													<img src='images/blog/2.jpg' alt='' />
												</a>
											</div>
											<div className='blog-info'>
												<div className='post-title-time'>
													<h5>
														<a href='single-blog.html'>Latest Design House</a>
													</h5>
													<p>July 30, 2017 / 10 am</p>
												</div>
												<p>
													Lorem must explain to you how all this mistaolt
													denouncing pleasure and praising pain wasnad I will
													give you a complete pain was praising
												</p>
												<a className='read-more' href='single-blog.html'>
													Read more
												</a>
											</div>
										</article>
									</div>
									{/* <!-- blog-item --> */}
									<div className='col'>
										<article className='blog-item bg-gray'>
											<div className='blog-image'>
												<a href='single-blog.html'>
													<img src='images/blog/3.jpg' alt='' />
												</a>
											</div>
											<div className='blog-info'>
												<div className='post-title-time'>
													<h5>
														<a href='single-blog.html'>Duplex Villa House</a>
													</h5>
													<p>July 30, 2017 / 10 am</p>
												</div>
												<p>
													Lorem must explain to you how all this mistaolt
													denouncing pleasure and praising pain wasnad I will
													give you a complete pain was praising
												</p>
												<a className='read-more' href='single-blog.html'>
													Read more
												</a>
											</div>
										</article>
									</div>
									{/* <!-- blog-item --> */}
									<div className='col'>
										<article className='blog-item bg-gray'>
											<div className='blog-image'>
												<a href='single-blog.html'>
													<img src='images/blog/2.jpg' alt='' />
												</a>
											</div>
											<div className='blog-info'>
												<div className='post-title-time'>
													<h5>
														<a href='single-blog.html'>Latest Design House</a>
													</h5>
													<p>July 30, 2017 / 10 am</p>
												</div>
												<p>
													Lorem must explain to you how all this mistaolt
													denouncing pleasure and praising pain wasnad I will
													give you a complete pain was praising
												</p>
												<a className='read-more' href='single-blog.html'>
													Read more
												</a>
											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- BLOG AREA END --> */}

				{/* <!-- BRAND AREA START --> */}
				<div className='brand-area pb-115'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='brand-carousel'>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/1.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/2.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/3.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/4.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/5.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/1.png' alt='' />
										</div>
									</div>
									{/* <!-- brand-item --> */}
									<div className='col'>
										<div className='brand-item'>
											<img src='images/brand/4.png' alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- BRAND AREA END --> */}

				{/* <!-- SUBSCRIBE AREA START --> */}
				<div className='subscribe-area bg-blue call-to-bg plr-140 ptb-50'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-lg-3 col-md-4 col-12'>
								<div className='section-title text-white'>
									<h3>SUBSCRIBE</h3>
									<h2 className='h1'>NEWSLETTER</h2>
								</div>
							</div>
							<div className='col-lg-9 col-md-8 col-12'>
								<div className='subscribe'>
									<form action='#'>
										<input
											type='text'
											name='subscribe'
											placeholder='Enter yur email here...'
										/>
										<button type='submit' value='send'>
											Send
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- SUBSCRIBE AREA END --> */}
			</section>
		</>
	)
}

export default Home
