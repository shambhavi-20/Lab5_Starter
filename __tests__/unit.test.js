// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Correct Phone Number 1: 123-456-7890', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('Correct Phone Number 2: (213)456-7890', () => {
  expect(isPhoneNumber("(213)456-7890")).toBe(true);
});

test('Wrong Phone Number 1: (213)456-789', () => {
  expect(isPhoneNumber("(213)456-789")).toBe(false);
});

test('Wrong Phone Number 2: 2134567890', () => {
  expect(isPhoneNumber("213456789")).toBe(false);
});


test('Correct Email 1: shmittal@ucsd.edu', () => {
  expect(isEmail("shmittal@ucsd.edu")).toBe(true);
});

test('Correct Email 2: 123@yahoo.com', () => {
  expect(isEmail("123@yahoo.com")).toBe(true);
});

test('Wrong Email 1: name.age', () => {
  expect(isEmail("name.age")).toBe(false);
});

test('Wrong Email 2: wrong@123.88', () => {
  expect(isEmail("wrong@123.88")).toBe(false);
});


test('Correct password format 1: M____', () => {
  expect(isStrongPassword("M____")).toBe(true);
});

test('Correct password format 2: Cool123', () => {
  expect(isStrongPassword("Cool123")).toBe(true);
});

test('Wrong password format 1: name.age.DOB.address', () => {
  expect(isStrongPassword("name.age.DOB.address")).toBe(false);
});

test('Wrong password format 2: 908978', () => {
  expect(isStrongPassword("908978")).toBe(false);
});


test('Correct date format 1: 20/06/1997', () => {
  expect(isDate("20/6/1997")).toBe(true);
});

test('Correct date format 2: 02/20/2004', () => {
  expect(isDate("02/20/2004")).toBe(true);
});

test('Wrong date format 1: 001/01/2014', () => {
  expect(isDate("001/01/2014")).toBe(false);
});

test('Wrong date format 2: 01012014', () => {
  expect(isDate("01012014")).toBe(false);
});


test('Correct hex codes format 1: #123', () => {
  expect(isHexColor("#123")).toBe(true);
});

test('Correct hex codes format 2: #f13ad7', () => {
  expect(isHexColor("#f13ad7")).toBe(true);
});

test('Wrong hex codes format 1: #f13ah7', () => {
  expect(isHexColor("#f13ah7")).toBe(false);
});

test('Wrong hex codes format 2: #1223334444', () => {
  expect(isHexColor("1223334444")).toBe(false);
});