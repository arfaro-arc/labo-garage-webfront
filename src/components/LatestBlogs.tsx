
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: '冬タイヤ交換のベストタイミングとは？',
      excerpt: '冬の安全運転に欠かせないタイヤ交換。適切な交換時期と注意点について解説します。',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      date: '2024年6月10日',
      category: '整備tips'
    },
    {
      id: 2,
      title: 'エンジンオイル交換の重要性',
      excerpt: '愛車を長持ちさせるために欠かせないエンジンオイル交換について詳しく説明します。',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
      date: '2024年6月5日',
      category: 'メンテナンス'
    },
    {
      id: 3,
      title: '車検前にチェックしたいポイント',
      excerpt: '車検をスムーズに通すために事前に確認しておきたい項目をまとめました。',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop',
      date: '2024年5月28日',
      category: '車検'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          最新のブログ記事
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    {blog.date}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            ブログ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
