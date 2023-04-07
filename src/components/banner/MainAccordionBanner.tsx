import { useState } from 'react';
import AccordionItem from './AccordionItem';
import styles from './mainAccordionBanner.module.scss';

export default function MainAccordionBanner() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className={styles.base}>
      <article className={styles.article}>
        <div className={styles.heading}>
          <h1>
            <span> 상품광고에 대한 오해와 진실.</span>
            <br />
            여러분이 궁금한 질문이 있는지 찾아보시고, <br />
            광고지구 전문가의 설명을 들어보세요!
          </h1>
        </div>
        {menuList.map((menu, idx: number) => (
          <AccordionItem
            key={idx}
            index={idx}
            title={menu.title}
            description={menu.description}
            active={active}
            setActive={setActive}
          />
        ))}
      </article>
    </div>
  );
}

const menuList = [
  {
    title: '1. 광고지구가 처음이라 매출이 작은데도 광고할 수 있을까요?',
    description: [
      '빠르게 성장하는 광고지구 플랫폼에 참여해주신 고객님을 환영합니다.',
      '광고가 처음이어도, 광고에 대해 전혀 몰라도 광고지구 상품광고라면 문제 없습니다.',
      '광고지구 상품광고는 광고비와 원하는 수익률을 산정하면 되는 간단한 방식이라서 시작하기도, 운영하기도, 성과를 측정하기도 쉽습니다.',
    ],
  },
  {
    title: '2. 광고를 어떻게 하는지 모르겠습니다',
    description: [
      '상품광고를 집행해보시지도 않고 대행사를 이용해야 한다거나 혹은 직접 하게되면 돈 낭비가 많다고 생각하시나요?',
      '많은 판매자 분들이 상품광고를 하고 싶어도 어려워서 주저하시는 경우가 많습니다. ',
      '광고지구 상품광고는 운영하기 쉽고 결과도 바로 볼 수 있어서 쉽게 매출 성장을 이룰 수 있습니다. 광고지구 광고와 함께 한 걸음 앞서가세요!',
    ],
  },
  {
    title: '3. 광고는 비쌀 것 같아 망설여집니다',
    description: [
      '상품광고를 집행해보시기도 전에 막연히 비싸다고 생각하시나요?',
      '광고지구는 키워드별 최저가 90원부터 부담없이! 저렴한 가격으로 광고지구 광고의 효과를 바로 확인 해보세요. 광고지구에서 상품광고로 자리를 확고히 하시고, 전체 매출성장에 날개를 달아보세요!',
    ],
  },
  {
    title: '4. 매출이 나오고 있지만 더 상승하지 않아 고민입니다',
    description: [
      '상품광고를 집행해보시지도 않고 막연히 효과가 없을거라는 생각을 가지고 계신가요?',
      '상품광고로 매출성장을 경험한 많은 광고주 분들처럼, 최근의 매출성장 둔화는 상품광고로 극복할 수 있습니다. 광고지구 상품광고는 보통의 다른 광고와는 달리 판매자의 꾸준한 매출 증대를 위해 고안되었습니다. 매출 최적화 광고로 효율과 매출 둘 다 놓치지 마세요.',
    ],
  },
  {
    title: '5. 이미 광고 없이도 매출이 잘 나오고 있습니다',
    description: [
      '고객님께는 광고지구에사 성공적인 매출을 기록하고 계셔서 굳이 상품광고가 필요하지 않다고 생각하실 수도 있습니다.',
      '하지만 판매자님의 상품 잠재력은 생각하시는 것보다 훨씬 클 수 있습니다. 상품의 잠재력에 광고 시너지가 더해졌을 때 그 효과는 큰 폭의 매출 성장으로 나타납니다. 상품광고로 매출성장을 경험한 많은 광고주 분들처럼, 상품광고는 매출증가를 이룰 수 있는 좋은 방법입니다. 광고지구에서 상품광고 하시고 매출성장의 모멘텀을 높여보세요!',
    ],
  },
];
