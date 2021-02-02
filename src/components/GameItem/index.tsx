import Link from 'next/link';
import { Download } from '@styled-icons/boxicons-solid/Download';

import * as S from './styles';

export type GameItemProps = {
	img: string;
	title: string;
	price: string;
	downloadLink?: string;
};

const GameItem = ({ title, img, price, downloadLink }: GameItemProps) => {
	return (
		<S.Wrapper>
			<S.GameContent>
				<S.ImageBox>
					<img src={img} alt={title} />
				</S.ImageBox>

				<S.Content>
					<S.Title>
						{title}

						{!!downloadLink && (
							<Link href={downloadLink} passHref>
								<S.DownloadLink
									target="_blank"
									aria-label={`get ${title} here`}
								>
									<Download size={22} />
								</S.DownloadLink>
							</Link>
						)}
					</S.Title>
					<S.Price>{price} </S.Price>
				</S.Content>
			</S.GameContent>
		</S.Wrapper>
	);
};

export default GameItem;
