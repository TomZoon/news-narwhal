import { render, screen } from '@testing-library/react';

import App from './App';

test('Renders all elements of the site', () => {
	const { container } = render(<App />);
	const NavBar = screen.getByText(/News Narwhal/i);
	expect(NavBar).toBeVisible();
	const Footer = screen.getByText(/Tom Zoon/i);
	expect(Footer).toBeVisible();
	const SubjectDrawer = screen.getByText(/Tech/i);
	expect(SubjectDrawer).toBeVisible();
	expect(container.getElementsByClassName('pageContent').length).toBe(1);
});
