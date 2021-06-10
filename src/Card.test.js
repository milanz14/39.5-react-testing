import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test('it should render without crashing', () => {
    render(<Card />);
});

test('it should match snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});

