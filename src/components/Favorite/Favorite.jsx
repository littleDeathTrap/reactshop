import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFavorite } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import styles from "../../styles/Favourites.module.css";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector(({ user }) => user);
  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id));
  };

  return (
    <section className={styles.favourites}>
      <h2 className={styles.title}>Your favorite</h2>

      {!favorite.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favorite.map((item) => {
              const { title, category, images, price, id } = item;

              return (
               
                <div className={styles.item} key={id}>
                
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${images[0]})` }}
                    />
                 
                  <Link to={`/products/${id}`} key={title}>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{title}</h3>
                      <div className={styles.category}>{category.name}</div>
                    </div>
                  </Link>
                  <div className={styles.price}>{price}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorite;
