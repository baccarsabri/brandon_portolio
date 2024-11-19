import React from 'react';
import './styles.scss';
import { Row, Col } from 'react-bootstrap';
import AnimationContainer from 'components/animation-container';
import BaffleText from 'components/baffle-text';
import Tilt from 'react-tilt';
import ThemeContext from '../../context';

// Importing all 18 images
import image1 from '../../../content/portfolio/item-1/image.jpg';
import image2 from '../../../content/portfolio/item-2/image.jpg';
import image3 from '../../../content/portfolio/item-3/image.jpg';
import image4 from '../../../content/portfolio/item-4/image.jpg';
import image5 from '../../../content/portfolio/item-5/image.jpg';
import image6 from '../../../content/portfolio/item-6/image.jpg';
import image7 from '../../../content/portfolio/item-7/image.jpg';
import image8 from '../../../content/portfolio/item-8/image.jpg';
import image9 from '../../../content/portfolio/item-9/image.jpg';
import image10 from '../../../content/portfolio/item-10/image.jpg';
import image11 from '../../../content/portfolio/item-11/image.jpg';
import image12 from '../../../content/portfolio/item-12/image.jpg';
import image13 from '../../../content/portfolio/item-13/image.jpg';
import image14 from '../../../content/portfolio/item-14/image.jpg';
import image15 from '../../../content/portfolio/item-15/image.jpg';
import image16 from '../../../content/portfolio/item-16/image.jpg';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      col: 4, // Fixed number of columns
      items: [
        { id: 1, title: 'Oomph Inc.', ProjectTitle: 'React.js', link: 'https://www.oomphinc.com/', category: 'React.js', image: image1 },
        { id: 2, title: 'FNL DST', ProjectTitle: 'React.js', link: 'https://fnldst.com/', category: 'React.js', image: image2 },
        { id: 3, title: 'ClubAfib', ProjectTitle: 'React.js', link: 'https://clubafib.com/', category: 'React.js', image: image3 },
        { id: 4, title: 'Adore Beauty', ProjectTitle: 'React.js', link: 'https://www.adorebeauty.com.au/', category: 'React.js', image: image4 },
        { id: 5, title: 'Third Love', ProjectTitle: 'React.js', link: 'https://www.thirdlove.com/', category: 'React.js', image: image5 },
        { id: 6, title: 'Wine Nook', ProjectTitle: 'Shopify', link: 'https://wine-nook.myshopify.com/', category: 'Shopify', image: image6 },
        { id: 7, title: 'Marine Situ', ProjectTitle: 'React.js', link: 'https://www.marinesitu.com/', category: 'React.js', image: image7 },
        { id: 8, title: 'Scene Up', ProjectTitle: 'React.js', link: 'https://sceneup.io/', category: 'React.js', image: image8 },
        { id: 9, title: 'Blue Wheel', ProjectTitle: 'React.js', link: 'https://www.bluewheelmedia.com/', category: 'React.js', image: image9 },
        { id: 10, title: 'Reason', ProjectTitle: 'React.js', link: 'https://reasonclothing.com/', category: 'React.js', image: image10 },
        { id: 11, title: 'Andar', ProjectTitle: 'React.js', link: 'https://www.andar.com/', category: 'Design', image: image11 },
        { id: 12, title: '3sixteen', ProjectTitle: 'Vue.js', link: 'https://www.3sixteen.com/', category: 'Mobile App', image: image12 },
        { id: 13, title: 'Wicked Clothes', ProjectTitle: 'React.js', link: 'https://www.wickedclothes.com/', category: 'Web Development', image: image13 },
        { id: 14, title: 'Mech Box', ProjectTitle: 'Shopify', link: 'https://mechbox.co.uk/', category: 'Design', image: image14 },
        { id: 15, title: 'White Market', ProjectTitle: 'Shopify', link: 'https://whitemarket.info/', category: 'Web Development', image: image15 },
        { id: 16, title: 'Vincero', ProjectTitle: 'Shopify', link: 'https://vincerocollective.com/', category: 'Mobile App', image: image16 },

      ],
      showPortfolio: false,
      currentPage: 1,
      itemsPerPage: 8, // Display 8 items per page
    };
    this.showPortfolio = this.showPortfolio.bind(this);
  }
  static contextType = ThemeContext;

  showPortfolio() {
    this.setState({ showPortfolio: true });
  }

  render() {
    const { items, currentPage, itemsPerPage } = this.state;

    const filteredItems = items.filter(
      (value) => value.category === this.state.category || !this.state.category
    );

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
      <section
        id={`${this.props.id}`}
        className="portfolio"
        style={{ minHeight: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Portfolio"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.showPortfolio}
                callMethodTime={1100}
              />
            </h2>
          </Col>
          <Col md={10} className="recent-works">
            <div className="portfolio_selector">
              <button
                className="portfolio_category"
                onClick={() => this.changeCategory(null)}
              >
                <span className={`${!this.state.category ? 'active' : ''}`}>
                  All
                </span>
              </button>
              {this.categories()}
            </div>

            <div className="content">
              <div className="portfolio_container">
                <Row>{this.renderItems(paginatedItems)}</Row>
              </div>
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={this.state.currentPage === i + 1 ? 'active' : ''}
                    onClick={() => this.handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </section>
    );
  }

  renderItems(items) {
    return items.map((value, index) => (
      <Col
        md={12 / this.state.col}
        sm={6}
        key={`${value.id}-${index}`}
        className="portfolio_item_col"
      >
        <div className="portfolio_item">
          <AnimationContainer delay={200} animation="fadeIn" key={index}>
            <img src={value.image} alt={value.title} style={{ width: '100%' }} />
            <Tilt className="Tilt" options={{ scale: 1, max: 50 }}>
              <a
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay"
              >
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="title">{value.ProjectTitle}</span>
                  </div>
                  <br />
                  <div style={{ textAlign: 'center' }}>
                    <span className="title">{value.title}</span>
                  </div>
                </div>
              </a>
            </Tilt>
          </AnimationContainer>
        </div>
      </Col>
    ));
  }

  changeCategory(category) {
    this.setState({
      category: category,
      currentPage: 1,
    });
  }

  categories() {
    const categories = [...new Set(this.state.items.map((item) => item.category))];
    return categories.map((value, index) => (
      <button
        className="portfolio_category"
        onClick={() => this.changeCategory(value)}
        key={index}
      >
        <span className={`${this.state.category === value ? 'active' : ''}`}>
          {value}
        </span>
      </button>
    ));
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }
}

export default Portfolio;
