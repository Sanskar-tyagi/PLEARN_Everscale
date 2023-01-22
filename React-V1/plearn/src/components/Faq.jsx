import React, { useState } from "react";
import styled from "styled-components";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      {" "}
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-41fed7b elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
        data-id="41fed7b"
        data-element_type="section"
      >
        <div class="elementor-container elementor-column-gap-default">
          <div
            class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-04e254d"
            data-id="04e254d"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-5560ddc elementor-widget elementor-widget-artorias_core_accordion"
                data-id="5560ddc"
                data-element_type="widget"
                data-widget_type="artorias_core_accordion.default"
              >
                <div class="elementor-widget-container">
                  <div
                    class="qodef-shortcode qodef-m qodef-accordion clear qodef-behavior--accordion qodef-layout--simple ui-accordion ui-widget ui-helper-reset qodef--init"
                    role="tablist"
                  >
                    <h4
                      class="qodef-accordion-title ui-accordion-header ui-corner-top ui-state-default ui-accordion-header-collapsed ui-corner-all"
                      role="tab"
                      onClick={handleClick}
                      tabindex="0"
                    >
                      <span class="qodef-tab-title">
                        How many can we mint per wallet?
                      </span>
                      <span class="qodef-accordion-mark">
                        <svg
                          class="qodef-svg--accordion-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="26"
                          height="20.35"
                          viewBox="0 0 26 20.35"
                        >
                          <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
                        </svg>{" "}
                      </span>
                    </h4>
                    <div
                      class="qodef-accordion-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                      id="ui-id-2"
                      aria-labelledby="ui-id-1"
                      role="tabpanel"
                      aria-hidden="true"
                    >
                      <div
                        class={`qodef-accordion-content-inner ${
                          isOpen === true ? "" : "open"
                        }`}
                        style={{
                          display: `${isOpen === true ? "none" : ""}`,
                        }}
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos.
                        </p>{" "}
                      </div>
                    </div>
                    <h4
                      class="qodef-accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default"
                      role="tab"
                      id="ui-id-3"
                      aria-controls="ui-id-4"
                      aria-selected="false"
                      aria-expanded="false"
                      tabindex="-1"
                    >
                      <span class="qodef-tab-title">
                        How can i get my TARNISHED WARRIOR?
                      </span>
                      <span class="qodef-accordion-mark">
                        <svg
                          class="qodef-svg--accordion-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="26"
                          height="20.35"
                          viewBox="0 0 26 20.35"
                        >
                          <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
                        </svg>{" "}
                      </span>
                    </h4>
                    <div
                      class="qodef-accordion-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                      id="ui-id-4"
                      aria-labelledby="ui-id-3"
                      role="tabpanel"
                      aria-hidden="true"
                    >
                      <div
                        class="qodef-accordion-content-inner"
                        style={{ display: "none" }}
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos.
                        </p>{" "}
                      </div>
                    </div>
                    <h4
                      class="qodef-accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default"
                      role="tab"
                      id="ui-id-5"
                      aria-controls="ui-id-6"
                      aria-selected="false"
                      aria-expanded="false"
                      tabindex="-1"
                    >
                      <span class="qodef-tab-title">
                        How many can we mint per wallet?
                      </span>
                      <span class="qodef-accordion-mark">
                        <svg
                          class="qodef-svg--accordion-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="26"
                          height="20.35"
                          viewBox="0 0 26 20.35"
                        >
                          <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
                        </svg>{" "}
                      </span>
                    </h4>
                    <div
                      class="qodef-accordion-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                      id="ui-id-6"
                      aria-labelledby="ui-id-5"
                      role="tabpanel"
                      aria-hidden="true"
                    >
                      <div
                        class="qodef-accordion-content-inner"
                        style={{ display: "none" }}
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos.
                        </p>{" "}
                      </div>
                    </div>
                    <h4
                      class="qodef-accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default"
                      role="tab"
                      id="ui-id-7"
                      aria-controls="ui-id-8"
                      aria-selected="false"
                      aria-expanded="false"
                      tabindex="-1"
                    >
                      <span class="qodef-tab-title">
                        What is TARNISHED WARRIORS?
                      </span>
                      <span class="qodef-accordion-mark">
                        <svg
                          class="qodef-svg--accordion-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="26"
                          height="20.35"
                          viewBox="0 0 26 20.35"
                        >
                          <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
                        </svg>{" "}
                      </span>
                    </h4>
                    <div
                      class="qodef-accordion-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                      id="ui-id-8"
                      aria-labelledby="ui-id-7"
                      role="tabpanel"
                      aria-hidden="true"
                    >
                      <div
                        class="qodef-accordion-content-inner"
                        style={{ display: "none" }}
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos.
                        </p>{" "}
                      </div>
                    </div>
                    <h4
                      class="qodef-accordion-title ui-accordion-header ui-corner-top ui-accordion-header-collapsed ui-corner-all ui-state-default"
                      role="tab"
                      id="ui-id-9"
                      aria-controls="ui-id-10"
                      aria-selected="false"
                      aria-expanded="false"
                      tabindex="-1"
                    >
                      <span class="qodef-tab-title">
                        HOW MUCH FOR TARNISHED?
                      </span>
                      <span class="qodef-accordion-mark">
                        <svg
                          class="qodef-svg--accordion-arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="26"
                          height="20.35"
                          viewBox="0 0 26 20.35"
                        >
                          <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
                        </svg>{" "}
                      </span>
                    </h4>
                    <div
                      class="qodef-accordion-content ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content"
                      id="ui-id-10"
                      aria-labelledby="ui-id-9"
                      role="tabpanel"
                      aria-hidden="true"
                    >
                      <div
                        class="qodef-accordion-content-inner"
                        style={{ display: "none" }}
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos.
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c3ee48b"
            data-id="c3ee48b"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-89270d1 elementor-widget__width-auto elementor-widget elementor-widget-artorias_core_single_image"
                data-id="89270d1"
                data-element_type="widget"
                data-widget_type="artorias_core_single_image.default"
              >
                <div class="elementor-widget-container">
                  <div class="qodef-shortcode qodef-m  qodef-single-image qodef-layout--default     ">
                    <div class="qodef-m-image">
                      <img
                        width="505"
                        height="503"
                        src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-10.jpg"
                        class="attachment-full size-full"
                        alt="d"
                        decoding="async"
                        loading="lazy"
                        srcset="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-10.jpg 505w, https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-10-100x100.jpg 100w, https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-10-300x300.jpg 300w, https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/nft-home-img-10-150x150.jpg 150w"
                        sizes="(max-width: 505px) 100vw, 505px"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .elementor-element {
    padding: 0 0 20px;
    .elementor-container {
      width: 1400px;
      max-width: 1400px;
      margin: 0 auto;
      padding-top: 5%;
      display: flex;
      position: relative;
      .elementor-widget-wrap {
        position: relative;
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        padding: 0;
        align-content: flex-end;
        .elementor-element {
          width: 100%;
          .qodef-accordion {
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: top;
            visibility: visible;
            overflow-anchor: none;
            .qodef-accordion:before {
              content: "";
              display: table;
              table-layout: fixed;
            }
            h4 {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 2px 0 0;
              padding: 14px 0 15px 0;
              border-bottom: 1px solid white;
              cursor: pointer;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              font-size: 25px;
              line-height: 1.44em;
              word-wrap: break-word;
            }
            .qodef-accordion-mark {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              transition: transform 0.4s cubic-bezier(0.39, 0.1, 0, 0.98);
              fill: white;
            }
          }
          .qodef-accordion-content {
            margin: 0;
            max-width: 70ch;
            .qodef-accordion-content-inner {
              position: relative;
              display: inline-block;
              width: 100%;
              vertical-align: top;
              overflow: hidden;
            }
          }
        }
      }
      .qodef-m-image {
        display: flex;
        justify-content: flex-end;
      }
      @media (min-width: 768px) {
        .elementor-col-5 {
          width: 57%;
          padding-left: 50px;
          padding-right: 50px;
        }
      }
      @media (min-width: 768px) {
        .elementor-col-50 {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 1204px) {
    .elementor-container {
      width: 86%;
      flex-wrap: wrap;
    }
  }
  @media only screen and (max-width: 1200px) {
    .elementor-container {
      width: 960px;
    }
  }
  .open {
    padding: 14px 0 15px 0;
  }
`;
