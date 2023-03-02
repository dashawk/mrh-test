const SearchBox = () => {
	return (
		<div className='find-home-area bg-blue call-to-bg plr-140 pt-60 pb-20'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-3 col-12'>
						<div className='section-title text-white'>
							<h3>FIND YOUR</h3>
							<h2 className='h1'>HOME HERE</h2>
						</div>
					</div>
					<div className='col-lg-9 col-12'>
						<div className='find-homes'>
							<div className='row'>
								<div className='col-md-3 col-12'>
									<div className='find-home-item custom-select'>
										<select
											className='selectpicker'
											title='Location'
											data-hide-disabled='true'
											data-live-search='true'>
											<optgroup disabled='disabled' label='disabled'>
												<option>Hidden</option>
											</optgroup>
											<optgroup label='Australia'>
												<option>Sydney</option>
												<option>Melbourne</option>
												<option>Cairns</option>
											</optgroup>
											<optgroup label='USA'>
												<option>South Carolina</option>
												<option>Florida</option>
												<option>Rhode Island</option>
											</optgroup>
										</select>
									</div>
								</div>
								<div className='col-md-3 col-12'>
									<div className='find-home-item custom-select'>
										<select
											className='selectpicker'
											title='Sub - Location'
											data-hide-disabled='true'
											data-live-search='true'>
											<optgroup disabled='disabled' label='disabled'>
												<option>Hidden</option>
											</optgroup>
											<optgroup label='Australia'>
												<option>southeastern coast</option>
												<option>southeastern tip</option>
												<option>northwest corner</option>
											</optgroup>
											<optgroup label='USA'>
												<option>Charleston</option>
												<option>St. Petersburg</option>
												<option>Newport</option>
											</optgroup>
										</select>
									</div>
								</div>
								<div className='col-md-3 col-12'>
									<div className='find-home-item'>
										<input
											type='text'
											name='min-area'
											placeholder='Min area (sqft)'
										/>
									</div>
								</div>
								<div className='col-md-3 col-12'>
									<div className='find-home-item'>
										<input
											type='text'
											name='max-area'
											placeholder='Max area (sqft)'
										/>
									</div>
								</div>
								<div className='col-md-3 col-12'>
									<div className='find-home-item  custom-select'>
										<select
											className='selectpicker'
											title='No. of Beadrooms'
											data-hide-disabled='true'>
											<optgroup label='1'>
												<option label='1'>1 Beadrooms</option>
												<option>2 Beadrooms</option>
												<option>3 Beadrooms</option>
												<option>4 Beadrooms</option>
												<option>5 Beadrooms</option>
											</optgroup>
										</select>
									</div>
								</div>
								<div className='col-md-3 col-12'>
									<div className='find-home-item custom-select'>
										<select
											className='selectpicker'
											title='No. of Bathrooms'
											data-hide-disabled='true'>
											<optgroup label='2'>
												<option>1 Bathrooms</option>
												<option>2 Bathrooms</option>
												<option>3 Bathrooms</option>
												<option>4 Bathrooms</option>
												<option>5 Bathrooms</option>
											</optgroup>
										</select>
									</div>
								</div>
								<div className='col-md-6 col-12'>
									<div className='row'>
										<div className='col-sm-7 col-12'>
											<div className='find-home-item'>
												<div className='shop-filter'>
													<div className='price_filter'>
														<div className='price_slider_amount'>
															<input type='submit' value='You range :' />
															<input
																type='text'
																id='amount'
																name='price'
																placeholder='Add Your Price'
															/>
														</div>
														<div id='slider-range'></div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-sm-5 col-12'>
											<div className='find-home-item mb-0-xs'>
												<a className='button-1 btn-block btn-hover-1' href='#'>
													SEARCH
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchBox
