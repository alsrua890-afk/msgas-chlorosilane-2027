export interface ProductDetail {
  id: 'dcs' | 'tcs' | 'stc';
  code: string;
  name: string;
  englishName: string;
  formula: string;
  subtitle: string;
  casNo: string;
  unNo: string;
  purityGrade: string;
  purityPercent: number;
  impurityHighlight: string;
  applications: string;
  supplyFeatures: string;
  colorClass: string;
  badgeClass: string;
  btnClass: string;
  purityBarWidth: string;
  barColor: string;
  boilingPoint: string;
  meltingPoint: string;
  density: string;
  vaporPressure: string;
  flashPoint: string;
  packagingTypes: string[];
  coAData: {
    lotNumber: string;
    manufacturingDate: string;
    testDate: string;
    assay: string;
    metals: { element: string; symbol: string; spec: string; measured: string; unit: string }[];
    gases: { component: string; spec: string; measured: string; unit: string }[];
  };
}

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: 'dcs',
    code: 'DCS SPECIALTY',
    name: 'DCS 디클로로실란',
    englishName: 'Dichlorosilane',
    formula: 'SiH₂Cl₂',
    subtitle: 'Dichlorosilane for Semiconductor Deposition',
    casNo: '4109-96-0',
    unNo: '2189',
    purityGrade: '5N (≥99.999%)',
    purityPercent: 99.999,
    impurityHighlight: '금속 불순물 < 0.1 ppb',
    applications: '반도체 에피택시(Epitaxy) 공정, SiN(질화막) 증착, 저온 폴리실리콘 박막 형성',
    supplyFeatures: '충남 공주 전용 소분 라인 상시 가동, Fab 배관 직결용 440L Y-실린더 지원',
    colorClass: 'text-secondary',
    badgeClass: 'bg-surface-container-high text-secondary',
    btnClass: 'bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant',
    purityBarWidth: '95%',
    barColor: 'bg-secondary',
    boilingPoint: '8.3°C',
    meltingPoint: '-122°C',
    density: '1.22 g/cm³ (at 0°C)',
    vaporPressure: '1.67 bar (at 20°C)',
    flashPoint: '-28°C (극인화성 가스)',
    packagingTypes: ['47L 실린더 (25kg)', '440L Y-Cylinder (250kg)', '대용량 톤실린더 (Ton Container)'],
    coAData: {
      lotNumber: 'MSG-DCS-20261014-G01',
      manufacturingDate: '2026-10-14',
      testDate: '2026-10-16',
      assay: '99.9994%',
      metals: [
        { element: '철 (Iron)', symbol: 'Fe', spec: '< 0.10 ppb', measured: '0.012 ppb', unit: 'ppb' },
        { element: '크롬 (Chromium)', symbol: 'Cr', spec: '< 0.05 ppb', measured: '0.004 ppb', unit: 'ppb' },
        { element: '니켈 (Nickel)', symbol: 'Ni', spec: '< 0.05 ppb', measured: '0.003 ppb', unit: 'ppb' },
        { element: '구리 (Copper)', symbol: 'Cu', spec: '< 0.05 ppb', measured: '0.002 ppb', unit: 'ppb' },
        { element: '알루미늄 (Aluminum)', symbol: 'Al', spec: '< 0.10 ppb', measured: '0.018 ppb', unit: 'ppb' },
        { element: '아연 (Zinc)', symbol: 'Zn', spec: '< 0.05 ppb', measured: '0.005 ppb', unit: 'ppb' },
      ],
      gases: [
        { component: '단일실란 (SiH₄)', spec: '< 10 ppm', measured: '1.2 ppm', unit: 'ppm' },
        { component: '모노클로로실란 (SiH₃Cl)', spec: '< 50 ppm', measured: '4.8 ppm', unit: 'ppm' },
        { component: '트리클로로실란 (SiHCl₃)', spec: '< 100 ppm', measured: '12.0 ppm', unit: 'ppm' },
        { component: '염화수소 (HCl)', spec: '< 1.0 ppm', measured: '< 0.1 ppm', unit: 'ppm' },
      ],
    },
  },
  {
    id: 'tcs',
    code: 'TCS SPECIALTY',
    name: 'TCS 트리클로로실란',
    englishName: 'Trichlorosilane',
    formula: 'SiHCl₃',
    subtitle: 'Trichlorosilane for Polysilicon & Epi Wafer',
    casNo: '10025-78-2',
    unNo: '1295',
    purityGrade: '9N ~ 11N Ultra-High',
    purityPercent: 99.9999999,
    impurityHighlight: '도너/액셉터 불순물 정밀 통제',
    applications: '고순도 반도체급 폴리실리콘 제조, 실리콘 웨이퍼 기상 성장(CVD) 단결정 에피택시',
    supplyFeatures: '대량 벌크 컨테이너(ISO Tank)부터 톤실린더까지 유연한 맞춤 로트 충전 관리',
    colorClass: 'text-primary-container',
    badgeClass: 'bg-surface-container-high text-primary-container',
    btnClass: 'bg-primary-container text-on-primary hover:bg-primary',
    purityBarWidth: '99%',
    barColor: 'bg-primary-container',
    boilingPoint: '31.8°C',
    meltingPoint: '-126.5°C',
    density: '1.34 g/cm³ (at 20°C)',
    vaporPressure: '0.67 bar (at 20°C)',
    flashPoint: '-27°C (극인화성 액체/증기)',
    packagingTypes: ['440L Y-실린더 (400kg)', '1-Ton Container (1,000kg)', 'ISO Tank (18,000kg)'],
    coAData: {
      lotNumber: 'MSG-TCS-20261012-G09',
      manufacturingDate: '2026-10-12',
      testDate: '2026-10-15',
      assay: '99.99999992%',
      metals: [
        { element: '붕소 (Boron)', symbol: 'B', spec: '< 0.010 ppb', measured: '0.001 ppb', unit: 'ppb' },
        { element: '인 (Phosphorus)', symbol: 'P', spec: '< 0.010 ppb', measured: '0.002 ppb', unit: 'ppb' },
        { element: '비소 (Arsenic)', symbol: 'As', spec: '< 0.010 ppb', measured: '< 0.001 ppb', unit: 'ppb' },
        { element: '알루미늄 (Aluminum)', symbol: 'Al', spec: '< 0.020 ppb', measured: '0.003 ppb', unit: 'ppb' },
        { element: '철 (Iron)', symbol: 'Fe', spec: '< 0.020 ppb', measured: '0.002 ppb', unit: 'ppb' },
        { element: '탄소 (Carbon)', symbol: 'C', spec: '< 0.10 ppm', measured: '0.02 ppm', unit: 'ppm' },
      ],
      gases: [
        { component: '디클로로실란 (SiH₂Cl₂)', spec: '< 5.0 ppm', measured: '0.4 ppm', unit: 'ppm' },
        { component: '사염화규소 (SiCl₄)', spec: '< 20.0 ppm', measured: '3.1 ppm', unit: 'ppm' },
        { component: '메틸클로로실란류 (Me-Si)', spec: '< 0.5 ppm', measured: '< 0.05 ppm', unit: 'ppm' },
      ],
    },
  },
  {
    id: 'stc',
    code: 'STC SPECIALTY',
    name: 'STC 사염화규소',
    englishName: 'Silicon Tetrachloride',
    formula: 'SiCl₄',
    subtitle: 'Silicon Tetrachloride for Optical Fiber Core',
    casNo: '10026-04-7',
    unNo: '1818',
    purityGrade: 'Optical High Purity',
    purityPercent: 99.9995,
    impurityHighlight: '수분(H₂O) < 0.5 ppm 통제',
    applications: '초저손실 광섬유 모재(Preform) 코어 형성, 고순도 흄드 실리카(Fumed Silica) 합성',
    supplyFeatures: '전이금속 및 수분 함량 엄격 제어, 고객사 긴급 생산 라인 직송 안전재고 상시 보유',
    colorClass: 'text-outline',
    badgeClass: 'bg-surface-container-high text-outline',
    btnClass: 'bg-surface-container-highest text-on-surface hover:bg-surface-container-high',
    purityBarWidth: '92%',
    barColor: 'bg-surface-tint',
    boilingPoint: '57.6°C',
    meltingPoint: '-70°C',
    density: '1.48 g/cm³ (at 20°C)',
    vaporPressure: '0.26 bar (at 20°C)',
    flashPoint: '비인화성 (단, 수분 반응 시 HCl 급격 발생)',
    packagingTypes: ['440L Y-Cylinder (500kg)', '1-Ton Cylinder (1,200kg)', 'ISO Tank 벌크'],
    coAData: {
      lotNumber: 'MSG-STC-20261010-S03',
      manufacturingDate: '2026-10-10',
      testDate: '2026-10-14',
      assay: '99.9996%',
      metals: [
        { element: '바나듐 (Vanadium)', symbol: 'V', spec: '< 0.5 ppb', measured: '0.04 ppb', unit: 'ppb' },
        { element: '철 (Iron)', symbol: 'Fe', spec: '< 1.0 ppb', measured: '0.08 ppb', unit: 'ppb' },
        { element: '니켈 (Nickel)', symbol: 'Ni', spec: '< 0.5 ppb', measured: '0.03 ppb', unit: 'ppb' },
        { element: '구리 (Copper)', symbol: 'Cu', spec: '< 0.5 ppb', measured: '0.02 ppb', unit: 'ppb' },
        { element: '크롬 (Chromium)', symbol: 'Cr', spec: '< 0.5 ppb', measured: '0.03 ppb', unit: 'ppb' },
        { element: '망간 (Manganese)', symbol: 'Mn', spec: '< 0.5 ppb', measured: '0.01 ppb', unit: 'ppb' },
      ],
      gases: [
        { component: '수분 (H₂O)', spec: '< 0.5 ppm', measured: '0.12 ppm', unit: 'ppm' },
        { component: '수소화규소계 (Si-H 화합물)', spec: '< 2.0 ppm', measured: '0.2 ppm', unit: 'ppm' },
        { component: '유리염소 (Free Cl₂)', spec: '< 1.0 ppm', measured: '< 0.1 ppm', unit: 'ppm' },
      ],
    },
  },
];

