import React from 'react'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer id='footer' className='footer-area bg-2 bg-opacity-black-90'>
			<div className='footer-top pt-110 pb-80'>
				<div className='container'>
					<div className='row'>
						{/* <!-- footer-address --> */}
						<div className='col-xl-3 col-lg-3 col-md-6 col-12 order-1'>
							<div className='footer-widget'>
								<h6 className='footer-titel'>GET IN TOUCH</h6>
								<ul className='footer-address'>
									<li>
										<div className='address-icon'>
											<img src='images/icons/location-2.png' alt='' />
										</div>
										<div className='address-info'>
											<span>8901 Marmora Raod,</span>
											<span>Glasgow, D04 89GR</span>
										</div>
									</li>
									<li>
										<div className='address-icon'>
											<img src='images/icons/phone-3.png' alt='' />
										</div>
										<div className='address-info'>
											<span>Telephone : +0 123-456-7890</span>
											<span>Telephone : +0 123-456-7890</span>
										</div>
									</li>
									<li>
										<div className='address-icon'>
											<img src='images/icons/world.png' alt='' />
										</div>
										<div className='address-info'>
											<span>Email : info@domain.com</span>
											<span>
												Web :
												<a href='#' target='_blank'>
													{' '}
													www.yoursite.com
												</a>
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- footer-latest-news --> */}
						<div className='col-xl-6 col-lg-5 col-12 order-3 order-lg-2 mt-md-30'>
							<div className='footer-widget middle'>
								<h6 className='footer-titel'>LATEST NEWS</h6>
								<ul className='footer-latest-news'>
									<li>
										<div className='latest-news-image'>
											<a href='single-blog.html'>
												<img src='images/blog/1.jpg' alt='' />
											</a>
										</div>
										<div className='latest-news-info'>
											<h6>
												<a href='single-blog.html'>Beautiful Home</a>
											</h6>
											<p>
												Lorem ipsum dolor sit amet, consectetur acinglit sed do
												eiusmod tempor inciidunt ut labore{' '}
											</p>
										</div>
									</li>
									<li>
										<div className='latest-news-image'>
											<a href='single-blog.html'>
												<img src='images/blog/2.jpg' alt='' />
											</a>
										</div>
										<div className='latest-news-info'>
											<h6>
												<a href='single-blog.html'>Beautiful Home</a>
											</h6>
											<p>
												Lorem ipsum dolor sit amet, consectetur acinglit sed do
												eiusmod tempor inciidunt ut labore{' '}
											</p>
										</div>
									</li>
									<li>
										<div className='latest-news-image'>
											<a href='single-blog.html'>
												<img src='images/blog/3.jpg' alt='' />
											</a>
										</div>
										<div className='latest-news-info'>
											<h6>
												<a href='single-blog.html'>Beautiful Home</a>
											</h6>
											<p>
												Lorem ipsum dolor sit amet, consectetur acinglit sed do
												eiusmod tempor inciidunt ut labore{' '}
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- footer-contact --> */}
						<div className='col-xl-3 col-lg-4 col-md-6 col-12 order-2 order-lg-3 mt-sm-30'>
							<div className='footer-widget'>
								<h6 className='footer-titel'>QUICK CONTACT</h6>
								<div className='footer-contact'>
									<p>
										Lorem ipsum dolor sit amet, consectetur acinglit sed do
										eiusmod tempor
									</p>
									<form
										id='contact-form-2'
										action='mail_footer.php'
										method='post'>
										<input
											type='email'
											name='email2'
											placeholder='Type your E-mail address...'
										/>
										<textarea
											name='message2'
											placeholder='Write here...'></textarea>
										<button type='submit' value='send'>
											Send
										</button>
									</form>
									<p className='form-messege'></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='copyright text-center'>
								<p>
									© {currentYear} Sheltek Mede with ❤️ by{' '}
									<a href='https://hasthemes.com/' target='_blank'>
										HasThemes
									</a>{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
