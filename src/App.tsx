import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement("#root");

export function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	return (
		<TransactionsProvider>
			<Header openModal={openModal} />
			<Dashboard />
			<GlobalStyle />
			<NewTransactionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
		</TransactionsProvider>
	);
}
