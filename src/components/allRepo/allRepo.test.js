import React from 'react';
import AllRepo from "./AllRepo";
import {render, fireEvent} from '@testing-library/react';

it('renders correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<AllRepo/>);
    expect(queryByTestId('filter_input')).toBeTruthy()
    expect(queryByPlaceholderText('Find a repository...')).toBeTruthy()
})

describe('input value', () => {
    it('updates on input', () => {
        const {queryByPlaceholderText} = render(<AllRepo/>)
        const input_filter = queryByPlaceholderText('Find a repository...');
        fireEvent.input(input_filter, {target: {value: 'test'}})
        expect(input_filter.value).toBe('test')
    })
    it('triggers "onInputFilter" function', ()=> {
        const onInputFilter = jest.fn();
        const {queryByTestId} = render(<AllRepo onInputFilter={onInputFilter}/>)
        fireEvent.input(queryByTestId('filter_input'))
        expect(onInputFilter).toHaveBeenCalled();
    })
})
