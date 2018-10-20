import React from 'react';
import Layout from './components/Layout';
import Head from 'next/head';

const Search = ({url}) => {
    return (
        <Layout>
          <Head>
            <title>
              Next.js 연습 - 검색
            </title>
          </Head>
          당신이 검색한 키워드는 "{url.query.keyword}" 입니다.
        </Layout>
    );
};

export default Search;