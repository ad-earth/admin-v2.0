export const CATEGORY = [
  '욕실',
  '주방',
  '음료용품',
  '생활',
  '식품',
  '화장품',
  '문구',
];
export const PARCELSTATUS = ['전체', '신규주문', '배송완료', '주문취소'];
export const SERVICEHEADLIST = [
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
export const ID_REG = /^[a-zA-Z0-9]{5,10}$/;
export const PWD_REG =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
export const PHONE_REG = /^\d{3}-\d{3,4}-\d{4}$/;
