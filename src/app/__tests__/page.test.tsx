import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the Next.js logo', () => {
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the Vercel deploy button', () => {
    const deployButton = screen.getByRole('link', { name: /deploy now/i });
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute('href', expect.stringContaining('vercel.com/new'));
  });

  it('renders the documentation link', () => {
    const docsLink = screen.getByRole('link', { name: /read our docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'));
  });
});
