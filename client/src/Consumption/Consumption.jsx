import { useState } from 'react';

import Form from '../Form/Form';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';

import './Consumption.css';

export default function Consumption({ handleClose, food, auth }) {
    const [quantity, setQuantity] = useState(0);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const insertConsumption = async (data) => {
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/calcularCalorias`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            const consumption = await response.json();

            if (consumption?.totalCalorias) {
                setSuccess(true);
            }
        };

        if (auth?.auth?.usuario?.id && food?.id)
            insertConsumption({
                usuarioId: auth.auth.usuario.id,
                alimentoId: food.id,
                quantidade: parseInt(quantity),
            });
    };

    return (
        <Modal handleClose={handleClose}>
            <div className='consumption'>
                {success && <p>Consumo registrado com sucesso!</p>}
                <Form handleSubmit={handleSubmit} handleClose={handleClose}>
                    <h3>Registrar consumo</h3>
                    <div className='input-line'>
                        <label htmlFor='name'>Nome</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            disabled
                            value={food.nome}
                        />
                    </div>
                    <Input
                        type='number'
                        id='quantity'
                        labelName='Quantidade (gr)'
                        value={quantity}
                        required={true}
                        minValue={1}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </Form>
            </div>
        </Modal>
    );
}
