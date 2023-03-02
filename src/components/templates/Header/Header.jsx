import logo from '@/assets/images/logo.png'
import search from '@/assets/images/icons/search.png'
import HeaderMenu from './HeaderMenu'
import MobileMenu from './MobileMenu'

const Header = () => {
	return (
		<header className='header-area header-wrapper'>
			<div className='header-top-bar bg-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6 col-12'>
							<div className='logo'>
								<a href='index.html'>
									<img src={logo} alt='' />
								</a>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-12 ml-auto'>
							<div className='header-search clearfix'>
								<form action='#'>
									<button className='search-icon' type='submit'>
										<img src={search} alt='' />
									</button>
									<input type='text' placeholder='Search...' />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				id='sticky-header'
				className='header-middle-area transparent-header d-none d-md-block'>
				<div className='container'>
					<div className='full-width-mega-drop-menu'>
						<div className='row'>
							<div className='col-12'>
								<div className='sticky-logo'>
									<a href='index.html'>
										<img src={logo} alt='' />
									</a>
								</div>
								<HeaderMenu />
							</div>
						</div>
					</div>
				</div>
			</div>

			<MobileMenu />
		</header>
	)
}

export default Header
