import scss from './container.module.scss';

export default function Container({ children }: { children: React.ReactNode }) {
	return <div className={scss.container}>{children}</div>;
}
