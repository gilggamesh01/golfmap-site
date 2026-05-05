export interface GolfCourse {
  id: number;
  name: string;
  region: string;
  lat: number;
  lng: number;
  address: string;
}

export interface Region {
  id: string;
  name: string;
  center: { lat: number; lng: number };
  zoom: number;
}

export const regions: Region[] = [
  { id: 'all', name: '전국', center: { lat: 36.5, lng: 127.5 }, zoom: 7 },
  { id: 'gyeonggi', name: '경기도', center: { lat: 37.4138, lng: 127.5183 }, zoom: 10 },
  { id: 'gangwon', name: '강원도', center: { lat: 37.8228, lng: 128.1555 }, zoom: 9 },
  { id: 'chungcheong', name: '충청도', center: { lat: 36.6356, lng: 127.4913 }, zoom: 9 },
  { id: 'gyeongsang', name: '경상도', center: { lat: 35.8893, lng: 128.6150 }, zoom: 9 },
  { id: 'jeolla', name: '전라도', center: { lat: 35.7167, lng: 127.1441 }, zoom: 9 },
  { id: 'jeju', name: '제주도', center: { lat: 33.3617, lng: 126.5292 }, zoom: 11 },
];

export const golfCourses: GolfCourse[] = [
  { id: 1, name: '가평 베네스트 GC', region: 'gyeonggi', lat: 37.8315, lng: 127.4431, address: '경기도 가평군 상면' },
  { id: 2, name: '남부 CC', region: 'gyeonggi', lat: 37.2652, lng: 127.1118, address: '경기도 용인시 기흥구' },
  { id: 3, name: '잭 니클라우스 골프클럽 코리아', region: 'gyeonggi', lat: 37.3853, lng: 126.6318, address: '인천광역시 연수구' },
  { id: 4, name: '트리니티 클럽', region: 'gyeonggi', lat: 37.2285, lng: 127.5312, address: '경기도 여주시' },
  { id: 5, name: '라비에벨 CC', region: 'gangwon', lat: 37.7712, lng: 127.8123, address: '강원도 춘천시' },
  { id: 6, name: '우정힐스 CC', region: 'chungcheong', lat: 36.7456, lng: 127.2891, address: '충청남도 천안시' },
  { id: 7, name: '핀크스 GC', region: 'jeju', lat: 33.2956, lng: 126.3981, address: '제주특별자치도 서귀포시' },
];
