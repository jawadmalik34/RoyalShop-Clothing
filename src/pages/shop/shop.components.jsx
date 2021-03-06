import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
//import { fetchCollectionsStart } from '../../redux/shop/shop.sagas';
import { FetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

class ShopPage extends React.Component {
    componentDidMount() {
        const { FetchCollectionStartAsync } = this.props;
        FetchCollectionStartAsync();
    }
    render() {
        const { match } = this.props; 
        return(
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
               <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    FetchCollectionStartAsync: () => dispatch(FetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);