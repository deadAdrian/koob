import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import LandingPageMobile from '@/components/LandingPageMobile/LandingPageMobile';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
        pathname: '',
        };
    },
}));

test('It renders', () => {
    render(<LandingPageMobile/>);
    const landingPageElement = screen.getByTestId('mobile-landing-page');
    expect(landingPageElement).toBeInTheDocument();
});

test('It has all texts', () => {
    render(<LandingPageMobile/>);
    const landingPageElement = screen.getByTestId('mobile-landing-page');
    expect(landingPageElement).toHaveTextContent(
        "Track and manage your reading journey." + 
        "Easily registering and keeping record of the books you've enjoyed!"
    );
});

test('It shows login when arrow button is clicked', () => {
    render(<LandingPageMobile/>);
    const mobileLoginForm = screen.getByTestId('mobile-login-form');
    const rightArrowButton = screen.getByTestId('right-arrow-button');
    fireEvent.click(rightArrowButton);
    expect(mobileLoginForm).toBeVisible();
});

test('It shows landingPage when left arrow button is clicked', () => {
    render(<LandingPageMobile/>);
    const mobileLandingPage = screen.getByTestId('mobile-landing-page');
    const rightArrowButton = screen.getByTestId('right-arrow-button');
    const leftArrowButton = screen.getByTestId('left-arrow-button');
    fireEvent.click(rightArrowButton);
    fireEvent.click(leftArrowButton);
    expect(mobileLandingPage).toBeVisible();
});
