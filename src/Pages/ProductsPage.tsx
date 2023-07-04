import React from "react";
import Product from "../Components/Product";
import { useProducts } from "../Hooks/products";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Modal from "../Components/Modal";
import CreateProduct from "../Components/CreateProduct";
import { useContext } from "react";
import IProduct from "../models";
import { ModalContext } from "../Context/ModalContext";

export default function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Search the product" onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        onClick={openModal}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-8  py-5"
      >
        +
      </button>
    </div>
  );
}
