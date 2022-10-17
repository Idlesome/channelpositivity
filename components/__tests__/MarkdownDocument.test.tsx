import { render } from '@testing-library/react';
import React from 'react';
import { MarkdownDocument } from '../MarkdownDocument';

const markdownMock: TArticle = require('./article-mock.json');

describe('<MarkdownDocument/>', () => {
  it('renders markdown documents', () => {
    render(<MarkdownDocument markdown={markdownMock.markdown} />);
  });
});
