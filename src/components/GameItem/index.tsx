import Link from 'next/link';
import { Download } from '@styled-icons/boxicons-solid/Download';

import * as S from './styles';

export type PaymentInfoProps = {
	number: string;
	flag: string;
	img: string;
	purchaseDate: string;
};

export type GameItemProps = {
	img: string;
	title: string;
	price: string;
	downloadLink?: string;
	paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
	title,
	img,
	price,
	downloadLink,
	paymentInfo,
}: GameItemProps) => {
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

			{!!paymentInfo && (
				<S.PaymentContent>
					<div>{paymentInfo.purchaseDate}</div>
					<S.CardInfo>
						<span>{paymentInfo.number}</span>
						<img src={paymentInfo.img} alt={paymentInfo.flag} />
					</S.CardInfo>
				</S.PaymentContent>
			)}
		</S.Wrapper>
	);
};

export default GameItem;
