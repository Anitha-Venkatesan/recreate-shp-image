import Reviews from './Reviews';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Reviews.js', () => {

  it('should render 1 star', () => {
    const wrapper = shallow(<Reviews maxstar={5} star={1} value={50} />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('Fragment');
    expect(element.children[0].props.className).toEqual('fa fa-star checked');
    expect(element.children[1].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[2].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[3].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[4].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[5].children[0]).toEqual(50);
  });

  it('should render 2 star', () => {
    const wrapper = shallow(<Reviews maxstar={5} star={2} value={50} />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('Fragment');
    expect(element.children[0].props.className).toEqual('fa fa-star checked');
    expect(element.children[1].props.className).toEqual('fa fa-star checked');
    expect(element.children[2].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[3].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[4].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[5].children[0]).toEqual(50);
  });

  it('should render 3 star', () => {
    const wrapper = shallow(<Reviews maxstar={5} star={3} value={50} />);
    const element = toJson(wrapper);
    expect(element.type).toEqual('Fragment');
    expect(element.children[0].props.className).toEqual('fa fa-star checked');
    expect(element.children[1].props.className).toEqual('fa fa-star checked');
    expect(element.children[2].props.className).toEqual('fa fa-star checked');
    expect(element.children[3].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[4].props.className).toEqual('fa fa-star unchecked');
    expect(element.children[5].children[0]).toEqual(50);
  });
});