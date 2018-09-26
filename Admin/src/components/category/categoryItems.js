import React, { Component } from 'react';
class CategoryItems extends Component {
    render() {
        debugger;
        var { category, index } = this.props;
        return (
            <tr>
                <td>{category.Date}</td>
                <td>{category.Type}</td>
                <td>{category.Description}</td>
                <td className="process">Processed</td>
                <td>{category.Price}</td>
                <td>
                    <button className="btn btn-sm btn-primary" ><i className="fas fa-pencil-alt"></i></button>
                    <button className="btn  btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                </td>
            </tr>
        );
    }
}

export default CategoryItems;
