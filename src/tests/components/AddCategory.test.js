import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas sobre el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });

    test('debe de mostrar el componente correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });


    test('no debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';

        //1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4. El valor del input debe estar ''

        expect(wrapper.find('input').prop('value')).toBe('');

    })








})
