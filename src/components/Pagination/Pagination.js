import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 8, // Set to 8 items per page
        };
    }

    handleClick = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        });
        this.props.onPageChange(pageNumber); // Notify parent of page change
    };

    render() {
        const { currentPage, itemsPerPage } = this.state;
        const { items } = this.props;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;

        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

        const totalPages = Math.ceil(items.length / itemsPerPage);
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            const isActive = currentPage === i;

            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => this.handleClick(i)}
                    className={isActive ? 'active' : ''}
                    aria-current={isActive ? 'page' : undefined}
                >
                    {i}
                </button>
            );
        }

        return (
            <div>
                <div className="content-area">
                    {currentItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="pagination">{pageNumbers}</div>
            </div>
        );
    }
}

export default Pagination;
