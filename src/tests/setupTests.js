import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure our adapter.
Enzyme.configure({
    adapter: new Adapter()
});