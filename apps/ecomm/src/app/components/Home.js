import CancelIcon from '@material-ui/icons/Cancel';
import SupportIcon from '@material-ui/icons/ContactSupport';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import ReturnIcon from '@material-ui/icons/MonetizationOn';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const styles = {
    largeIcon: {
      width: 30,
      height: 30,
      marginRight: 3,
    },
  };

  const [htmlContent, setHtmlContent] = useState('');

  const handleInputChange = (event) => {
    setHtmlContent(event.target.value);
  };

  return (
    <section>
      <div className="landing-box">
        <div>
          <h1>
            Everything you need. Delivered right to your door. We ship you
            happiness.
          </h1>
          <p>We are India's fastest growing Ecommerce Store.</p>
          <Link to="/products">Shop Now</Link>
        </div>

        <img src="../../assets/images/bg.png" alt="landing-pic" />
      </div>

      <div className="features">
        <div className="features-card">
          <p className="features-head">
            <ShippingIcon style={styles.largeIcon} /> Free Home Delivery
          </p>
          <p className="features-para">
            No shipping Charges on Orders above &#8377; 500.
          </p>
        </div>

        <div className="features-card">
          <p className="features-head">
            <CancelIcon style={styles.largeIcon} /> Easy Cancellation
          </p>
          <p className="features-para">Cancel anytime as per your needs.</p>
        </div>

        <div className="features-card">
          <p className="features-head">
            <ReturnIcon style={styles.largeIcon} /> Easy Return &amp; Refund
          </p>
          <p className="features-para">
            We offer 30 days return and refund policy.
          </p>
        </div>

        <div className="features-card">
          <p className="features-head">
            <SupportIcon style={styles.largeIcon} /> 24x7 Customer Care
          </p>
          <p className="features-para">
            We provide 24*7 Customer Care support for feedbacks, suggestions and
            complaints.
          </p>
        </div>
      </div>
      <div className="html-preview">
        <h1>Design your own print on product below</h1>
        <div>
          <textarea
            value={htmlContent}
            onChange={handleInputChange}
            placeholder="Enter HTML text here to see live design preview on product"
            rows="10"
            cols="50"
          />
          <h2 className="preview-below">Design Preview Below</h2>
          <div
            className="rendered-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(htmlContent, {
                RETURN_TRUSTED_TYPE: true,
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
}
