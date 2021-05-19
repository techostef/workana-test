---
to: <%= absPath %>/<%= componentName %>.tsx
---
import React from 'react';
import PropTypes from 'prop-types';
import './<%= componentName %>.scss';

interface I<%= componentName %> {

}

const <%= componentName %>: React.FC<I<%= componentName %>> = (props) => {
    return (
        <div className="<%= className %>" />
    );
};

<%= componentName %>.defaultProps = {

};

<%= componentName %>.propTypes = {

};

export default React.memo(<%= componentName %>);
