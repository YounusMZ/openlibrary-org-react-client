import { render, screen, waitFor } from '@testing-library/react'
import Trending from './trendingbooks'
import { MemoryRouter } from 'react-router';

test('renders trending page header', () => {
    render(
        <MemoryRouter>
            <Trending />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Trending Books/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders book items', async () => {
    render(
        <MemoryRouter>
            <Trending />
        </MemoryRouter>
    );

    await waitFor(() => {
        const bookGrid = screen.getAllByTestId('book-grid');
        for (let item of bookGrid){
            expect(item).toBeInTheDocument()
        }
    }, {timeout: 2000})
})