import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';

export class Form extends Component {
  state = {
    name: '',
    category: ''
  };

  render() {
    return (
      <form>
        <fieldset className='uk-fieldset uk-margin'>
          <legend className='uk-legend uk-text-center'>
            Find your event by Name or Category
          </legend>
        </fieldset>

        <div className='uk-column-1-3@m uk-maring'>
          <div className='uk-margin' uk-margin='true'>
            <input
              name='name'
              className='uk-input'
              type='text'
              placeholder='Name of event or City'
            />
          </div>

          <div className='uk-margin' uk-margin='true'>
            <select className='uk-select' name='category'>
              <CategoriesConsumer>
                {value => {
                  console.log(value);
                  return value.categories.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                      data-uk-form-select
                    >
                      {category.name_localized}
                    </option>
                  ));
                }}
              </CategoriesConsumer>
            </select>
          </div>

          <div>
            <input
              type='submit'
              className='uk-button uk-button-danger'
              value='Find Events'
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
