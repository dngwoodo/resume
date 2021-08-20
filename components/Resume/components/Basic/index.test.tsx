import { fireEvent, render } from '@testing-library/react';

import { BASIC_LABELS } from '@/fixtures/labels';

import Basic from './Basic';

describe('Basic', () => {
  const handleChange = jest.fn();

  function renderBasic() {
    return render(
      <Basic
        basic={{
          name: '',
          jobTitle: '',
          email: '',
          phone: '',
          address: '',
          selfIntroduction: '',
        }}
        onChange={handleChange}
      />
    );
  }

  it('renders inputs', () => {
    const { getByLabelText } = renderBasic();

    BASIC_LABELS.forEach((BASIC_LABEL) => {
      expect(getByLabelText(BASIC_LABEL)).toBeInTheDocument();
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderBasic();

    BASIC_LABELS.forEach((BASIC_LABEL) => {
      fireEvent.change(getByLabelText(BASIC_LABEL), {
        target: { value: 'test' },
      });
    });

    expect(handleChange).toBeCalledTimes(BASIC_LABELS.length);
  });
});
