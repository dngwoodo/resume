import { render } from '@testing-library/react';
import PdfViewer from './PdfViewer';

describe('PdfViewer', () => {
  it('renders pdf viewer', () => {
    const { getByText } = render(<PdfViewer />);

    expect(getByText('pdf viewer')).toBeInTheDocument();
  });
});
