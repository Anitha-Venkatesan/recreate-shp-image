import ProductList from './ProductList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ProductList.js', () => {

  it('should render 5 products', () => {
    const wrapper = shallow(<ProductList />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('div');
    expect(element.children[0].type).toEqual('ul');
    expect(element.children[0].children.length).toEqual(5);
  });

  it('should render bogo for product 3', () => {
    const wrapper = shallow(<ProductList />);
    const element = toJson(wrapper);
    expect(element.children[0].children[2].type).toEqual('li');
    expect(element.children[0].children[2].children[0].children[0].children[0]).toEqual('BOGO');
    expect(element.children[0].children[2].children[2].children[0].type).toEqual('Reviews');
    expect(element.children[0].children[2].children[2].children[0].props.maxstar).toEqual(5);
    expect(element.children[0].children[2].children[2].children[0].props.star).toEqual(4);
    expect(element.children[0].children[2].children[2].children[0].props.value).toEqual(823);
  });
});