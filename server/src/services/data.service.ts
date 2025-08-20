export class DataService {
  async getData(type: string) {
    // 샘플 데이터 - 실제로는 DB나 외부 API에서 가져옴
    const dataMap: Record<string, any> = {
      products: [
        { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/150' }
      ],
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://via.placeholder.com/100'
      },
      categories: [
        { id: 1, name: 'Electronics', icon: '📱' },
        { id: 2, name: 'Clothing', icon: '👕' },
        { id: 3, name: 'Books', icon: '📚' }
      ]
    };

    return dataMap[type] || null;
  }
}