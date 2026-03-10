// src/components/Admin.jsx - FIXED: No ₹0 display
import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient.js'

export default function Admin() {
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // VINOD/VINOD LOGIN
  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'vinod' && password === 'vinod') {
      setShowLogin(false)
    } else {
      alert('❌ Galat username/password!')
    }
  }

  useEffect(() => {
    if (!showLogin) fetchProducts()
  }, [showLogin])

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*')
    if (!error) setProducts(data || [])
  }

  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Image upload
      const fileName = `crockery-${Date.now()}-${file.name}`
      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // Database entry - PRICE NULL if empty
      const productData = {
        name,
        image_url: fileName,
        price: price ? Number(price) : null  // ← FIXED: null instead of 0
      }

      const { error: dbError } = await supabase
        .from('products')
        .insert([productData])

      if (dbError) throw dbError

      setMessage('✅ Product add ho gaya!')
      setName('')
      setPrice('')
      setFile(null)
      fetchProducts()
    } catch (error) {
      setMessage('❌ Error: ' + error.message)
    }
    setLoading(false)
  }

  const deleteProduct = async (id) => {
    if (!confirm('Delete karega?')) return
    
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (!error) {
      fetchProducts()
      setMessage('🗑️ Product delete ho gaya!')
    }
  }

  // LOGIN SCREEN (NO HINT)
  if (showLogin) {
    return (
      <div style={{ 
        maxWidth: '400px', margin: '100px auto', 
        padding: '40px', background: 'white', 
        borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        textAlign: 'center'
      }}>
        <h1 style={{color: '#2563eb', marginBottom: '30px'}}>🔐 Admin Login</h1>
        <p style={{color: '#666', marginBottom: '20px'}}>Manu Collection Admin</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={loginInputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={loginInputStyle}
            required
          />
          <button type="submit" style={loginButtonStyle}>
            Login
          </button>
        </form>
      </div>
    )
  }

  // ADMIN DASHBOARD
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', marginBottom: '30px', 
        padding: '20px', background: '#3b82f6', 
        color: 'white', borderRadius: '12px' 
      }}>
        <h1 style={{margin: 0}}>🛍️ Manu Collection Admin</h1>
        <button onClick={() => setShowLogin(true)} style={logoutStyle}>
          Logout
        </button>
      </div>
      
      {/* Add Product Form */}
      <section style={{ 
        background: '#f8f9fa', padding: '30px', 
        borderRadius: '12px', marginBottom: '30px' 
      }}>
        <h2>➕ Naya Product Add Karo</h2>
        {message && <p style={{ 
          padding: '12px', borderRadius: '8px', 
          background: message.includes('✅') ? '#d4edda' : '#f8d7da',
          marginBottom: '20px'
        }}>{message}</p>}
        
        <form onSubmit={addProduct} style={{display: 'grid', gap: '15px'}}>
          <input
            type="text"
            placeholder="Product name * (Designer Suit)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="number"
            placeholder="Price (optional - papa ji chahiye toh daale)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={inputStyle}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={fileInputStyle}
            required
          />
          <button 
            type="submit" 
            disabled={loading || !name || !file}
            style={buttonStyle}
          >
            {loading ? '⏳ Upload ho raha...' : '✅ Add Product'}
          </button>
        </form>
      </section>

      {/* Products List - FIXED PRICE DISPLAY */}
      <section>
        <h2>📋 Saare Products ({products.length})</h2>
        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={productCardStyle}>
              <img 
                src={`https://pmbufhwkrkpibdvhcjhj.supabase.co/storage/v1/object/public/product-images/${product.image_url}`} 
                alt={product.name}
                style={{ 
                  width: '80px', height: '80px', 
                  objectFit: 'cover', borderRadius: '8px' 
                }}
              />
              <div style={{flex: 1}}>
                <h4>{product.name}</h4>
                {/* FIXED: No ₹0 display */}
                {product.price ? (
                  <p>₹{product.price}</p>
                ) : (
                  <p>Price TBD</p>
                )}
                <small>{new Date(product.created_at).toLocaleDateString()}</small>
              </div>
              <button 
                onClick={() => deleteProduct(product.id)}
                style={deleteButtonStyle}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
          {products.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
              Abhi koi product nahi hai. Upar form se add karo!
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

// STYLES (UNCHANGED)
const loginInputStyle = {
  width: '100%', padding: '15px', margin: '10px 0', 
  border: '2px solid #e2e8f0', borderRadius: '8px', 
  fontSize: '16px', boxSizing: 'border-box'
}

const loginButtonStyle = {
  width: '100%', padding: '15px', background: '#3b82f6', 
  color: 'white', border: 'none', borderRadius: '8px', 
  fontSize: '16px', cursor: 'pointer'
}

const inputStyle = {
  width: '100%', padding: '12px', margin: '8px 0', 
  border: '1px solid #ddd', borderRadius: '6px', 
  fontSize: '16px'
}

const fileInputStyle = {
  ...inputStyle, padding: '10px'
}

const buttonStyle = {
  width: '100%', padding: '12px', background: '#28a745', 
  color: 'white', border: 'none', borderRadius: '6px', 
  fontSize: '16px', cursor: 'pointer'
}

const deleteButtonStyle = {
  padding: '8px 16px', background: '#dc3545', 
  color: 'white', border: 'none', borderRadius: '5px', 
  cursor: 'pointer', fontSize: '14px'
}

const logoutStyle = {
  padding: '10px 20px', background: '#ef4444', 
  color: 'white', border: 'none', borderRadius: '6px', 
  cursor: 'pointer'
}

const productCardStyle = {
  display: 'flex', gap: '15px', padding: '20px', 
  border: '1px solid #eee', borderRadius: '8px', 
  alignItems: 'center', background: 'white'
}
