const Blog = () => {
	return (
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
						Lorem must explain to you how all this mistaolt denouncing pleasure
						and praising pain wasnad I will give you a complete pain was
						praising
					</p>
					<a className='read-more' href='single-blog.html'>
						Read more
					</a>
				</div>
			</article>
		</div>
	)
}

export default Blog
