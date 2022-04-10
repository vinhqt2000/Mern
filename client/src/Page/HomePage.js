import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://wwwextendaretail.cdn.triggerfish.cloud/uploads/2019/04/fresh_food_transparency_header.jpg"
                      alt="First slide"
                      width={200}
                      height={400}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://wwwextendaretail.cdn.triggerfish.cloud/uploads/2019/03/fresh-food-management-header_w1000.jpg"
                      alt="Second slide"
                      width={200}
                      height={400}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://media.glamour.com/photos/61bcb8f968c608fa532e0bbc/master/pass/healthy%20food%20delivery.jpg"
                      alt="Third slide"
                      width={200}
                      height={400}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <div className="card-header bg-primary text-white text-uppercase">
              <i className="fa fa-star"></i> Last products
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/600x400/55595c/fff"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="product.html" title="View Product">
                          Product title
                        </a>
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="row">
                        <div className="col">
                          <p className="btn btn-danger btn-block">99.00 $</p>
                        </div>
                        <div className="col">
                          <a
                            href="cart.html"
                            className="btn btn-success btn-block"
                          >
                            Đặt hàng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/600x400/55595c/fff"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="product.html" title="View Product">
                          Product title
                        </a>
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content
                      </p>
                      <div className="row">
                        <div className="col">
                          <p className="btn btn-danger btn-block">99.00 $</p>
                        </div>
                        <div className="col">
                          <a
                            href="cart.html"
                            className="btn btn-success btn-block"
                          >
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/600x400/55595c/fff"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="product.html" title="View Product">
                          Product title
                        </a>
                      </h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="row">
                        <div className="col">
                          <p className="btn btn-danger btn-block">99.00 $</p>
                        </div>
                        <div className="col">
                          <a
                            href="cart.html"
                            className="btn btn-success btn-block"
                          >
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
