import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        ...Loading
      </h5>
    )
  }

  if (grid_view === false) {
    return null
  }
  return <GridView products={products} />
}

export default ProductList
