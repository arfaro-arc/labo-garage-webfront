
import Header from '../components/Header';
import LineButton from '../components/LineButton';

const Blog = () => {
  const blogPosts = [
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            整備ブログ
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    続きを読む →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <LineButton />
    </div>
  );
};

export default Blog;
