import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const { productId } = useParams();
  return <h1>{productId}번 상품 상세 페이지입니다.</h1>;
}
