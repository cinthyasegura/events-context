import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';

export class Form extends Component {
  state = {
    category: '',
    name: ''
  };

  render() {
    return (
      <Form>
        <fieldset className='uk-fieldset uk-margin'>
          <legend className='uk-legend uk-text-center'>
            Busca tu evento por Nombre o Categoría
          </legend>
        </fieldset>
        <div className='uk-column-1-3@m uk-margin'>
          <div className='uk-margin' uk-margin='true'>
            <input
              name='name'
              className='uk-input'
              type='text'
              placeholder='Nombre de Evento o Ciudad'
            />
          </div>
          <div className='uk-margin' uk-margin='true'>
            <CategoriesConsumer name='category' className='uk-select'>
              <CategoriesConsumer>
                {value => {
                  return value.categories.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                      className='data-uk-form-select'
                    >
                      {category.name_localized}
                    </option>
                  ));
                }}
              </CategoriesConsumer>
            </CategoriesConsumer>
          </div>
          <div>
            <input
              className='uk-button uk-button-danger'
              type='submit'
              value='Busca eventos'
            />
          </div>
        </div>
      </Form>
    );
  }
}

export default Form;
