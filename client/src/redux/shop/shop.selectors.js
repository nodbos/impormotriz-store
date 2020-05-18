import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectProducts = createSelector(
    [selectShop],
    shop => shop.products
);

export const selectPosts = createSelector(
    [selectShop],
    shop => shop.posts
);

export const selectProductExtras = createSelector(
    [selectProducts],
    products =>
        products
            ? Object.keys(products).map(key => {
                  const {
                      id,
                      imageUrl,
                      linkUrl,
                      size,
                      title,
                  } = products[key];
                  return { id, imageUrl, linkUrl, size, title };
              })
            : []
);

export const selectPostExtras = createSelector([selectPosts], posts =>
    posts
        ? Object.keys(posts).map(key => {
              const {
                  imageUrl,
                  linkUrl,
                  description,
                  content,
                  title,
              } = posts[key];
              return {
                  imageUrl,
                  linkUrl,
                  description,
                  content,
                  title,
              };
          })
        : []
);

export const selectProductsForPreview = createSelector(
    [selectProducts],
    products =>
        products
            ? Object.keys(products).map(key => products[key])
            : []
);

export const selectProduct = productUrlParam =>
    createSelector([selectProducts], products =>
        products ? products[productUrlParam] : null
    );

export const selectIsProductsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsProductsLoaded = createSelector(
    [selectShop],
    shop => !!shop.products
);
