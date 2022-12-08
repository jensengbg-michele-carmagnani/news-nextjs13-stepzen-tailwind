'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  key: string;
  category: string;
  isActive: boolean;
};

export default function Navlink({ category, key, isActive }: Props) {
  return (
    <Link
      className={`navLink ${
        isActive &&
        'underline decoration-red-700 underline-offset-4 font-bold text-lg'
      } `}
      href={`/news/${category}`}
      key={key}
    >
      {category}
    </Link>
  );
}
