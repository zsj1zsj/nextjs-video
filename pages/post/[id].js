import {useRouter} from 'next/router';
import Image from 'next/image';

const Post = ({ data }) => {
  if (!data) return <div>加载中...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>
        <Image 
          src={data.sprites.other["official-artwork"].front_default}
          alt={`pokemon pic`}
          height={400}
          width={400}
          unoptimized
        />
        </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error('获取宝可梦数据时出错：', error);
    return {
      props: { data: null },
    };
  }
}

export default Post;