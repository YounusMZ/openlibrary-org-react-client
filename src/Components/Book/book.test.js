import { render, screen, waitFor } from '@testing-library/react'
import Book from './book'
import { MemoryRouter } from 'react-router';

test('renders book items', async () => {
    render(
        <MemoryRouter>
            <Book />
        </MemoryRouter>
    );

    await waitFor(() => {
        const bookGrid = screen.getAllByTestId('book-grid');
        for (let item of bookGrid){
            expect(item).toBeInTheDocument();
        }
    }, {timeout: 3000})
})

test('renders next and back page buttons', () => {
    render(
        <MemoryRouter>
            <Book />
        </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    const nextButton = screen.getByText('Next');
    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
})