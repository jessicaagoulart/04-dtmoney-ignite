import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

interface ModalProps {
	openModal: () => void;
}

export function Header({ openModal }: ModalProps) {
	return (
		<Container>
			<Content>
				<img src={logo} alt="dtmoney" />
				<button onClick={openModal} type="button">
					Nova transação
				</button>
			</Content>
		</Container>
	);
}
