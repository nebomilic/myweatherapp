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

it ('triggers a callback when clicked', (done) => {
    const clickHandler = () => done();
    const tree = renderer
        .create(<UnitToggle clickHandler={clickHandler}/>)
        .toJSON();

    tree.children[0].children[1].props.onClick()
})
