function Avatar({id,alt}) {

	return (
		<div>
			<img src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`} alt={alt} />
		</div>
	)

}

export default Avatar
