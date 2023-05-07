import scss from './notFound.module.scss';

type NotFoundProps = {
	error: {
		title: string;
		message: string;
		resolution: string;
	};
};

export default function NotFound({ error }: NotFoundProps) {
	return (
		<div className={scss.notFound}>
			<div className={scss.emoji}>&#128533;</div>
			<div className={scss.title}>{error.title}</div>
			<p>
				{error.message} {error.resolution}
			</p>
		</div>
	);
}
