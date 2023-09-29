import classNames from 'classnames';

export default function Badge({ title, color }) {
	return (
		<span
			className={classNames('text-xs select-none inline-block capitalize rounded-md px-3 py-1', {
				[`bg-${color}-200 text-${color}-500`]: color,
			})}
		>
			{title}
		</span>
	);
}
