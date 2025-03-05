import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./orderPlacedHero.css";
import { getPreviousOrderDetails } from "../../../../../../../Services/apiCalls";

function OrderPlacedHero() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.id;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await getPreviousOrderDetails(orderId);
        console.log(response.data, "response");

        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  const getStatusStep = (status) => {
    const steps = {
      "Place order": 0,
      "Submit requirements": 1,
      "Writing in progress": 2,
      Delivered: 3,
    };
    return steps[status] || 0;
  };

  const handleBack = () => {
    navigate("/previousOrders");
  };

  return (
    <div className="OrderPlacedHeroContiner_sub_new">
      <div className="continer_main_box">
        <div className="container">
          <div className="OrderPlacedHeroContiner_sub">
            <div className="btn_add_new">
              <button className="hero_back_btn_ordeer" onClick={handleBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_220_20547)">
                    <path
                      d="M19 12.5H5"
                      stroke="#0D5438"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 18.5L5 12.5"
                      stroke="#0D5438"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 6.5L5 12.5"
                      stroke="#0D5438"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_220_20547">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(-1 0 0 1 24 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                Back
              </button>
            </div>

            <div className="OrderPlacedHeroContiner_sub_two">
              <p className="OrderPlacedHeroContiner_sub_two_topic">
                order status #{orderDetails?.order_id || "000"}
              </p>
              <div className="OrderPlacedHeroContiner_sub_two_status_continer">
                <div className="OrderPlacedHeroContiner_sub_two_status">
                  {[0, 1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_40000010_8599)">
                            <path
                              d="M14.167 2.78357C15.4239 3.50928 16.4694 4.55067 17.2002 5.80465C17.9309 7.05863 18.3215 8.48171 18.3332 9.93302C18.3449 11.3843 17.9774 12.8135 17.267 14.0792C16.5566 15.3448 15.528 16.4029 14.283 17.1488C13.038 17.8948 11.6198 18.3026 10.1687 18.332C8.71768 18.3613 7.28412 18.0112 6.00995 17.3163C4.73579 16.6213 3.66522 15.6057 2.90421 14.3698C2.14321 13.134 1.71817 11.7208 1.67116 10.2702L1.66699 10.0002L1.67116 9.73024C1.71783 8.29106 2.13662 6.88854 2.88669 5.6594C3.63677 4.43026 4.69254 3.41645 5.95107 2.7168C7.2096 2.01716 8.62795 1.65557 10.0678 1.66727C11.5077 1.67897 12.92 2.06357 14.167 2.78357ZM13.0895 7.7444C12.946 7.60092 12.7551 7.51473 12.5526 7.502C12.35 7.48926 12.1498 7.55086 11.9895 7.67524L11.9112 7.7444L9.16699 10.4877L8.08949 9.41107L8.01116 9.3419C7.85081 9.21762 7.65064 9.15609 7.44816 9.16886C7.24569 9.18164 7.05483 9.26783 6.91138 9.41129C6.76792 9.55474 6.68173 9.7456 6.66895 9.94807C6.65618 10.1505 6.71771 10.3507 6.84199 10.5111L6.91116 10.5894L8.57783 12.2561L8.65616 12.3252C8.8023 12.4386 8.98202 12.5002 9.16699 12.5002C9.35197 12.5002 9.53168 12.4386 9.67783 12.3252L9.75616 12.2561L13.0895 8.92274L13.1587 8.8444C13.283 8.68407 13.3446 8.48386 13.3319 8.28133C13.3192 8.07881 13.233 7.8879 13.0895 7.7444Z"
                              fill={
                                step <= getStatusStep(orderDetails?.status)
                                  ? "#3FAE0C"
                                  : "#9AB2A8"
                              }
                            />
                          </g>
                        </svg>
                      </div>
                      {step < 3 && <div className="order_line"></div>}
                    </React.Fragment>
                  ))}
                </div>
                <div className="OrderPlacedHeroContiner_sub_two_status_title_con">
                  <p className="OrderPlacedHeroContiner_sub_two_status_title">
                    Order placed
                  </p>
                  <p className="OrderPlacedHeroContiner_sub_two_status_title">
                    Submit requirements
                  </p>
                  <p className="OrderPlacedHeroContiner_sub_two_status_title">
                    Writing in progress
                  </p>
                  <p className="OrderPlacedHeroContiner_sub_two_status_title">
                    Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPlacedHero;
