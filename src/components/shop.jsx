import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {API_KEY, API_URL} from '../config';
import Preloader from './preloader';
import GoodsList from './goods-list';
import {setGoods, setLoading} from '../store/action';
import {connect} from 'react-redux';


const Shop = ({setQuantity, loadGoods, goods, loading, setLoading}) => {

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        }).then(response => response.json())
            .then(data => {
                data.shop && loadGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <Router>
            <main className="App-header container content">
                <Switch>
                    <Route path="/" exact>
                        {loading ?
                        <Preloader /> :
                        <GoodsList goods={goods} />
                        }
                    </Route>
                </Switch>
            </main>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    goods: state.goods,
    loading: state.loading,
  });
  
const mapDispatchToProps = (dispatch) => ({
    loadGoods: (goods) => dispatch(setGoods(goods)),
    setLoading: (status) => dispatch(setLoading(status)),
});

export {Shop};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
