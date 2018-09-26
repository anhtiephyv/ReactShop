import React, { Component } from 'react';
import CategotyItems from './categoryItems';
import { connect } from 'react-redux';
class CategoryList extends Component {
    render() {
        var {categories} = this.props;
        return (
            <div>
                {/* MAIN CONTENT*/}

                <div className="main-content">

                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="title-5 m-b-35">Cú test</h3>
                                    <div className="table-data__tool">
                                        <div className="table-data__tool-left">
                                            <div className="rs-select2--light rs-select2--md">
                                                <select className="js-select2" name="property">
                                                    <option >All Properties</option>
                                                    <option value="">Option 1</option>
                                                    <option value="">Option 2</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                            <div className="rs-select2--light rs-select2--sm">
                                                <select className="js-select2" name="time">
                                                    <option >Today</option>
                                                    <option value="">3 Days</option>
                                                    <option value="">1 Week</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                            <button className="au-btn-filter">
                                                <i className="zmdi zmdi-filter-list"></i>filters</button>
                                        </div>
                                        <div className="table-data__tool-right">
                                            <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                                                <i className="zmdi zmdi-plus"></i>Thêm mới</button>
                                            <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                                <select className="js-select2" name="type">
                                                    <option >Export</option>
                                                    <option value="">Option 1</option>
                                                    <option value="">Option 2</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-t-30">
                                <div className="col-md-12">
                                    {/* DATA TABLE*/}
                                    <div className="table-responsive table--no-card m-b-30">

                                        <table className="table table-borderless table-striped table-earning">
                                            <thead>
                                                <tr>
                                                    <th>date</th>
                                                    <th>type</th>
                                                    <th>description</th>
                                                    <th>status</th>
                                                    <th>price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.showcategory(categories)}
                                               
                                            </tbody>
                                        </table>
                                </div>
                                {/* END DATA TABLE*/}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
                {/* END MAIN CONTENT*/ }
            </div >
        );
    }
    // write function here
    showcategory(categories) {
        debugger;
        var result = null;
        if (categories.length > 0) {
            debugger;
            result = categories.map((category, index) => {
                debugger;
                return (
                    <CategotyItems
                        key={index}
                        category={category}
                        index={index}
                    ></CategotyItems>
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps, null)(CategoryList);
