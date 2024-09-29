import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Checkout.module.css";
import { POST } from "../../utils/email";

const Checkout = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    paymentType: "",
    comment: "",
    callback: true,
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(POST(values));
   
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.title}>Your order</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="tel"
            placeholder="333-444-5555"
            name="phone"
            value={values.phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="text"
            placeholder="Your city"
            name="city"
            value={values.city}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="text"
            placeholder="Your address"
            name="address"
            value={values.address}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <textarea
            type="text"
            placeholder="Comment"
            name="comment"
            value={values.comment}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}></div>

        <div className={styles.action}>
        <button type="submit" className={styles.submit}>
          Create an order
        </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
