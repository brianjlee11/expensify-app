import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const text = 'text';
  wrapper.find("input").at(0).simulate('change', {
    target : {
      value : text
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters : altFilters
  })
  wrapper.find("select").simulate('change', {
    target : {
      value: "date"
    }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: {
      value: "amount",
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  const startDate = moment(0).add(3, "days");
  const endDate = moment(0).add(6, "days");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate'
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

