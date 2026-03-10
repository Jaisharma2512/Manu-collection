import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient.js'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching products:', error)
    } else {
      setProducts(data || [])
    }
    setLoading(false)
  }

  if (loading) return <p>Products load ho rahe hain...</p>

  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img 
            src={`https://pmbufhwkrkpibdvhcjhj.supabase.co/storage/v1/object/public/product-images/${product.image_url}`} 
            alt={product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <h3>{product.name}</h3>
          {/* FIXED: No price if null/0 */}
          {product.price ? (
            <p>₹{product.price}</p>
          ) : (
            <p>Price on Request</p>
          )}
          <a href="https://wa.me/9412667937" target="_blank" rel="noopener noreferrer" className="button">
            Take quotation
          </a>
        </div>
      ))}
    </div>
  )
}
