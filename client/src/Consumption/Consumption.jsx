import { useState } from 'react';

import Form from '../Form/Form';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';

export default function Consumption({ handleClose }) {
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Modal handleClose={handleClose}>
                <Form handleSubmit={handleSubmit} handleClose={handleClose}>
                    <input type='text' disabled value='Nome do alimento' />
                    <Input
                        type='number'
                        id='quantity'
                        labelName='Quantidade'
                        value={quantity}
                        required={true}
                        minValue={1}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <div>
                        <span>Medida</span>
                        <input type='text' disabled value='100' />
                    </div>
                </Form>
            </Modal>
        </>
    );
}
