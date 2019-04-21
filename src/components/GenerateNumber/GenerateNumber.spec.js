// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';
import FileSaver from 'js-file-download';

// component
import GenerateNumber from './';

const generateNumberPerPage = ['102830', '297357', '362883'];
const generatedNumber = ['102830', '297357', '362883', '102830', '297357', '362883', '102830', '297357', '362883', '102830', '297357', '362883'];

describe('GenerateNumber Component', () => {
  it('should render generate number page correctly', () => {
    const wrapper = mount(<GenerateNumber />);

    expect(wrapper.find('Form').length).toBe(1);
  })

  it('should render Table component', () => {
    const wrapper = mount(<GenerateNumber />);
    wrapper.setState({
      generateNumberPerPage
    })

    expect(wrapper.find('Table').length).toBe(1)
  })

  it('should render Pagination component', () => {
    const wrapper = mount(<GenerateNumber />);
    wrapper.setState({
      generatedNumber
    })

    expect(wrapper.find('Pagination').length).toBe(1)
  });

  it('should call onPage function', () => {
    const wrapper = mount(<GenerateNumber />);
    const page = {
      selected: 1
    }
    wrapper.setState({
      generatedNumber
    })
    const onPageChange = jest.spyOn(wrapper.instance(), 'onPageChange');
    wrapper.instance().onPageChange(page);

    expect(onPageChange).toBeCalledWith(page);
    expect(wrapper.state().currentPage).toBe(2);
    expect(wrapper.state().generateNumberPerPage.length).toBe(2);
    expect(wrapper.find('Pagination li a').length).toBe(4)
  });

  it('should sort numbers by ascending order', () => {
    const wrapper = mount(<GenerateNumber />);
    wrapper.setState({
      generateNumberPerPage
    });
    const event = {
      target: { name: "sortBy", value: 'ascending'}
    }
    const sortNumbers = jest.spyOn(wrapper.instance(), 'sortNumbers');
    wrapper.instance().sortNumbers(event);

    expect(sortNumbers).toBeCalledWith(event);
    expect(wrapper.state().generateNumberPerPage).toEqual([ '102830', '297357', '362883' ]);
  });

  it('should sort numbers by descending order', () => {
    const wrapper = mount(<GenerateNumber />);
    wrapper.setState({
      generateNumberPerPage
    });
    const event = {
      target: { name: "sortBy", value: 'descending'}
    }
    const sortNumbers = jest.spyOn(wrapper.instance(), 'sortNumbers');
    wrapper.instance().sortNumbers(event);

    expect(sortNumbers).toBeCalledWith(event);
    expect(wrapper.state().generateNumberPerPage).toEqual([ '362883', '297357', '102830' ]);
  });

  it('it should get generated numbers', () => {
    const wrapper = mount(<GenerateNumber />);
    const getGeneratedNumbers = jest.spyOn(wrapper.instance(), 'getGeneratedNumbers');
    wrapper.instance().getGeneratedNumbers(generatedNumber);

    expect(getGeneratedNumbers).toBeCalledWith(generatedNumber);
    expect(wrapper.state().generateNumberPerPage.length).toBe(10);
    expect(wrapper.state().maxNumber).toBe(362883);
    expect(wrapper.state().minNumber).toBe(102830);
  });

  it('should download numbers', () => {
    global.URL.createObjectURL = jest.fn();
    global.URL.revokeObjectURL = jest.fn();
    const wrapper = mount(<GenerateNumber />);
    wrapper.setState({
      generatedNumber
    })

    const downLoadNumbers = jest.spyOn(wrapper.instance(), 'downLoadNumbers');
    wrapper.instance().downLoadNumbers();

    expect(downLoadNumbers).toBeCalled();
  })
})
