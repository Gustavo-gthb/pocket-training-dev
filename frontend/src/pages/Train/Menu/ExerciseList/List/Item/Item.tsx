import { useNavigate } from 'react-router-dom';
import { Container, Series } from './style';

const PlayIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='14'
		viewBox='0 0 16 14'
		fill='none'>
		<path
			d='M15.2389 7.37702L0.780744 13.6487L1.21176 0.192873L15.2389 7.37702Z'
			fill='black'
		/>
	</svg>
);

interface Props {
	id: string;
	name: string;
	series: number;
}

const Item = ({ name, series, id }: Props) => {
	const navigate = useNavigate();
	
	const handleClick = () => {
		navigate(`exercicio/${id}`);
	};

	return (
		<Container onClick={handleClick}>
			<h3>{name}</h3>

			<PlayIcon />

			<Series>
				<p>{series}</p>
				<span>Series</span>
			</Series>
		</Container>
	);
};

export default Item;
