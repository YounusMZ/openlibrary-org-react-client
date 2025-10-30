import { render, screen } from '@testing-library/react'
import AppMain from './appmain'
import { MemoryRouter } from 'react-router';

test('renders site header', () => {
    render(
        <MemoryRouter>
            <AppMain />
        </MemoryRouter>
    );
    const siteHeader = screen.getByText(/OpenLibrary/i);
    expect(siteHeader).toBeInTheDocument();
})
