import React from 'react';
import {Image as ImageDefault, Platform} from 'react-native';
import PropTypes from 'prop-types';

function Image(props: any) {
  return (
    <ImageDefault
      // {...props}
      source={props.source}
      style={[props.style, Platform.OS === "web" && {width: '100%', height: '100%'}]}
    />
  );
}
Image.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.any
};

export default Image;
