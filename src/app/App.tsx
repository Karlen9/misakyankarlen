import { classNames }from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar';



const App = () => {
  
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
    </div>
  );
};

export default App; 