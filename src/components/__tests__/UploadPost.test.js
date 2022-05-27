import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UploadPost from '../UploadPost';

it('should render UploadPost Panel', () => {
  let tree = renderer
    .create(
      <UploadPost
        userpic={'http://picurl.com'}
        name={'Name'}
        onPublish={() => {}}
        uploading={false}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Fields & Inputs', () => {
  it('onChange', () => {
    render(
      <UploadPost
        userpic={'http://picurl.com'}
        name={'Name'}
        onPublish={() => {}}
        uploading={false}
      />
    );

    const comment_input = screen.queryByTitle('comment-box');
    fireEvent.change(comment_input, { target: { value: 'Testing a post' } });
    expect(comment_input.value).toBe('Testing a post');
  });

  let load = false;

  it('clicked on upload', () => {
    render(
      <UploadPost
        userpic={'http://picurl.com'}
        name={'Name'}
        onPublish={(data) => {
          load = true;
        }}
        uploading={load}
      />
    );

    const publishBtn = screen.getByTitle('publish');
    fireEvent.click(publishBtn);
  });

  it('fields disabled check when uploading', () => {
    render(
      <UploadPost
        userpic={'http://picurl.com'}
        name={'Name'}
        onPublish={() => {}}
        uploading={load}
      />
    );

    const publishBtn = screen.getByTitle('publish');
    const comment_input = screen.queryByTitle('comment-box');
    expect(publishBtn).toBeDisabled();
    expect(comment_input).toBeDisabled();
  });
});
