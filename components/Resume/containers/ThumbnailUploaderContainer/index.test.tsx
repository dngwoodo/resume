import { render } from '@testing-library/react';

import ThumbnailUploaderContainer from './ThumbnailUploaderContainer';

describe('ThumbnailUploaderContainer', () => {
  it('render button', () => {
    const { getByRole } = render(<ThumbnailUploaderContainer />);

    expect(getByRole('button', { name: '사진 변경' })).toBeInTheDocument();
  });
});
