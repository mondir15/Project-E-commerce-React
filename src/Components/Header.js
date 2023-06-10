import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, showAdd, onAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      
      {location.pathname !== '/' && (
        <nav>
          <ul>
            <li>
             
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'E-commerce site',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
