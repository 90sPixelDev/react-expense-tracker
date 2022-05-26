import React from 'react';

const Footer = () => {
	const classes = {
		footer: 'w-full h-[50px] bg-red-900 flex flex-col',
		content: 'm-auto',
		row: 'flex flex-row justify-center',
		text: 'text-white mx-auto text-center mx-2 text-sm',
	};

	return (
		<footer className={classes.footer}>
			<div className={classes.content}>
				<div className={classes.row}>
					<a
						className={classes.text}
						href='http://lienfont.dev'
						target='_blank'
						rel='noreferrer'
					>
						Portfolio Website
					</a>
					<p className={classes.text}>|</p>
					<a
						className={classes.text}
						href='https://github.com/90sPixelDev'
						target='_blank'
						rel='noreferrer'
					>
						My GitHub
					</a>
				</div>
				<p className={classes.text}>
					Created, designed, and developed with ❤️ by Lien Font
					&copy; 2022
				</p>
			</div>
		</footer>
	);
};

export default Footer;
