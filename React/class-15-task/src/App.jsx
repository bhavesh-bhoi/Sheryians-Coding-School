import axios from 'axios'

function App() {
  
  const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>GET all products</button>
    </div>
  )
}

export default App
