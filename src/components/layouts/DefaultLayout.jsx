import { Navigation } from '../ui/navigation/Navigation';

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
