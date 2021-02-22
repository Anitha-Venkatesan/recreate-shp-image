import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App.js', () => {

  it('should render header', () => {
    const wrapper = shallow(<App />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('div');
  });
});

