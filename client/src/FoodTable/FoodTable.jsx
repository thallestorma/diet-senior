import './FoodTable.css';
import data from './data.json';

import { useState } from 'react';

export const FoodTable = () => {
    const [foods, setFoods] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [quantityUnity, setQuantityUnity] = useState('gr');

    const handleClickAddToTable = () =>
        setIsModalOpen((isModalOpen) => !isModalOpen);

    const handleSubmitModal = (e) => {
        e.preventDefault();

        console.log(name, calories, quantityValue, quantityUnity);

        if (name !== '' && calories > 0 && quantityValue > 0 && quantityUnity) {
            setFoods((foods) => {
                return [
                    ...foods,
                    {
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

            setIsModalOpen(false);
        }
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
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, key) => {
                            return (
                                <tr key={key}>
                                    <td>{food.name}</td>
                                    <td>{food.calories}kcal</td>
                                    <td>
                                        {food.quantity.value}{' '}
                                        {food.quantity.unit}
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

                    <button>Selecionar alimento</button>
                </div>
            </div>
            {isModalOpen && (
                <div className='modal' onSubmit={handleSubmitModal}>
                    <form>
                        <div className='input-line'>
                            <label htmlFor='name'>Nome</label>
                            <input
                                type='text'
                                name='name'
                                value={name}
                                required='required'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor='calories'>Calorias</label>
                            <input
                                type='number'
                                min={1}
                                name='calories'
                                value={calories}
                                required='required'
                                onChange={(e) => setCalories(e.target.value)}
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor='quantity_value'>Quantidade</label>
                            <input
                                type='number'
                                min={1}
                                name='quantity_value'
                                value={quantityValue}
                                required='required'
                                onChange={(e) =>
                                    setQuantityValue(e.target.value)
                                }
                            />
                        </div>

                        <div className='input-line'>
                            <label htmlFor='quantity_unity'>Unidade</label>

                            <select
                                name='quantity_unity'
                                id=''
                                value={quantityUnity}
                                onChange={(e) =>
                                    setQuantityUnity(e.target.value)
                                }>
                                <option value='gr'>gr</option>
                                <option value='un'>un</option>
                                <option value='ml'>ml</option>
                            </select>
                            {/* <input
                                type='text'
                                name='quantity_unity'
                                value={quantityUnity}
                                onChange={(e) =>
                                    setQuantityUnity(e.target.value)
                                }
                            /> */}
                        </div>

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
            )}
        </>
    );
};
