import  React from 'react';
import ReactDom from 'react-dom';
import SingleRepo from "./SingleRepo";
import { render, cleanup} from '@testing-library/react';
import Repo from "../../common/repoExample";

afterEach(cleanup)
it('renders without crashes', () => {
    const div = document.createElement('div');
    ReactDom.render(<SingleRepo/>, div)
})
it('render correctly', () => {
    const {getByTestId} = render(<SingleRepo item={Repo}/>)
    expect(getByTestId('singleRepo')).toBeTruthy()
})
