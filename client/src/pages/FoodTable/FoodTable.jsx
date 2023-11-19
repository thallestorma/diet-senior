import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './FoodTable.css';
import data from './data.json';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import Consumption from '../../Consumption/Consumption';

export default function FoodTable() {
    const [foods, setFoods] = useState(data);
    const [food, setFood] = useState({});
    const [isAddToTableModalOpen, setIsAddToTableModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [quantityUnity, setQuantityUnity] = useState('gr');

    const [isConsumptionModalOpen, setIsConsumptionModalOpen] = useState(false);

    const handleClickAddToTable = () =>
        setIsAddToTableModalOpen(
            (isAddToTableModalOpen) => !isAddToTableModalOpen
        );
    const handleClickConsumption = (food) => {
        setFood(food);
        setIsConsumptionModalOpen(
            (isConsumptionModalOpen) => !isConsumptionModalOpen
        );
    };

    const handleSubmitModal = (e) => {
        e.preventDefault();

        console.log(name, calories, quantityValue, quantityUnity);

        if (name !== '' && calories > 0 && quantityValue > 0 && quantityUnity) {
            setFoods((foods) => {
                return [
                    ...foods,
                    {
                        id: uuidv4(),
                        name,
                        calories,
                        quantity: {
                            value: quantityValue,
                            unit: quantityUnity,
                        },
                    },
                ];
            });

            setName('');
            setCalories('');
            setQuantityValue('');
            setQuantityUnity('');

            setIsAddToTableModalOpen(false);
        }
    };

    const handleAddToTableCloseButton = () => {
        setIsAddToTableModalOpen(false);
    };

    const handleConsumptionCloseButton = () => {
        setIsConsumptionModalOpen(false);
    };

    return (
        <>
            <div className='food-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Alimento</th>
                            <th>Calorias</th>
                            <th>Quantidade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food) => {
                            return (
                                <tr key={food.id}>
                                    <td>{food.name}</td>
                                    <td>{food.calories}kcal</td>
                                    <td>
                                        {food.quantity.value}{' '}
                                        {food.quantity.unit}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleClickConsumption(food)
                                            }>
                                            Registrar consumo
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='buttons'>
                    <button onClick={handleClickAddToTable}>
                        Adicionar alimento à tabela
                    </button>
                </div>
            </div>

            {isAddToTableModalOpen && (
                <Modal handleClose={handleAddToTableCloseButton}>
                    <Form
                        handleSubmit={handleSubmitModal}
                        handleClose={handleAddToTableCloseButton}>
                        <Input
                            type='text'
                            id='name'
                            labelName='Nome'
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            type='number'
                            id='calories'
                            labelName='Calorias'
                            value={calories}
                            required={true}
                            onChange={(e) => setCalories(e.target.value)}
                        />

                        <Input
                            type='number'
                            id='quantity_value'
                            labelName='Quantidade'
                            value={quantityValue}
                            required={true}
                            onChange={(e) => setQuantityValue(e.target.value)}
                        />

                        <div className='input-line'>
                            <label htmlFor='quantity_unity'>Unidade</label>

                            <select
                                name='quantity_unity'
                                id='quantity_unity'
                                value={quantityUnity}
                                onChange={(e) =>
                                    setQuantityUnity(e.target.value)
                                }>
                                <option value='gr'>gr</option>
                                <option value='un'>un</option>
                                <option value='ml'>ml</option>
                            </select>
                        </div>
                    </Form>
                </Modal>
            )}

            {isConsumptionModalOpen && (
                <Consumption
                    food={food}
                    handleClose={handleConsumptionCloseButton}
                />
            )}
        </>
    );
}
