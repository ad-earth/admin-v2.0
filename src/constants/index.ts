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
  {
    id: 0,
    val: 'NO',
  },
  {
    id: 1,
    val: '주문번호',
  },
  {
    id: 2,
    val: '상품번호',
  },
  {
    id: 3,
    val: '상품명',
  },
  {
    id: 4,
    val: '수량',
  },
  {
    id: 5,
    val: '아이디',
  },
  {
    id: 6,
    val: '수령인',
  },
  {
    id: 7,
    val: '주소',
  },
  {
    id: 8,
    val: '연락처',
  },
  {
    id: 9,
    val: '배송메시지',
  },
  {
    id: 10,
    val: '주문일자',
  },
  {
    id: 11,
    val: '배송상태',
  },
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

export const DATELIST = ['3개월', '2개월', '1개월'];

export const ADHEADS = [
  {
    id: 0,
    val: 'NO',
  },
  {
    id: 1,
    val: '키워드',
  },
  {
    id: 2,
    val: '클릭 수',
  },
  {
    id: 3,
    val: '평균 클릭 비용',
    tooltip: '총 광고비 / 클릭 수',
  },
  {
    id: 4,
    val: '총 광고비',
  },
  {
    id: 5,
    val: '총 전환 수',
    tooltip: '광고 판매 횟수',
  },
  {
    id: 6,
    val: '전환율',
    tooltip: '(총 전환 수 / 클릭 수) *100',
  },
  {
    id: 7,
    val: '판매금액',
  },
  {
    id: 8,
    val: '수익률',
    tooltip: '(판매금액 / 총 광고비) *100',
  },
];
