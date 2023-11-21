import './Form.css';

export default function Form({ handleSubmit, handleClose, children }) {
    return (
        <form onSubmit={handleSubmit}>
            {children}

            <button type='submit'>Salvar</button>
            {handleClose && <button onClick={handleClose}>Fechar</button>}
        </form>
    );
}
