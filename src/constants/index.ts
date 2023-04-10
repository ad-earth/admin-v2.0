export const CATEGORY = [
  '욕실',
  '주방',
  '음료용품',
  '생활',
  '식품',
  '화장품',
  '문구',
];
export const PARCEL_STATUS = ['전체', '신규주문', '배송완료', '주문취소'];
export const SERVICE_HEAD_LIST = [
  'No',
  '주문번호',
  '상품번호',
  '상품명',
  '수량',
  '아이디',
  '수령인',
  '주소',
  '연락처',
  '배송메시지',
  '주문일자',
  '배송상태',
];
export const EXCEL_HEAD_LIST = [
  { label: '주문번호', key: 'orderNo' },
  { label: '상품번호', key: 'prodNo' },
  { label: '상품명', key: 'prodName' },
  { label: '수량', key: 'prodQty' },
  { label: '아이디', key: 'userId' },
  { label: '수령인', key: 'userName' },
  { label: '주소', key: 'address' },
  { label: '연락처', key: 'phone' },
  { label: '배송메시지', key: 'comment' },
  { label: '주문일자', key: 'orderDate' },
  { label: '배송상태', key: 'status' },
];
export const ID_REG = /^[a-zA-Z0-9]{5,10}$/;
export const PWD_REG =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
export const PHONE_REG = /^\d{3}-\d{3,4}-\d{4}$/;

export const AdHeads = [
  'NO',
  '키워드',
  '클릭 수',
  '평균 클릭 비용',
  '총 광고비',
  '총 전환 수',
  '전환율',
  '판매금액',
  '수익률',
];
