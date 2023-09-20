import { classNames }from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss'



const App = () => {
  
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
    </div>
  );
};

export default App; 