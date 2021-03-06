import React, { Component } from 'react';
class App extends Component {
  render() {
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
                        <i className="zmdi zmdi-plus"></i>add item</button>
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
                        <tr>
                          <td>2018-09-29 05:57</td>
                          <td>Mobile</td>
                          <td>iPhone X 64Gb Grey</td>
                          <td className="process">Processed</td>
                          <td>$999.00</td>
                          <td>
                            <button className="btn btn-sm btn-primary" ><i className="fas fa-pencil-alt"></i></button>
                            <button className="btn  btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>2018-09-28 01:22</td>
                          <td>Mobile</td>
                          <td>Samsung S8 Black </td>
                          <td className="process">Processed</td>
                          <td>$756.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-27 02:12</td>
                          <td>Game</td>
                          <td>Game Console Controller</td>
                          <td className="denied">Denied</td>
                          <td>$22.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-26 23:06</td>
                          <td>Mobile</td>
                          <td>iPhone X 256Gb Black</td>
                          <td className="denied">Denied</td>
                          <td>$1199.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-25 19:03</td>
                          <td>Accessories</td>
                          <td>USB 3.0 Cable</td>
                          <td className="process">Processed</td>
                          <td>$10.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-29 05:57</td>
                          <td>Accesories</td>
                          <td>Smartwatch 4.0 LTE Wifi</td>
                          <td className="denied">Denied</td>
                          <td>$199.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-24 19:10</td>
                          <td>Camera</td>
                          <td>Camera C430W 4k</td>
                          <td className="process">Processed</td>
                          <td>$699.00</td>
                        </tr>
                        <tr>
                          <td>2018-09-22 00:43</td>
                          <td>Computer</td>
                          <td>Macbook Pro Retina 2017</td>
                          <td className="process">Processed</td>
                          <td>$10.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* END DATA TABLE*/}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright">
                    <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* END MAIN CONTENT*/}
      </div>
    );
  }
}

export default App;
