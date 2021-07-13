import Link from 'next/link';
import { Download } from '@styled-icons/boxicons-solid/Download';
import { useCart } from 'hooks/use-cart';

import * as S from './styles';

export type PaymentInfoProps = {
	number: string;
	flag: string;
	img: string;
	purchaseDate: string;
};

export type GameItemProps = {
	id: string;
	img: string;
	title: string;
	price: string;
	downloadLink?: string;
	paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
	id,
	title,
	img,
	price,
	downloadLink,
	paymentInfo,
}: GameItemProps) => {
	const { isInCart, removeFromCart } = useCart();
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
					<S.Group>
						<S.Price>{price} </S.Price>
						<S.Remove onClick={() => isInCart(id) && removeFromCart(id)}>
							Remove
						</S.Remove>
					</S.Group>
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
