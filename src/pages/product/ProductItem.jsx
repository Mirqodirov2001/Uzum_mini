import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs /Breadcrumb";
import { useParams } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";

const ProductItem = () => {
  let [product, setProduct] = useState([]);
  let { slug } = useParams();

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
      console.log(res.data[0]);
    });
  };

  useEffect(() => {
    state();
  }, [slug]);

  return (
    <section id="item" className="my-8">
      <div className="container mx-auto">
        <Breadcrumb product={product} />
      </div>

      <div className="container mx-auto mt-4"></div>
    </section>
  );
};

export default ProductItem;
