import * as PropTypes from 'prop-types';
import events from './Events';
import { dataSourcePropTypes } from './DataSource';
import { metadataSourcePropTypes } from './MetadataSource';

export const tablePropTypes = {
    ...events,
    dataSource: dataSourcePropTypes,
    metadataSource: metadataSourcePropTypes,
    locale: PropTypes.string,
    height: PropTypes.number,
    environment: PropTypes.string,
    drillableItems: PropTypes.bool,
    stickyHeader: PropTypes.number
};