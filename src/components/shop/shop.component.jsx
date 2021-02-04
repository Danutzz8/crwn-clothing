import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import CollectionsOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

//import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';
import { selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors.js';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        
        fetchCollectionsStartAsync();    
    }

    render() {
        const{ match, isFetchingCollections, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
             <Route 
                exact 
                path={`${match.path}`} 
                render={props => (
                    <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
                    )}
            />
             <Route 
                path={`${match.path}/:collectionId`} 
                render={props => (
                    <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                )}
            />
            </div>
        );
    }
} 

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(ShopPage);