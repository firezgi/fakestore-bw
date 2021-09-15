import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  } from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "name-a",
  filters: {
    text: ""
  },
};

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })}, [state.sort, state.filters])
  // functions
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        updateSort
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
