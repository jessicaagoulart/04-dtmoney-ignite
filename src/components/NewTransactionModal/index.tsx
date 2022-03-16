import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [type, setType] = useState("deposit");

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			amount,
			category,
			type,
		});

		onRequestClose();
	}

	return (
		<Modal
			onRequestClose={onRequestClose}
			isOpen={isOpen}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				className="react-modal-close"
				type="button"
				onClick={onRequestClose}
			>
				<img src={closeIcon} alt="Fechar modal" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input
					placeholder="Título"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					placeholder="Valor"
					type="number"
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType("deposit")}
						isActive={type === "deposit"}
						activeColor="green"
					>
						<img src={incomeIcon} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType("withdraw")}
						isActive={type === "withdraw"}
						activeColor="red"
					>
						<img src={outcomeIcon} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
