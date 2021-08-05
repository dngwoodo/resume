import { render } from '@testing-library/react';
import ThumbnailUploader from './ThumbnailUploader';

describe('ThumbnailUploader', () => {
  it('renders image, buttons, text', () => {
    const { getByRole, getByText } = render(<ThumbnailUploader />);
    const avatar = document.querySelector('img')!;

    expect(getByRole('button', { name: '사진 변경' })).toBeInTheDocument();
    expect(getByRole('button', { name: '사진 삭제' })).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(getByText('프로필 사진을 업로드 해주세요.')).toBeInTheDocument();
  });
});
