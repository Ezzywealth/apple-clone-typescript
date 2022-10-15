import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Index from "../components/Homepage";
import { GetServerSideProps } from "next";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";

const Home = ({ categories, products }: CatProps) => {
  // console.log(products);
  return (
    <Layout title='Apple Redesign'>
      <Index categories={categories} products={products} />
    </Layout>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps<CatProps> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  console.log(products);

  return {
    props: {
      categories,
      products,
    },
  };
};
