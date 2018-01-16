import React from 'react';
import UnitToggle from '../../client/ui/components/UnitToggle';
import renderer from 'react-test-renderer';

it ('renders corectly', () => {
    const clickHandler = () => alert('Toggle was clicked');
    const tree = renderer
        .create(<UnitToggle clickHandler={clickHandler}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})