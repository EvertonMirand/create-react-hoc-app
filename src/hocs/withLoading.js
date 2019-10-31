import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/CircleLoader';

const override = css`
  display: block;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  border-color: red;
  color: red;
`;

export const withLoading = Component => {
  const WithLoading = ({ data }) =>
    data ? (
      <Component data={data} />
    ) : (
      <ClipLoader
        css={override}
        sizeUnit={'px'}
        size={50}
        color={'#123abc'}
        loading={true}
      />
    );

  WithLoading.propTypes = {
    data: PropTypes.bool,
  };
  return WithLoading;
};
