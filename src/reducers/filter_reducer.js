import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = []
    if (sort === 'price-lowest') {
      tempProducts = filtered_products.sort((a, b) => {
      
        return a.price - b.price
      })
    }
    if (sort === 'price-highest') {
      tempProducts = filtered_products.sort((a, b) => {
     
        return b.price - a.price
      })
    }
    if (sort === 'name-a') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
    }
    if (sort === 'name-z') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.title.localeCompare(a.title)
      })
    }

    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { title, value } = action.payload
    return { ...state, filters: { ...state.filters, [title]: value } }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { title, category,  price} = state.filters
    let tempProducts = [...all_products]
    if (title) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(title)
      )
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }
   
    tempProducts = tempProducts.filter((product) => product.price <= price)
    // filter by shipping
    // if (shipping) {
    //   tempProducts = tempProducts.filter((product) => product.shipping === true)
    // }
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        title: '',
        
        category: 'all',
      
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