export interface LogisticsHub {
  name: string;
  role: string;
  location: string;
  coverage: string;
  leadTime: string;
}

export const LOGISTICS_HUBS: LogisticsHub[] = [
  { name: '충남 공주 클린룸 특수가스 소분 공장', role: '핵심 생산 및 2차 QA 분석 센터', location: '충남 공주시 탄천면 산업단지', coverage: '전국 Fab 직송 거점', leadTime: '24시간 상시 가동' },
  { name: '화성 반도체 Fab 전용 로지스틱스 센터', role: '수도권 Fab 긴급 공급망', location: '경기 화성시 동탄/반월권', coverage: '삼성전자 화성/기흥 라인', leadTime: '2시간 이내 직송' },
  { name: '평택 고덕 반도체 거점 물류센터', role: '고덕 캠퍼스 대용량 안전재고 버퍼', location: '경기 평택시 고덕면', coverage: '삼성 평택 Fab 단지', leadTime: '1시간 이내 직결 배송' },
  { name: '이천 하이닉스 인접 특수가스 데포', role: 'SK하이닉스 이천 캠퍼스 직송망', location: '경기 이천시 부발읍', coverage: 'SK하이닉스 이천 M14/M16', leadTime: '1.5시간 이내 직결' },
  { name: '청주 반도체 메가Fab 지원 허브', role: '충청권 반도체 거점 데포', location: '충북 청주시 흥덕구 직지대로', coverage: 'SK하이닉스 청주 M15/M15X', leadTime: '1시간 이내 직송' },
  { name: '울산 석유화학 및 전자소재 기지', role: '영남권 화학·소재 물류 지원', location: '울산광역시 남구 여천동', coverage: '영남권 반도체 및 실리콘 잉곳 팹', leadTime: '4시간 이내 배송' },
  { name: '여수 국가산단 특수가스 베이스', role: '호남권 원료 입하 및 통관 연계', location: '전남 여수시 중달동', coverage: '호남권 반도체/디스플레이 라인', leadTime: '4시간 이내 배송' },
];

