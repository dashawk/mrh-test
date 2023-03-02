export const Section = ({ className, children, fluid = false }) => {
	return className !== null ? (
		<div className={className}>
			<div className={`container${fluid ? `-fluid` : ``}`}>{children}</div>
		</div>
	) : (
		<div className={`container${fluid ? `-fluid` : ``}`}>{children}</div>
	)
}

export const Col = ({ column, ...props }) => (
	<div className={`col-${column}`} {...props} />
)

export const Row = props => {
	return <div className='row' {...props} />
}
