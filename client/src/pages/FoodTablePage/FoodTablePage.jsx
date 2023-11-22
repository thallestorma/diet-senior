import { useState, useEffect } from 'react';

import './FoodTablePage.css';
import Modal from '../../Modal/Modal';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import Consumption from '../../Consumption/Consumption';
import { AuthConsumer } from '../../auth';

export default function FoodTablePage() {
    const [foods, setFoods] = useState([]);
    const [food, setFood] = useState({});
    const [isAddToTableModalOpen, setIsAddToTableModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [isConsumptionModalOpen, setIsConsumptionModalOpen] = useState(false);

    const auth = AuthConsumer();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/alimentos`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const foods = await response.json();
            setFoods(foods);
        }
        fetchData();
    }, []);

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

        if (name !== '' && calories > 0 && quantityValue > 0) {
            const addFood = async (data) => {
                try {
                    const response = await fetch(
                        `${import.meta.env.VITE_API_BASE_URL}/alimentos`,
                        {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        }
                    );

                    const food = await response.json();

                    if (food?.insertId) {
                        setFoods((prevFood) => {
                            return [
                                ...prevFood,
                                {
                                    id: food.insertId,
                                    ...data,
                                },
                            ];
                        });

                        setName('');
                        setCalories('');
                        setQuantityValue('');

                        setIsAddToTableModalOpen(false);
                    }
                } catch (error) {
                    console.log('error', error);
                }
            };

            addFood({
                nome: name,
                calorias: parseInt(calories),
                quantidade: parseInt(quantityValue),
            });
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
                <h3>Tabela de alimentos</h3>
                <div className='grid-table'>
                    <div className='line header'>
                        <span>Alimento</span>
                        <span>Calorias</span>
                        <span>Referência</span>
                        <span>Ação</span>
                    </div>
                    {foods.map((food) => {
                        return (
                            <div className='line' key={food.id}>
                                <span>{food.nome}</span>
                                <span>{food.calorias} kcal</span>
                                <span>{food.quantidade} gr</span>
                                <span>
                                    <button
                                        onClick={() =>
                                            handleClickConsumption(food)
                                        }>
                                        Registrar consumo
                                    </button>
                                </span>
                            </div>
                        );
                    })}
                </div>

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
                            id='quantity_value'
                            labelName='Quantidade (gr)'
                            value={quantityValue}
                            required={true}
                            onChange={(e) => setQuantityValue(e.target.value)}
                        />

                        <Input
                            type='number'
                            id='calories'
                            labelName='Calorias'
                            value={calories}
                            required={true}
                            onChange={(e) => setCalories(e.target.value)}
                        />
                    </Form>
                </Modal>
            )}

            {isConsumptionModalOpen && (
                <Consumption
                    food={food}
                    auth={auth}
                    handleClose={handleConsumptionCloseButton}
                />
            )}
        </>
    );
}
