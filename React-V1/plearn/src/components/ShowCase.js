import React from "react";
import a1 from "../assets/Images/NFTS/nft (32).jpg";
import a2 from "../assets/Images/NFTS/nft (33).jpg";
import a3 from "../assets/Images/NFTS/nft (34).jpg";
import a4 from "../assets/Images/NFTS/nft (35).jpg";
export default function ShowCase() {
  const eth =
    "https://nftly-theme.pxsquad.com/demo1/wp-content/themes/nftly/assets/images/crypto/ETH.png";
  return (
    <div>
      <section className="section-item bg-black pb-20">
        <div className="container">
          <div className="section__head mts">
            <h2 className="section__header-title">
              The best NFT’s at your glance, explore more than 1000k colections
              right away{" "}
            </h2>
            <div class="body">
              <button class="btn btn-hover">
                <span class="btn-text">Shop Now!</span>
              </button>
            </div>
          </div>
          <div className="section__content">
            <div className="marketplace__items">
              <div className="marketplace__item ">
                <div className="marketplace__image">
                  <img
                    width="378"
                    height="390"
                    src={a1}
                    className="imgT"
                    alt=""
                  />{" "}
                </div>
                <div className="marketplace__meta">
                  <div className="marketplace__meta-item">
                    <div className="marketplace__meta-author">
                      <h3 className="marketplace__meta-title">
                        <a href="index.html" className="">
                          CASA BLANCA
                        </a>
                      </h3>{" "}
                    </div>
                  </div>
                </div>
                <div className="marketplace_go-to">
                  <div className="marketplace__favs">
                    <div className="marketplace__additional-first">
                      <img src={eth} alt="marketplace-icon" />
                      <div>4,322 ETH </div>
                    </div>
                  </div>
                  <div className="marketplace__additional">
                    <div>
                      <a className="btn btn--hypercolor" href="index.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>BUY NFT{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marketplace__item animated-box ">
                <div className="marketplace__image">
                  <img
                    width="378"
                    height="390"
                    src={a2}
                    className="imgT"
                    alt=""
                  />{" "}
                </div>
                <div className="marketplace__meta">
                  <div className="marketplace__meta-item">
                    <div className="marketplace__meta-author">
                      <h3 className="marketplace__meta-title">
                        <a href="index.html" className="">
                          TAJ MAHAL
                        </a>
                      </h3>{" "}
                    </div>
                  </div>
                </div>
                <div className="marketplace_go-to">
                  <div className="marketplace__favs">
                    <div className="marketplace__additional-first">
                      <img src={eth} alt="marketplace-icon" />
                      <div>1,502 ETH </div>
                    </div>
                  </div>
                  <div className="marketplace__additional">
                    <div>
                      <a className="btn btn--hypercolor" href="index.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>BUY NFT{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marketplace__item">
                <div className="marketplace__image">
                  <img
                    width="378"
                    height="390"
                    src={a3}
                    className="imgT"
                    alt=""
                  />{" "}
                </div>
                <div className="marketplace__meta">
                  <div className="marketplace__meta-item">
                    <div className="marketplace__meta-author">
                      <h3 className="marketplace__meta-title">
                        <a href="index.html" className="">
                          ORANGE OASIS
                        </a>
                      </h3>{" "}
                    </div>
                  </div>
                </div>
                <div className="marketplace_go-to">
                  <div className="marketplace__favs">
                    <div className="marketplace__additional-first">
                      <img src={eth} alt="marketplace-icon" />
                      <div>14,523 ETH </div>
                    </div>
                  </div>
                  <div className="marketplace__additional">
                    <div>
                      <a className="btn btn--hypercolor" href="index.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>BUY NFT{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marketplace__item ">
                <div className="marketplace__image">
                  <img
                    width="378"
                    height="390"
                    src={a4}
                    className="imgT"
                    alt=""
                  />{" "}
                </div>
                <div className="marketplace__meta">
                  <div className="marketplace__meta-item">
                    <div className="marketplace__meta-author">
                      <h3 className="marketplace__meta-title">
                        <a href="index.html" className="">
                          BEIGE BAY
                        </a>
                      </h3>{" "}
                    </div>
                  </div>
                </div>
                <div className="marketplace_go-to">
                  <div className="marketplace__favs">
                    <div className="marketplace__additional-first">
                      <img src={eth} alt="marketplace-icon" />
                      <div>1,445 ETH </div>
                    </div>
                  </div>
                  <div className="marketplace__additional">
                    <div>
                      <a className="btn btn--hypercolor" href="index.html">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>BUY NFT{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
