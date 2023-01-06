import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api.js';
import axios from 'axios';

export default function ListPage() {
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await getProducts();
        // console.log(res);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return <h1>상품 목록 페이지입니다.</h1>;
}
