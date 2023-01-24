import React from "react";
import styled from "styled-components";
import idea from "../assets/Images/idea.png";
export default function Footer() {
  return (
    <Container>
      <footer id="qodef-page-footer" role="contentinfo">
        <div id="qodef-page-footer-top-area">
          <div
            id="qodef-page-footer-top-area-inner"
            class="qodef-content-full-width"
          >
            <div class="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--1 qodef-alignment--center">
              <div class="qodef-grid-inner clear">
                <div class="qodef-grid-item">
                  <div
                    id="artorias_core_single_image-4"
                    class="widget widget_artorias_core_single_image"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <div class="qodef-shortcode qodef-m  qodef-single-image qodef-layout--default  qodef--retina   ">
                      {" "}
                      <div class="qodef-m-image">
                        {" "}
                        <a
                          itemprop="url"
                          href="https://artorias.qodeinteractive.com/"
                          target="_self"
                        >
                          {" "}
                          <img
                            itemprop="image"
                            src={idea}
                            width="156"
                            height="110"
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    id="artorias_core_separator-2"
                    class="widget widget_artorias_core_separator"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <div class="qodef-shortcode qodef-m  qodef-separator clear qodef-position--center ">
                      {" "}
                      <div class="qodef-m-line"></div>
                    </div>
                  </div>
                  <div
                    id="nav_menu-2"
                    class="widget widget_nav_menu"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <div class="menu-footer-menu-container">
                      <ul id="menu-footer-menu" class="menu">
                        <li
                          id="menu-item-3147"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3147"
                        >
                          <a href="https://artorias.qodeinteractive.com/">
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-3148"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148"
                        >
                          <a href="https://artorias.qodeinteractive.com/about-me/">
                            About
                          </a>
                        </li>
                        <li
                          id="menu-item-3149"
                          class="menu-item menu-item-type-post_type menu-item-object-esports-team menu-item-3149"
                        >
                          <a href="https://artorias.qodeinteractive.com/esports-team/frosters/">
                            Tokenomics
                          </a>
                        </li>
                        <li
                          id="menu-item-3150"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                        >
                          <a href="https://artorias.qodeinteractive.com/portfolio-standard/">
                            Learnings
                          </a>
                        </li>
                        <li
                          id="menu-item-3151"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3151"
                        >
                          <a href="https://artorias.qodeinteractive.com/blog/right-sidebar/">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-2"
                    class="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div class="qodef-svg-icon-widget">
                      <a href="https://www.twitch.tv/" target="_blank">
                        <div class="qodef-m-holder">
                          <div class="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M391.2 103.5h-38.6v109.7h38.6V103.5zM285 103h-38.6v109.8H285V103zM120.8 0 24.3 91.4v329.2h115.8V512l96.5-91.4h77.2L487.7 256V0H120.8zm328.3 237.8-77.2 73.1h-77.2l-67.6 64v-64h-86.9V36.6h308.9v201.2z"></path>
                            </svg>{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-3"
                    class="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div class="qodef-svg-icon-widget">
                      <a
                        href="https://twitter.com/qodeinteractive"
                        target="_blank"
                      >
                        <div class="qodef-m-holder">
                          <div class="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 23 19"
                            >
                              <path d="M23 2.3c-.9.4-1.8.6-2.7.8 1-.6 1.7-1.5 2.1-2.6-.9.6-1.9.9-3 1.1-1.8-1.9-4.8-2-6.7-.2-1 .9-1.5 2.2-1.5 3.5 0 .4 0 .7.1 1.1C7.5 5.7 4 3.9 1.6 1 .3 3.1 1 5.9 3.1 7.3c-.7 0-1.5-.2-2.1-.6v.1c0 2.3 1.6 4.2 3.8 4.7-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.5 1.8 2.3 3.2 4.3 3.2-1.7 1.3-3.7 2-5.8 2-.4 0-.8 0-1.1-.1 2.2 1.4 4.7 2.1 7.2 2.1 8.7 0 13.4-7.2 13.4-13.5v-.6c.9-.6 1.7-1.4 2.3-2.4z"></path>
                            </svg>{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-4"
                    class="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div class="qodef-svg-icon-widget">
                      <a
                        href="https://www.youtube.com/QodeInteractiveVideos"
                        target="_blank"
                      >
                        <div class="qodef-m-holder">
                          <div class="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 28 21"
                            >
                              <path d="M27.7 4.7c0-2.4-1.8-4.4-4-4.4-3-.1-6-.2-9.2-.2h-1c-3.1 0-6.2.1-9.2.2-2.2 0-4 2-4 4.4C.2 6.6.1 8.5.1 10.5c0 1.9.1 3.8.2 5.8 0 2.4 1.8 4.4 4 4.4 3.1.1 6.4.2 9.6.2 3.3 0 6.5-.1 9.6-.2 2.2 0 4-2 4-4.4.1-1.9.2-3.9.2-5.8.2-1.9.1-3.8 0-5.8zM11.4 15.8V5.2l7.8 5.3-7.8 5.3z"></path>
                            </svg>{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-5"
                    class="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div class="qodef-svg-icon-widget">
                      <a
                        href="https://www.facebook.com/QodeInteractive/"
                        target="_blank"
                      >
                        <div class="qodef-m-holder">
                          <div class="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 19 19"
                            >
                              <path d="M16.743,0.6H2.306A1.97,1.97,0,0,0,.337,2.569V17.006a1.97,1.97,0,0,0,1.969,1.969H7.935V12.728H5.351V9.787H7.935V7.546a3.589,3.589,0,0,1,3.842-3.957,15.654,15.654,0,0,1,2.277.2v2.5H12.772a1.47,1.47,0,0,0-1.658,1.589V9.787h2.821l-0.451,2.94h-2.37v6.247h5.629a1.97,1.97,0,0,0,1.969-1.969V2.569A1.97,1.97,0,0,0,16.743.6Z"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="block-18"
                    class="widget widget_block"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <p>
                      © 2022{" "}
                      <a
                        class="qodef--change-color"
                        href="https://qodeinteractive.com/"
                        data-type="URL"
                        data-id="https://qodeinteractive.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        PLEARN
                      </a>
                      , All Rights Reserved
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: top;
  #qodef-page-footer-top-area {
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: top;
    #qodef-page-footer-top-area-inner {
      margin: 0px 60px 60px 60px;
      --footer-margin-responsive: 0 7% 7%;
      border-width: 1px;
      border-style: solid;
      border: 0 solid white;
      padding-bottom: 28px;
      padding-top: 122px;
      .qodef-grid {
        position: relative;
        display: inline-block;
        width: 100%;
        border: 1px solid white;
        text-align: center;
        vertical-align: top;
        .qodef-grid-inner {
          margin: 0 -15px;
          .qodef-grid-item {
            width: 100%;
            padding: 0 15px;
            position: relative;
            display: inline-block;
            vertical-align: top;
            min-height: 1px;
            float: left;
            .widget {
              margin: 0 0 58px;
              color: #ccc;
              a {
                color: white;
                text-decoration: none;
                transition: transform 0.2s ease-out;
                cursor: pointer;
              }
              a:hover {
                text-decoration: underline;
              }
              img {
                margin-right: auto;
                margin-left: auto;
              }
              .qodef-single-image img {
                margin: 0 auto;
              }
            }
          }
        }
        .qodef-position--center {
          text-align: center;
          font-size: 0;
          height: auto;
          line-height: 1;
          position: relative;
          .qodef-m-line {
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: top;
            margin: 10px 0;
          }
        }
        .widget_nav_menu ul {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 56px;
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            font-family: "Space Mono", sans-serif;
            font-size: 17px;
            line-height: 1.58824em;
            font-weight: 400;
            letter-spacing: normal;
            text-transform: uppercase;
            a {
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              font-size: 17px;
              line-height: 1.41176em;
            }
          }
        }
      }
      .widget_artorias_core_svg_icon {
        display: inline-block;
        vertical-align: top;
        margin: 0 !important;
        fill: white;
        padding: 0.5rem;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: white;
          width: 24px;
          transition: color 0.2s ease-out;
          cursor: pointer;
          .qodef-m-holder {
            display: flex;
            align-items: center;
            .qodef-m-icon {
              margin: 0px 24px 0px 0px;

              width: 22px;
              height: 24px;
              border-radius: 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              max-height: 100%;
              overflow: hidden;
              transition: transform 0.3s ease, all 0.2s ease-out;
              svg {
                display: block;
                fill: white;
                stroke: transparent;
                max-width: 100%;
                max-height: 100%;
                width: 22px;
                height: 24px;
                transition: all 0.2s ease-out;
                transform: translateY(0);
              }
            }
          }
        }
      }
    }
  }
  #artorias_core_single_image-4 {
    margin-top: 90px !important;
  }
  .widget p {
    margin-top: 58px;
    color: #ccc;
  }
`;
