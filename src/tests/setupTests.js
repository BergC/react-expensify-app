import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// Configure our adapter.
Enzyme.configure({
    adapter: new Adapter()
});

// Configure test environment variables.
DotEnv.config({ path: '.env.test' });