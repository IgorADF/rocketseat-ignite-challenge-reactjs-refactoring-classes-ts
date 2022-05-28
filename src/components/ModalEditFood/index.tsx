import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { food } from '../../pages/Dashboard';
import { Form as Unform } from '@unform/web';

import { FormHandles } from '@unform/core';

interface ModalEditFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: food
  handleUpdateFood: (food: food) => Promise<void>
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const formRef = useRef<any>()

  const handleSubmit = async (data: food) => {
    props.handleUpdateFood(data);
    props.setIsOpen();
  };

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={props.editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={null} />

        <Input name="name" placeholder="Ex: Moda Italiana" icon={null} />
        <Input name="price" placeholder="Ex: 19.90" icon={null} />

        <Input name="description" placeholder="Descrição" icon={null} />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
