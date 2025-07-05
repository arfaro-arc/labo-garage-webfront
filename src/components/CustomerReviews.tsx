
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: '田中 太郎',
      rating: 5,
      comment: '丁寧な説明と確実な技術で、安心して愛車を任せることができます。スタッフの皆さんもとても親切で、また利用したいと思います。',
      date: '2024年5月'
    },
    {
      name: '佐藤 花子',
      rating: 5,
      comment: '車検でお世話になりました。事前の説明が分かりやすく、料金も明確で信頼できます。おかげで愛車がまた元気になりました。',
      date: '2024年4月'
    },
    {
      name: '山田 一郎',
      rating: 4,
      comment: '急な故障にも迅速に対応していただき、本当に助かりました。技術力の高さを実感できる整備工場だと思います。',
      date: '2024年3月'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          お客様の声
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.comment}
              </p>
              
              <div className="text-right">
                <span className="text-sm font-medium text-gray-600">
                  {review.name} 様
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
