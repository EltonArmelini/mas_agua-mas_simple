import { useState } from "react";

const NewProduct = () => {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto creado:", formData);
    // Aquí puedes agregar lógica para manejar el envío del formulario, como una llamada a una API.
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categoría
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock Inicial
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
