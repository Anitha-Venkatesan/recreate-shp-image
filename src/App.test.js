import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App.js', () => {

  it('should render compoent', () => {
    const wrapper = shallow(<App />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('div');
    expect(element.children[0].type).toEqual('Header');
    expect(element.children[1].type).toEqual('Shopnow');
    expect(element.children[2].type).toEqual('MayLike');
    expect(element.children[3].type).toEqual('ProductList');
  });
});

