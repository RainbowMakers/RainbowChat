import React from 'react';
import chat from '../chat';
import renderer from 'react-test-renderer';

jest.mock('../__mocks__/chat')

throw chat('hola');