export interface CylinderSpecItem {
  type: string;
  waterCapacity: string;
  fillWeightDCS: string;
  fillWeightTCS: string;
  valveFitting: string;
  internalTreatment: string;
  targetUse: string;
}

export const CYLINDER_SPECS: CylinderSpecItem[] = [
  {
    type: '47L 고압 실린더',
    waterCapacity: '47.0 L',
    fillWeightDCS: '약 25 ~ 30 kg',
    fillWeightTCS: '약 40 ~ 45 kg',
    valveFitting: 'CGA 678 / DISS 632',
    internalTreatment: 'Ra ≤ 0.15 µm 전해연마(EP)',
    targetUse: '신규 레시피 연구개발(R&D), 파일럿 라인 증착 평가용',
  },
  {
    type: '440L Y-실린더 (표준)',
    waterCapacity: '440 L',
    fillWeightDCS: '약 250 ~ 300 kg',
    fillWeightTCS: '약 400 ~ 450 kg',
    valveFitting: 'CGA 678 (Pneumatic DISS 호환)',
    internalTreatment: '고순도 전해연마 + 헬륨 기밀 전수 테스트',
    targetUse: '양산 Fab 가스 캐비닛(Gas Cabinet) 직결 표준 공급용',
  },
  {
    type: '1-Ton 실린더 (대형)',
    waterCapacity: '1,000 L',
    fillWeightDCS: '약 650 kg',
    fillWeightTCS: '약 1,000 kg',
    valveFitting: '듀얼 밸브 (기상/액상 배출 독립 라인)',
    internalTreatment: '내식성 SUS316L + 무산소 건조 질소 치환',
    targetUse: '에피택시 웨이퍼 대량 생산 라인 및 고순도 폴리실리콘 CVD',
  },
  {
    type: '20ft ISO Tank 컨테이너',
    waterCapacity: '17,500 ~ 20,000 L',
    fillWeightDCS: '협의 (위험물 기준)',
    fillWeightTCS: '약 18,000 ~ 20,000 kg',
    valveFitting: '국제 해상 및 육상 운송 규격 플랜지',
    internalTreatment: 'IMDG / ASME U-Stamp 인증 탱크',
    targetUse: '글로벌 원료 직도입 및 공주 공장 벌크 비축용',
  },
];
